<?php

/**
 * @file
 * Template suggestions for media entities.
 */

/**
 * Implements hook_theme_suggestions_media_alter().
 */
function gla_core_theme_theme_suggestions_media_alter(array &$suggestions, array $variables) {
  $elements = $variables['elements'];

  // Sometimes we don't want any wrapping elements as it will interfere with
  // our own components.
  switch ($elements['#view_mode']) {
    case 'hero_header':
      $suggestions[] = 'media__no_wrappers';
      break;
  }

  if ($elements['#media']->bundle() === 'image') {
    switch ($elements['#view_mode']) {
      case 'portrait_3_4':
      case 'square_1_1':
      case 'landscape_16_9':
      case 'landscape_4_3':
        $suggestions[] = "media__no_wrappers";
        break;
    }
  }
}
