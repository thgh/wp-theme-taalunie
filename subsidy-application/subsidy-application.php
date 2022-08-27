<?php
/*
Plugin Name: Taalunie Subsidy application
Plugin URI: https://thomasg.be
Description: Custom post types, access management & random slug for application post type
Version: 1
Author: Thomas Ghysels
Author URI: https://thomasg.be
Text Domain: subsidy, application
*/

if (!defined('ABSPATH')) {
  exit(); // Exit if accessed directly
}

// Register "application" post type
add_action('init', function () {
  $labels = [
    'name' => __('Aanvragen', 'taalunie'),
    'singular_name' => __('Aanvraag', 'taalunie'),
    'menu_name' => __('Aanvragen', 'taalunie'),
    'all_items' => __('All Aanvragen', 'taalunie'),
    'add_new' => __('Add new', 'taalunie'),
    'add_new_item' => __('Add new Aanvraag', 'taalunie'),
    'edit_item' => __('Edit Aanvraag', 'taalunie'),
    'new_item' => __('New Aanvraag', 'taalunie'),
    'view_item' => __('View Aanvraag', 'taalunie'),
    'view_items' => __('View Aanvragen', 'taalunie'),
    'search_items' => __('Search Aanvragen', 'taalunie'),
    'not_found' => __('No Aanvragen found', 'taalunie'),
    'not_found_in_trash' => __('No Aanvragen found in trash', 'taalunie'),
    'parent' => __('Parent Aanvraag:', 'taalunie'),
    'featured_image' => __('Featured image for this Aanvraag', 'taalunie'),
    'set_featured_image' => __(
      'Set featured image for this Aanvraag',
      'taalunie',
    ),
    'remove_featured_image' => __(
      'Remove featured image for this Aanvraag',
      'taalunie',
    ),
    'use_featured_image' => __(
      'Use as featured image for this Aanvraag',
      'taalunie',
    ),
    'archives' => __('Aanvraag archives', 'taalunie'),
    'insert_into_item' => __('Insert into Aanvraag', 'taalunie'),
    'uploaded_to_this_item' => __('Upload to this Aanvraag', 'taalunie'),
    'filter_items_list' => __('Filter Aanvragen list', 'taalunie'),
    'items_list_navigation' => __('Aanvragen list navigation', 'taalunie'),
    'items_list' => __('Aanvragen list', 'taalunie'),
    'attributes' => __('Aanvragen attributes', 'taalunie'),
    'name_admin_bar' => __('Aanvraag', 'taalunie'),
    'item_published' => __('Aanvraag published', 'taalunie'),
    'item_published_privately' => __(
      'Aanvraag published privately.',
      'taalunie',
    ),
    'item_reverted_to_draft' => __('Aanvraag reverted to draft.', 'taalunie'),
    'item_scheduled' => __('Aanvraag scheduled', 'taalunie'),
    'item_updated' => __('Aanvraag updated.', 'taalunie'),
    'parent_item_colon' => __('Parent Aanvraag:', 'taalunie'),
  ];

  register_post_type('application', [
    'label' => __('Aanvragen', 'taalunie'),
    'labels' => $labels,
    'description' => '',
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_rest' => true,
    'rest_base' => '',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'rest_namespace' => 'wp/v2',
    'has_archive' => false,
    'show_in_menu' => true,
    'show_in_nav_menus' => true,
    'delete_with_user' => false,
    'exclude_from_search' => false,
    'capability_type' => 'post',
    'map_meta_cap' => true,
    'hierarchical' => false,
    'can_export' => false,
    'rewrite' => ['slug' => 'application', 'with_front' => true],
    'query_var' => true,
    'supports' => ['title', 'custom-fields', 'revisions', 'author'],
    'show_in_graphql' => false,
  ]);
});

// Generate random slug for "application" post type
add_filter(
  'wp_unique_post_slug',
  function ($slug, $post_ID, $post_status, $post_type) {
    if ($post_type === 'application' || $post_type === 'organisation') {
      $post = get_post($post_ID);
      if (empty($post->post_name) || $slug != $post->post_name) {
        $slug = substr(
          str_replace(['+', '/', '='], '', base64_encode(random_bytes(32))),
          0,
          20,
        );
      }
    }
    return $slug;
  },
  10,
  4,
);

// Access management
add_action('pre_get_posts', function ($query) {
  if (!$query->query) {
    // echo'<!--';
    // echo'<!--';
    // print_r($query);
    // echo'-->' . PHP_EOL;
    return;
  }
  if ($query->query['post_type'] === 'application') {
    // Admins can do everything!
    if (current_user_can('administrator')) {
      // return;
    }

    // Find the organisations that this user is part of
    global $wpdb;
    $results = $wpdb->get_results(
      "SELECT post_id as org_id FROM {$wpdb->prefix}postmeta
      WHERE (meta_key = 'can_manage' OR meta_key = 'can_view')
      AND meta_value LIKE '%\"" .
        get_current_user_id() .
        "\"%'",
      OBJECT,
    );

    // Filter the application by org ids
    $query->set('meta_query', [
      [
        'key' => 'aanvrager_organisatie',
        'value' => array_column($results, 'org_id'),
        'compare' => 'IN',
      ],
    ]);

    // Consider prepared
    // $wpdb->query(
    //   $wpdb->prepare(
    //     "INSERT INTO $wpdb->postmeta
    //   ( post_id, meta_key, meta_value )
    //   VALUES ( %d, %s, %s )",
    //     [10, $metakey, $metavalue],
    //   ),
    // );
  }
});

// Throw away all useless info
add_filter('rest_prepare_application', 'simplified_subsidy_data', 10, 3);
add_filter('rest_prepare_organisation', 'simplified_subsidy_data', 10, 3);
function simplified_subsidy_data($data, $post, $request) {
  return [
    'id' => $data->data['id'],
    'slug' => $data->data['slug'],
    'acf' => $data->data['acf'],
    'title' => $data->data['title']['rendered'],
  ];
}
