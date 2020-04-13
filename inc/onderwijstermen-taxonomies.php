<?php
/*
CPT UI: Export region taxonomy:

{"region":{"name":"region","label":"Regio's","singular_label":"Regio","description":"","public":"true","publicly_queryable":"true","hierarchical":"false","show_ui":"true","show_in_menu":"true","show_in_nav_menus":"true","query_var":"true","query_var_slug":"","rewrite":"true","rewrite_slug":"","rewrite_withfront":"1","rewrite_hierarchical":"0","show_admin_column":"false","show_in_rest":"true","show_in_quick_edit":"","rest_base":"","rest_controller_class":"","labels":{"menu_name":"Regio's","all_items":"Alle regio's","edit_item":"","view_item":"","update_item":"","add_new_item":"","new_item_name":"","parent_item":"","parent_item_colon":"","search_items":"","popular_items":"","separate_items_with_commas":"","add_or_remove_items":"","choose_from_most_used":"","not_found":"","no_terms":"","items_list_navigation":"","items_list":""},"meta_box_cb":"","object_types":["term"]}}
*/

function cptui_register_custom_post_types() {
  register_post_type('term', [
    'label'                 => __( 'Term', 'hsn-theme' ),
    'labels'                => [
      'name'                => __( 'Termen', 'hsn-theme' ),
      'singular_name'       => __( 'Term', 'hsn-theme' ),
      'menu_name'           => __( 'Termen', 'hsn-theme' ),
      'name_admin_bar'      => __( 'Termen', 'hsn-theme' )
    ],
    'supports'              => ['title', 'editor', 'thumbnail'],
    'hierarchical'          => true,
    'public'                => true,
  ]);
}
add_action( 'init', 'cptui_register_custom_post_types' );


function post_title_starts_with_filter($where, $wp_query) {
    global $wpdb;
    if ( $search_term = $wp_query->get( 'post_title_starts_with' ) ) {
        $where .= ' AND ' . $wpdb->posts . '.post_title LIKE \'' . $wpdb->esc_like( $search_term ) . '%\'';
    }
    return $where;
}
add_filter( 'posts_where', 'post_title_starts_with_filter', 10, 2 );
