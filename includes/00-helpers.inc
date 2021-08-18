<?php

/**
 * @file
 * Helpers to use across the theme.
 */

use Drupal\Component\Utility\Unicode;

/**
 * Turns a string of text into something suitable for a HTML ID.
 *
 * @param string $text
 *   The text to turn into an ID.
 *
 * @return string
 *   A string that is safe to use as an HTML ID.
 */
function _gla_core_theme_transform_text_to_id($text) {
  // This is based on \Drupal\auto_heading_ids\Plugin\Filter\HeadingIdFilter::transformHeadingToId
  // Reduce to ASCII.
  /** @var \Drupal\Component\Transliteration\TransliterationInterface $transliteration */
  $transliteration = \Drupal::service('transliteration');
  $new_value = $transliteration->transliterate($text);
  // Reduce to letters and numbers.
  $new_value = preg_replace('/[^a-zA-Z0-9\/]+/', '-', $new_value);
  // Remove consecutive separators.
  $new_value = preg_replace('/-+/', '-', $new_value);
  // Remove leading and trailing separators.
  $new_value = trim($new_value, '-');
  // Convert to lowercase.
  $new_value = mb_strtolower($new_value);
  // Truncate to 128 chars.
  return Unicode::truncate($new_value, 128, TRUE);
}
