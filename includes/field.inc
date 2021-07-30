<?php

/**
 * @file
 * Theme and preprocess functions for fields.
 */

/**
 * Implements hook_preprocess_field().
 */
function gla_core_theme_preprocess_field(&$variables) {
  if (
    $variables['field_type'] == 'entity_reference_revisions'
    &&
    $variables['element']['#items']->getItemDefinition()->getSetting('target_type') == 'paragraph'
  ) {
    foreach ($variables['items'] as $index => $item) {
      // For field items that represent Paragraphs it can be useful to know
      // what position the Paragraph is in the field (assuming a multi-value
      // field) and also what the parent and grandparent Paragraph entities are.
      // This allows us to add conditional markup to, say, a rich text Paragraph
      // if it is inside an Accordion, compared to if it is inside a Page
      // Section.
      $variables['items'][$index]['content']['#paragraph']->index = $index;
      $variables['items'][$index]['content']['#paragraph']->is_first = ($index == 0);
      $variables['items'][$index]['content']['#paragraph']->is_last = ($index == count($variables['items']) - 1);

      $parent = $item['content']['#paragraph']->getParentEntity();
      if ($parent) {
        $variables['items'][$index]['content']['#paragraph']->parent = $parent->bundle();

        if (method_exists($parent, 'getParentEntity')) {
          $grandparent = $item['content']['#paragraph']->getParentEntity()->getParentEntity();
          if ($grandparent) {
            $variables['items'][$index]['content']['#paragraph']->grandparent = $grandparent->bundle();
          }
        }
      }
    }
  }
}
