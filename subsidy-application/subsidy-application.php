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
$applogs = [];
define('SAVEQUERIES', true);
add_action('shutdown', 'sql_logger');
add_action('shutdown', 'endlog');
function tlog($input) {
  global $applogs;
  $applogs[] = $input;
}

function endlog($input) {
  global $applogs;
  if (empty($applogs)) {
    return;
  }

  $log_file = fopen(
    ABSPATH . '/wp-content/themes/wp-theme-taalunie/_phplog.txt',
    'a',
  );
  fwrite(
    $log_file,
    "//////////////////////////////////////////\n\n" .
      date('F j, Y, g:i:s a') .
      "\n",
  );
  fwrite(
    $log_file,
    $_SERVER['REQUEST_METHOD'] . ' ' . $_SERVER['REQUEST_URI'] . "\n",
  );
  foreach ($applogs as $line) {
    fwrite($log_file, print_r($line, true) . "\n");
  }
  fclose($log_file);
}
function sql_logger() {
  global $wpdb;
  $log_file = fopen(
    ABSPATH . '/wp-content/themes/wp-theme-taalunie/_sqllog.txt',
    'a',
  );
  fwrite(
    $log_file,
    "//////////////////////////////////////////\n\n" .
      date('F j, Y, g:i:s a') .
      "\n",
  );
  foreach ($wpdb->queries as $q) {
    fwrite($log_file, $q[0] . " - ($q[1] s)" . "\n\n");
  }
  fclose($log_file);
}
if (!defined('ABSPATH')) {
  exit(); // Exit if accessed directly
}
if (
  empty($_GET['password']) &&
  strpos($_SERVER['SERVER_NAME'], 'dev.') === false
) {
  add_action('login_head', function () {
    $style = '';
    $style .= '<style type="text/css">';
    $style .= '.login #nav{ display: none }';
    $style .= '.login form>p{ display: none }';
    $style .= '.login form>.user-pass-wrap{ display: none }';
    $style .= '.login form>.submit{ display: block }';
    $style .= '.login form>.submit>input{ display: none }';
    $style .= '.login form .mo_oauth_or_division{ display: none }';
    $style .= '</style>';

    echo $style;
  });
}

// Register "application" and "organisation" post type
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
    'supports' => ['custom-fields', 'revisions', 'author'],
    'show_in_graphql' => false,
  ]);

  $labels = [
    'name' => __('Organisaties', 'taalunie'),
    'singular_name' => __('Organisatie', 'taalunie'),
    'menu_name' => __('Organisaties', 'taalunie'),
    'all_items' => __('Alle organisaties', 'taalunie'),
    'add_new' => __('Add new', 'taalunie'),
    'add_new_item' => __('Add new organisatie', 'taalunie'),
    'edit_item' => __('Edit organisatie', 'taalunie'),
    'new_item' => __('New organisatie', 'taalunie'),
    'view_item' => __('View organisatie', 'taalunie'),
    'view_items' => __('View organisaties', 'taalunie'),
    'search_items' => __('Search organisaties', 'taalunie'),
    'not_found' => __('No organisaties found', 'taalunie'),
    'not_found_in_trash' => __('No organisaties found in trash', 'taalunie'),
    'parent' => __('Parent organisatie:', 'taalunie'),
    'featured_image' => __('Featured image for this organisatie', 'taalunie'),
    'set_featured_image' => __(
      'Set featured image for this organisatie',
      'taalunie',
    ),
    'remove_featured_image' => __(
      'Remove featured image for this organisatie',
      'taalunie',
    ),
    'use_featured_image' => __(
      'Use as featured image for this organisatie',
      'taalunie',
    ),
    'archives' => __('organisatie archives', 'taalunie'),
    'insert_into_item' => __('Insert into organisatie', 'taalunie'),
    'uploaded_to_this_item' => __('Upload to this organisatie', 'taalunie'),
    'filter_items_list' => __('Filter organisaties list', 'taalunie'),
    'items_list_navigation' => __('organisaties list navigation', 'taalunie'),
    'items_list' => __('organisaties list', 'taalunie'),
    'attributes' => __('organisaties attributes', 'taalunie'),
    'name_admin_bar' => __('organisatie', 'taalunie'),
    'item_published' => __('organisatie published', 'taalunie'),
    'item_published_privately' => __(
      'organisatie published privately.',
      'taalunie',
    ),
    'item_reverted_to_draft' => __(
      'organisatie reverted to draft.',
      'taalunie',
    ),
    'item_scheduled' => __('organisatie scheduled', 'taalunie'),
    'item_updated' => __('organisatie updated.', 'taalunie'),
    'parent_item_colon' => __('Parent organisatie:', 'taalunie'),
  ];

  register_post_type('organisation', [
    'label' => __('Organisaties', 'taalunie'),
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
    'rewrite' => ['slug' => 'organisation', 'with_front' => true],
    'query_var' => true,
    'supports' => ['title', 'thumbnail', 'custom-fields'],
    // 'taxonomies' => ['category', 'post_tag'],
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

// Default values for access management
add_action(
  'save_post',
  function ($post_id, $post, $update) {
    // Only set for new organisations
    // Set current user as default organisation manager for new organisations
    if (!$update && $post->post_type === 'organisation') {
      update_field('can_manage', '' . get_current_user_id(), $post_id);
    }

    // Set my organisation as default requester organisation for new applications
    if (!$update && $post->post_type === 'application') {
      // Find the organisations that this user manages
      global $wpdb;
      $results = $wpdb->get_results(
        "SELECT post_id as org_id FROM {$wpdb->prefix}postmeta
      WHERE meta_key = 'can_manage'
      AND meta_value LIKE '%\"" .
          get_current_user_id() .
          "\"%'",
        OBJECT,
      );

      if (!empty($results)) {
        update_field(
          'aanvrager_organisatie',
          '' . $results[0]->org_id,
          $post_id,
        );
      }
    }
  },
  10,
  3,
);

// Application columns
add_filter('manage_application_posts_columns', function ($existing) {
  $columns['aanvrager'] = __('Aanvrager');
  // Don't put organisation first because it has multiple lines
  $columns['organisatie'] = __('Organisatie');
  $columns['type'] = __('Type');
  $columns['status'] = __('Status');
  $columns['author'] = $existing['author'];
  $columns['date'] = $existing['date'];
  return $columns;
});
add_action(
  'manage_application_posts_custom_column',
  function ($column, $post_id) {
    // Requester person
    if ('aanvrager' === $column) {
      $field = get_field('aanvrager', $post_id);
      $edit = get_edit_post_link($post_id);
      echo '<a href="' . esc_url($edit) . '">';
      echo '<b style="font-size:.9rem">' .
        (@$field['naam'] ?? '?') .
        '</b>' .
        '<br>';
      echo '</a>';
    }
    // Requester organisation
    if ('organisatie' === $column) {
      $field = get_field('aanvrager', $post_id);

      $edit = '';
      if (empty($field['organisatie'])) {
        echo (@$field['organisatie_naam'] ?? '?') . '<br>';
      } else {
        $edit = get_edit_post_link($field['organisatie']->ID);
        if ($edit) {
          echo '<a href="' . esc_url($edit) . '">';
        }

        echo '<b style="font-size:.9rem">' .
          $field['organisatie']->post_title .
          '</b>' .
          '<br>';
        if ($edit) {
          echo '</a>';
        }
      }
      echo nl2br($field['organisatie_adres'] ?? '') . '';
    }
    if ('type' === $column) {
      $field = get_field('type', $post_id);
      if (!empty($field)) {
        echo implode(
          '<br>',
          array_map(function ($item) {
            return $item;
          }, $field),
        );
      }
    }
    if ('status' === $column) {
      $field = get_field('status', $post_id);
      switch ($field) {
        case 'draft':
          echo '<span style="background:#ccc" class="application-status-label">Concept</span>';
          break;
        case 'review':
          echo '<span style="background:#f90" class="application-status-label">Ingediend</span>';
          break;
        case 'rejected':
          echo '<span style="background:#c00" class="application-status-label">Afgekeurd</span>';
          break;
        case 'accepted':
          echo '<span style="background:#090" class="application-status-label">Goedgekeurd</span>';
          break;
        case 'evaluated':
          echo '<span style="background:#ca0" class="application-status-label">Eindrapportage ingediend</span>';
          break;
        case 'completed':
          echo '<span style="background:#090" class="application-status-label">Afgerond</span>';
          break;

        default:
          echo '<span style="background:#000" class="application-status-label">' .
            ($field ?? '?') .
            '</span>';
          break;
      }
    }
  },
  10,
  2,
);
add_action('admin_head', function () {
  wp_enqueue_style(
    'application',
    get_template_directory_uri() . '/css/application.css',
    [],
    '1',
  );
});

// Organisation columns
add_filter('manage_organisation_posts_columns', function ($existing) {
  $columns['title'] = $existing['title'];
  $columns['permissions'] = __('Rechten');
  $columns['author'] = $existing['author'];
  $columns['date'] = $existing['date'];
  return $columns;
});
add_action(
  'manage_organisation_posts_custom_column',
  function ($column, $post_id) {
    // Permissions: read or write
    if ('permissions' === $column) {
      $manage = get_field('can_manage', $post_id, false);
      if (empty($manage) || !in_array(get_current_user_id(), $manage)) {
        echo '-';
        return;
      }

      $manage = get_field('can_manage', $post_id);
      if ($manage) {
        echo 'Beheren: ';
        foreach ($manage as $user) {
          echo $user['display_name'];
        }
        // print_r($manage);
      }
      $view = get_field('can_view', $post_id);
      if ($view) {
        echo 'Bekijken: ';
        foreach ($view as $user) {
          echo $user['display_name'];
        }
        // print_r($view);
      }
    }
  },
  10,
  2,
);

// Access management
// add_action(
//   'admin_init',
//   function () {
//     $role = get_role('subscriber');
//     $role->add_cap('read_post');
//     $role->add_cap('edit_post');
//     $role->add_cap('edit_posts');
//     $role->add_cap('edit_other_posts');
//     $role->add_cap('edit_published_posts');
//     $role->add_cap('publish_posts');
//     $role->add_cap('read_private_posts');
//     $role->add_cap('delete_post');
//   },
//   10,
// );

// Access management > Limit visible applications
add_action('pre_get_posts', function ($query) {
  if (!$query->query || empty($query->query['post_type'])) {
    tlog('pre no query');
    // echo'<!--';
    // echo'<!--';
    // print_r($query);
    // echo'-->' . PHP_EOL;
    return;
  }
  if ('wp_global_styles' === $query->query['post_type']) {
    return;
  }

  tlog(
    'pre type ' .
      $query->query['post_type'] .
      ' parent ' .
      $query->query['post_parent'] .
      ' limit ' .
      $query->query['numberposts'],
  );

  // if ($query->query['post_type'] === 'revision') {
  //   global $wpdb;
  //   // id => post_type
  //   // if application/organisation check
  //   $results = $wpdb->get_results(
  //     "SELECT post_type FROM {$wpdb->prefix}posts
  //     WHERE ID = {}",
  //     OBJECT,
  //   );

  //   if (empty($results)) {
  //     print_r('forbidden');
  //     print_r('forbidden');
  //     print_r('forbidden');
  //     $query->set('post_type', 'forbidden');
  //     return;
  //   }

  //   // Filter the application by org ids
  //   $query->set('meta_query', [
  //     [
  //       'key' => 'aanvrager_organisatie',
  //       'value' => array_column($results, 'org_id'),
  //       'compare' => 'IN',
  //     ],
  //   ]);
  //   // print_r($results);
  //   print_r(
  //     '<br><br><br>resultsresultsresultsresultsresultsresultsresults' . PHP_EOL,
  //   );
  //   print_r($results);
  //   // print_r($query);
  // }
  if ($query->query['post_type'] === 'application') {
    // Admins can do everything!
    if (current_user_can('administrator')) {
      return;
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

    if (empty($results)) {
      $query->set('post_type', 'forbidden');
      return;
    }

    // Filter the application by org ids
    $query->set('meta_query', [
      [
        'key' => 'aanvrager_organisatie',
        'value' => array_column($results, 'org_id'),
        'compare' => 'IN',
      ],
    ]);
    // echo '<br><br>setmetaquery application rows';
    // print_r([
    //   1 => get_current_user_id(),
    //   'a' => array_column($results, 'org_id'),
    // ]);

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
    'title' => @$data->data['title']['rendered'],
  ];
}
