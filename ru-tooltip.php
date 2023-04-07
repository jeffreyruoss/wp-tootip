<?php
/**
 * Plugin Name: RU Tooltip
 * Description: A simple tooltip.
 * Version: 1.0
 * Author: Jeff Ruoss
 * Author URI: https://jeffruoss.com
 */

function ru_tooltip_enqueue_scripts() {
  // Enqueue the CSS file.
  wp_enqueue_style('ru-tooltip', plugins_url('dist/ru-tooltip.min.css', __FILE__));

  // Enqueue the JavaScript file.
  wp_enqueue_script('ru-tooltip', plugins_url('dist/ru-tooltip.min.js', __FILE__), array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'ru_tooltip_enqueue_scripts');
