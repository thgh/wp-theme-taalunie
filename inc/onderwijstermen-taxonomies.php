<?php
/*
CPT UI: Export region taxonomy:

{"region":{"name":"region","label":"Regio's","singular_label":"Regio","description":"","public":"true","publicly_queryable":"true","hierarchical":"false","show_ui":"true","show_in_menu":"true","show_in_nav_menus":"true","query_var":"true","query_var_slug":"","rewrite":"true","rewrite_slug":"","rewrite_withfront":"1","rewrite_hierarchical":"0","show_admin_column":"false","show_in_rest":"true","show_in_quick_edit":"","rest_base":"","rest_controller_class":"","labels":{"menu_name":"Regio's","all_items":"Alle regio's","edit_item":"","view_item":"","update_item":"","add_new_item":"","new_item_name":"","parent_item":"","parent_item_colon":"","search_items":"","popular_items":"","separate_items_with_commas":"","add_or_remove_items":"","choose_from_most_used":"","not_found":"","no_terms":"","items_list_navigation":"","items_list":""},"meta_box_cb":"","object_types":["term"]}}
 */

function cptui_register_custom_post_types()
{
    register_post_type('taak', [
        'label' => __('Taak', 'taalunie'),
        'labels' => [
            "new_item" => __('Nieuwe taak', 'taalunie'),
            "add_new_item" => __('Nieuwe taak', 'taalunie'),

            'add_new' => 'Nieuwe taak',
            'add_new_item' => 'Nieuwe taak toevoegen',
            'edit_item' => 'Taak aanpassen',
            'new_item' => 'Nieuwe taak',

            'name' => __('Taken', 'taalunie'),
            'singular_name' => __('Taak', 'taalunie'),
            'menu_name' => __('Taken', 'taalunie'),
            'name_admin_bar' => __('Taken', 'taalunie'),
         ],
        'supports' => ['title', 'editor', 'thumbnail'],
        'hierarchical' => true,
        'description' => 'Lesactiviteiten / taken',
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => ['slug' => 'taak'],
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 20,
        'supports' => ['title', 'editor', 'author', 'thumbnail'],
        'taxonomies' => ['category', 'post_tag'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'cptui_register_custom_post_types');
