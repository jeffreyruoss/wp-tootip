<?php
/**
 * Plugin Name: FM Tooltip
 * Description: A simple tooltip for the Feeding Matters child theme.
 * Version: 1.0
 * Author: Jeff Ruoss
 * Author URI: https://jeffruoss.com
 */

function fm_tooltip_enqueue_scripts() {
  // Enqueue the CSS file.
  wp_enqueue_style('fm-tooltip', plugins_url('dist/fm-tooltip.min.css', __FILE__));

  // Enqueue the JavaScript file.
  wp_enqueue_script('fm-tooltip', plugins_url('dist/fm-tooltip.min.js', __FILE__), array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'fm_tooltip_enqueue_scripts');
