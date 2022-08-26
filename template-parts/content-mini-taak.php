<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wp-theme-taalunie
 */

// Count the number of posts
global $post_index;
$post_index++;
$index_html = '<div class="mini-taak__index">' . $post_index . '.</div>';

the_title('<a class="mini-taak" href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $index_html, '</a>');
