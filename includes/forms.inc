<?php

/**
 * @file
 * Theme and preprocess functions for form elements.
 */

use Drupal\Component\Utility\Crypt;

/**
 * Custom function to prevent duplicate form element IDs.
 */
function _gla_core_theme_prevent_duplicate_form_element_ids(&$variables) {
  // See https://www.drupal.org/project/drupal/issues/1852090#comment-13624394.
  // See https://www.drupal.org/project/drupal/issues/1852090#comment-13115760.
  if (isset($variables['element']['#id'])) {
    $target_duplicated_ids = [
      'edit-actions',
      'edit-query',
    ];

    $id = $variables['element']['#id'];
    if (in_array($id, $target_duplicated_ids)) {
      $id .= '--' . Crypt::randomBytesBase64(8) . '--randomised';
      $variables['element']['#id'] = $id;
      $variables['attributes']['id'] = $id;
      $variables['#attached']['library'][] = 'gla_core_theme/fix-randomised-form-ids';
    }
  }
}

/**
 * Implements hook_preprocess_input().
 */
function gla_core_theme_preprocess_input(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}

/**
 * Implements hook_preprocess_textarea().
 */
function gla_core_theme_preprocess_textarea(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}

/**
 * Implements hook_preprocess_select().
 */
function gla_core_theme_preprocess_select(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}

/**
 * Implements hook_preprocess_radios().
 */
function gla_core_theme_preprocess_radios(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}

/**
 * Implements hook_preprocess_checkboxes().
 */
function gla_core_theme_preprocess_checkboxes(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}

/**
 * Implements hook_preprocess_container().
 */
function gla_core_theme_preprocess_container(&$variables) {
  _gla_core_theme_prevent_duplicate_form_element_ids($variables);
}
