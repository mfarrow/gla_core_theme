<?php

/**
 * @file
 * Theme and preprocess functions for blocks.
 */

use Drupal\Core\Template\Attribute;
use Drupal\block\Entity\Block;

/**
 * Implements hook_preprocess_HOOK().
 */
function gla_core_theme_preprocess_block(&$variables) {
  if (isset($variables['elements']['#id'])) {
    $variables['block'] = Block::load($variables['elements']['#id']);
    $region = $variables['block']->getRegion();
    // Add the region as a data attribute so it can be used in a template
    // suggestion hook alter.
    $variables['content']['#attributes']['data-region'] = $region;
  }

  switch ($variables['configuration']['id']) {
    case 'system_menu_block:main':
      // Here we are deliberately not printing the contextual links. There are
      // two reasons for this:
      // 1) The contextual links rely on setting position:relative, but this
      // interferes with custom CSS and can be a cause of bugs as the
      // position value changes for users with permission to use the contextual
      // links and users without, but developers may assume it is always set (or
      // not set).
      // 2) The way we output the same block twice but with different markup
      // (for the small screens menu and the large screens menu component)
      // means that the contextual links JS doesn't work anyway.
      unset($variables['title_suffix']['contextual_links']);
      $attributes = new Attribute($variables['attributes']);
      $attributes->removeClass('contextual-region');
      $variables['attributes'] = $attributes->toArray();
      break;
  }
}
