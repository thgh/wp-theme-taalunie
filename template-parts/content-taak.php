<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wp-theme-taalunie
 */
?>

<article id="post-<?php the_ID();?>" <?php post_class();?>>
	<header class="entry-header">
		<?php
if (is_singular()):
    the_title('<h1 class="entry-title">', '</h1>');
else:
    the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
endif;

if ('post' === get_post_type()):
?>
			<div class="entry-meta">
				<?php
taalunie_posted_on();
taalunie_posted_by();
?>
			</div><!-- .entry-meta -->
		<?php endif;?>
	</header><!-- .entry-header -->

	<?php taalunie_post_thumbnail();?>

	<div class="entry-content">
		<?php
the_content(sprintf(
    wp_kses(
        /* translators: %s: Name of current post. Only visible to screen readers */
        __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'taalunie-theme'),
        array(
            'span' => array(
                'class' => array(),
            ),
        )
    ),
    get_the_title()
));

wp_link_pages(array(
    'before' => '<div class="page-links">' . esc_html__('Pages:', 'taalunie-theme'),
    'after' => '</div>',
));
?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php taalunie_entry_footer();?>
	</footer><!-- .entry-footer -->

  <dl class="dl-horizontal entry-terms">
<?php
$terms = wp_get_object_terms(get_the_ID(), get_object_taxonomies('taak'));
$taxonomies = [];
foreach ($terms as $term) {
    $taxonomies[$term->taxonomy][] = $term->name;
}
ksort($taxonomies);
foreach ($taxonomies as $taxonomy => $terms) {
    echo '<dt>' . ucfirst($taxonomy) . '</dt>';
    foreach ($terms as $term):
        echo '<dd>' . ($term) . '</dd>';
    endforeach;
}
?>
</dl>

</article>