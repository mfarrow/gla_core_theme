<?php

/**
 * @file
 * Theme and preprocess functions for regions.
 */

use Drupal\block\Entity\Block;

/**
 * Implements template_preprocess_region().
 *
 * @param array $variables
 *   An associative array for the template region.
 */
function gla_core_theme_preprocess_region(array &$variables) {
  // Make render arrays for blocks available in region templates.
  // Code below is from https://atendesigngroup.com/blog/making-region-content-available-node-templates-drupal-8.
  $theme = \Drupal::theme()->getActiveTheme()->getName();
  $available_regions = system_region_list($theme, 'REGIONS_ALL');
  $regions = array_intersect(array_keys($available_regions), [
    'footer',
    'header',
  ]);

  foreach ($regions as $key => $region) {
    // Load region blocks.
    $blocks = \Drupal::entityTypeManager()
      ->getStorage('block')
      ->loadByProperties(['theme' => $theme, 'region' => $region]);

    uasort($blocks, 'Drupal\block\Entity\Block::sort');

    $build = [];
    foreach ($blocks as $key => $block) {
      if ($block->access('view')) {
        $block = Block::load($key);
        $block_content = \Drupal::entityTypeManager()
          ->getViewBuilder('block')
          ->view($block);
        $build[$key] = $block_content;
      }
    }

    $variables['blocks'][$region] = $build;
  }
}
