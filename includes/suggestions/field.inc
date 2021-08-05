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
  // As well as via this file, you can also use a preprocess to do something
  // like this (note the 3 underscores, not 2):
  // phpcs:ignore Drupal.Files.LineLength.TooLong
  // $variables['content']['field_p_cta_image']['#theme'] = 'field___no_wrappers';
  switch ($field_name) {
    case 'thumbnail':
    case 'field_p_bq_supporting_image':
      $suggestions[] = 'field__no_wrappers';
      break;
  }
}
