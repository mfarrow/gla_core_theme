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
    // For document media items provide the file entity via Twig for
    // templates to use, and provide a formatted file size and extension as
    // a convenience to template authors.
    $variables['file'] = $file;
    $variables['file_size'] = format_size($file->filesize->value);
    $variables['file_extension'] = strtoupper(explode('.', $file->getFilename())[1]);
  }
}
