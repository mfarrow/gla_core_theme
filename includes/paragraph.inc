<?php

/**
 * @file
 * Theme and preprocess functions for paragraphs.
 */

use Drupal\Core\Template\Attribute;

/**
 * Implements hook_preprocess_paragraph().
 */
function gla_core_theme_preprocess_paragraph(&$variables) {
  /** @var \Drupal\paragraphs\Entity\Paragraph $paragraph */
  $paragraph = $variables['paragraph'];
  /** @var \Drupal\gla_core_profile\ParagraphHelper $paragraphHelper */
  $paragraphHelper = \Drupal::service('gla_core_profile.paragraph_helper');

  if ($paragraphHelper->getParentParagraph($paragraph)) {
    // Add a cache tag for the parent entity to prevent issues where the
    // parent_bundle variable is incorrectly set due to caching.
    $variables['parent_bundle'] = $paragraphHelper->getParentParagraph($paragraph)->bundle();
    $variables['#cache']['tags'][] = 'parent_entity_bundle:' . $variables['parent_bundle'];
  }

  switch ($paragraph->bundle()) {
    case 'accordion_item':
      $heading = $paragraph->field_p_ai_heading->first()->value;
      // Piggyback on the text filter that we use to add IDs to headings in
      // Rich text to also generate an ID for us to use in our accordion items.
      $heading_id = _gla_core_theme_transform_text_to_id($heading);
      $variables['attributes'] = new Attribute([
        'id' => $heading_id,
        // Add tabindex to help screenreader users, see https://www.voorhoede.nl/en/blog/why-skip-links-are-important-for-accessibility/#fn1
        'tabindex' => '-1',
      ]);

      $is_inside_accordion_with_sub = $paragraphHelper->findClosestBundle($paragraph, 'accordion_w_sub');
      if ($is_inside_accordion_with_sub) {
        $variables['heading_level'] = 4;
      }
      break;

    case 'accordion_w_sub':
      $heading = $paragraph->field_p_awh_heading->first()->value;
      $heading_id = _gla_core_theme_transform_text_to_id($heading);
      $variables['content']['field_p_awh_heading']['#attributes'] = new Attribute([
        'id' => $heading_id,
        'tabindex' => '-1',
      ]);
      break;

    case 'page_header':
      if ($paragraph->hasField('field_p_ph_image') && isset($variables['content']['field_p_ph_image']['0'])) {
        $variables['content']['field_p_ph_image'][0]['#item_attributes']['class'] = [
          'u-object-cover',
          'u-w-full',
          'u-h-full',
        ];
      }
      break;

    case 'hero_image':
      if ($paragraph->hasField('field_p_hi_image') && isset($variables['content']['field_p_hi_image']['0'])) {
        $variables['content']['field_p_hi_image'][0]['#item_attributes']['class'] = [
          'u-object-cover',
          'u-w-full',
        ];
      }
      break;
  }
}
