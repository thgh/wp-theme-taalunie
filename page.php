<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package taalunie
 */

get_header();

global $post;
$withSiblings = false;
if ($post->post_parent) {
	$siblings = wp_list_pages(['child_of' => $post->post_parent]);
	$withSiblings = count($siblings) > 1;
}
?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main <?php if ($withSiblings) echo ' has-siblings'; ?>">

		<?php
		if ($withSiblings) {
			echo '<div class="siblings"> <ul class="siblings-list">';
			foreach ($siblings as $sibling) {
				?>
				<li class="sibling"><?php echo $sibling->post_title; ?></li>
				<?php
			}
			echo '</ul> </div>';
		} 
		
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
