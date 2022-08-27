<?php
/*
Plugin Name: Taalunie ACF Headless
Plugin URI: https://thomasg.be
Description: Retrieve the custom fields from WP JSON API
Version: 1
Author: Thomas Ghysels
Author URI: https://thomasg.be
Text Domain: acf, api, headless
*/

if (!defined('ABSPATH')) {
  exit(); // Exit if accessed directly
}

// Enable /wp-json/wp/v2/acf-field-group and /wp-json/wp/v2/acf-field routes
add_filter(
  'register_post_type_args',
  function ($args, $post_type) {
    if ('acf-field-group' === $post_type || 'acf-field' === $post_type) {
      $args['show_in_rest'] = true;
      $args['supports'][] = 'editor';
      $args['supports'][] = 'excerpt';
    }
    return $args;
  },
  10,
  2,
);

// Include the unserialized raw post content (the field settings)
add_action('rest_api_init', function () {
  $fix = [
    'get_callback' => function ($object) {
      return unserialize($object['content']['raw']);
    },
  ];
  register_rest_field('acf-field-group', 'settings', $fix);
  register_rest_field('acf-field', 'settings', $fix);
  $fix = [
    'get_callback' => function ($object) {
      return $object['excerpt']['raw'];
    },
  ];
  register_rest_field('acf-field-group', 'key', $fix);
  register_rest_field('acf-field', 'key', $fix);
});

// Throw away all useless info
add_filter('rest_prepare_acf-field-group', 'simplified_acf_data', 10, 3);
add_filter('rest_prepare_acf-field', 'simplified_acf_data', 10, 3);
function simplified_acf_data($data, $post, $request) {
  return [
    'id' => $data->data['id'],
    'parent' => $data->data['parent'],
    'key' => $data->data['key'],
    'slug' => $data->data['slug'],
    'title' => $data->data['title']['rendered'],
    'settings' => $data->data['settings'],
  ];
}
