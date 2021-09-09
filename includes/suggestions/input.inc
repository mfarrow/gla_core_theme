<?php

/**
 * @file
 * Template suggestions for inputs.
 */

/**
 * Implements hook_theme_suggestions_input_alter().
 */
function gla_core_theme_theme_suggestions_input_alter(array &$suggestions, array $variables) {
  if (strpos($variables['theme_hook_original'], '__webform_') !== FALSE) {
    // Make a new suggestion that targets inputs inside Webforms. This differs
    // from what Formdazzle provides as Formdazzle also attaches the Webform
    // machine name to *every* suggestion, which isn't what we want if we want
    // a general way to style any input that is inside a Webform.
    $pieces = explode('__webform', $variables['theme_hook_original']);
    if ($pieces[0]) {
      $suggestions[] = $pieces[0] . '__webform';
    }

    // Add the original Formdazzle suggestion as a suggestion. This will cause
    // a duplicated suggestion, but I think it's important as the Formdazzle
    // suggestion is more specific than the one added above, so we need it to
    // come after the suggestion we added above.
    $suggestions[] = $variables['theme_hook_original'];
  }
}
