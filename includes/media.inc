<?php

/**
 * @file
 * Theme and preprocess functions for media.
 */

/**
 * Prepares variables for media templates.
 *
 * @param array $variables
 *   An associative array containing:
 *   - media: An individual media for display.
 */
function gla_core_theme_preprocess_media(array &$variables) {
  $variables['media'] = $variables['elements']['#media'];
  $variables['id'] = $variables['media']->id();

  if (isset($variables['media']->field_media_document)) {
    $file = $variables['media']->field_media_document->entity;
    
    if ($file) {
      // For document media items provide the file entity via Twig for
      // templates to use, and provide a formatted file size and extension as
      // a convenience to template authors.
      $variables['file'] = $file;
      $variables['file_size'] = format_size($file->filesize->value);
      $variables['file_extension'] = strtoupper(explode('.', $file->getFilename())[1]);
    }
  }

  if ($variables['media']->bundle() === 'image') {
    switch ($variables['parent_bundle']) {
      case 'media_item':
        $variables['content']['field_media_image'][0]['#item_attributes']['class'] = [
          'u-w-full',
        ];

        // For media item components we need to use a different responsive image
        // style if the full width mode is being used.
        $media = $variables['media'];
        $parent_entity = $media->_referringItem->getEntity();
        $is_full_width = boolval($parent_entity->field_p_mi_full_width->value);

        // Try to prevent render caching issues by forcing Drupal to vary the
        // cache based on whether the parent Media item component is full
        // width or not.
        $variables['#cache']['tags'][] = 'mi_full:' . $parent_entity->field_p_mi_full_width->value;

        if ($is_full_width) {
          $responsive_image_id = &$variables['content']['field_media_image'][0]['#responsive_image_style_id'];

          // Vary the render cache based on the responsive image style being
          // used.
          $variables['#cache']['tags'][] = 'mi_full_style:' . $responsive_image_id;

          // If we have a 'full' version of this responsive image style then
          // let's switch to it. We can use a similar approach in the future for
          // if we need to use a different responsive image style depending on
          // what layout a Media item paragraph is used in.
          switch ($responsive_image_id) {
            case 'media_component_uncropped';
              $responsive_image_id = 'media_component_uncrop_f';
              break;

            case 'media_component_16_9';
              $responsive_image_id = 'media_component_16_9_f';
              break;

            case 'media_component_4_3';
              $responsive_image_id = 'media_component_4_3_f';
              break;

            case 'media_component_3_4';
              $responsive_image_id = 'media_component_3_4_f';
              break;

            case 'media_component_1_1';
              $responsive_image_id = 'media_component_1_1_f';
              break;
          }
        }
        break;
    }
  }
}
