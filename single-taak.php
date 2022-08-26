<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package wp-theme-taalunie
 */

get_header();
?>

<div class="content-background">
  <nav class="container" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Home</a></li>
      <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>/taak/">Doos op rollen</a></li>
      <li class="breadcrumb-item active" aria-current="page"><?php echo $post->post_title ?></li>
    </ol>
  </nav>

<div id="primary" class="content-area">
	<main id="primary" class="site-main container">
    <header class="page-header">
      <h1 class="page-title">Doos op rollen</h1>
    </header><!-- .page-header -->

    <div class="row">
      <div class="col col-12 order-2 order-sm-1">
        <?php get_template_part('template-parts/filter', 'taak');?>
      </div>
      <div class="col col-md-5 order-3 order-sm-2">
      <?php
/* Start the Loop */
$parent_posts = new WP_Query(['posts_per_page' => 30, 'post_type' => 'taak']);
$page_index = ($parent_posts->query_vars['paged'] ?: 1) - 1;
$page_size = $parent_posts->query_vars['posts_per_page'];
$post_index = $page_index * $page_size;
while ($parent_posts->have_posts()):
    $parent_posts->the_post();
    get_template_part('template-parts/content', 'mini-taak');
endwhile;
// $original_query = $wp_query;
// $wp_query = $parent_posts
// the_posts_navigation([
//   'prev_text' => 'Volgende taken',
//   'next_text' => 'Vorige taken',
// ]);
// $wp_query = $original_query;

wp_reset_postdata();
?>
      </div>
      <div class="col col-md-7 order-1 order-sm-3">
          <?php
while (have_posts()):
    the_post();

    ?>

																<div class="site-intro">
																          <div class="container">
																            <?php
    get_template_part('template-parts/content', get_post_type());
    ?>


																   </div>
																        </div>
																   <?php

    the_post_navigation(
        array(
            'prev_text' => '<span class="nav-title">%title</span>',
            'next_text' => '<span class="nav-title">%title</span>',
        )
    );
endwhile; // End of the loop.
?>
      </div>
    </div>
	</main><!-- #main -->
</div><!-- #primary -->
</div>

<?php
get_footer();