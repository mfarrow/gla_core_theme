<?php

/**
 * @file
 * Template suggestions for fields.
 */

/**
 * Implements hook_theme_suggestions_field_alter().
 */
function gla_core_theme_theme_suggestions_field_alter(array &$suggestions, array $variables) {
  $element = $variables['element'];
  $field_name = $element['#field_name'];

  // Sometimes we don't want any wrapping elements as it will interfere with
  // our own components. This is often the case when we are passing an image
  // into a component to allow Drupal to do the work of creating a picture
  // element, but we don't want any wrapper div elements.
  //
  // You can also use a preprocess to do something like this:
  // phpcs:ignore Drupal.Files.LineLength.TooLong
  // $variables['content']['field_p_cta_image']['#theme'] = 'field__no_wrappers';
  switch ($field_name) {
    case 'thumbnail':
    case 'field_p_bq_supporting_image':
    case 'field_p_a_items':
    case 'field_p_ai_components':
    case 'field_p_awh_accordion':
    case 'field_p_hh_components':
    case 'field_p_hh_image':
    case 'field_p_hh_video':
      $suggestions[] = 'field__no_wrappers';
      break;
  }

  if ($field_name == 'field_media_image') {
    switch ($element['#view_mode']) {
      case 'hero_header':
        $suggestions[] = 'field__no_wrappers';
        break;
    }
  }

  if ($field_name == 'field_media_video_file') {
    switch ($element['#view_mode']) {
      case 'hero_header':
        $suggestions[] = 'field__no_wrappers';
        break;
    }
  }
}
