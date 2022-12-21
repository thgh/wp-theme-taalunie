<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package taalunie
 */

?>
<!doctype html>
<html <?php language_attributes();?>>

<head>
  <meta charset="<?php bloginfo('charset');?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <link rel="stylesheet" href="<?php echo esc_url(get_template_directory_uri()) ?>/css/bootstrap-4.4.1.min.css"
    crossorigin="anonymous">
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<link rel="shortcut icon" href="<?php echo esc_url(get_template_directory_uri() . '/img/tuv2014_favicon.ico'); ?>" type="image/x-icon">
	<link rel='manifest' href="<?php echo esc_url(get_template_directory_uri()) ?>/manifest.json"> -->

  <link rel="apple-touch-icon" sizes="180x180" href="https://taalunie.org/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://taalunie.org/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://taalunie.org/favicon/favicon-16x16.png">
  <link rel="mask-icon" href="https://taalunie.org/favicon/safari-pinned-tab.svg" color="#000000">
  <link rel="shortcut icon" href="https://taalunie.org/favicon/favicon.ico">
  <meta name="msapplication-TileColor" content="#000000">
  <meta name="theme-color" content="#000000">
  <!-- <script src="https://unpkg.com/instantclick@3.1.0-2/dist/instantclick.min.js" defer async onload="InstantClick.init()"> -->
  <!-- </script> -->
  <?php wp_head();?>
</head>

<body <?php body_class();?>>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'hsn-theme');?></a>

    <header id="masthead" class="site-header">
      <div class="container has-catalogus-link">
        <div class="site-branding">
          <?php
the_custom_logo();
if (is_front_page() && is_home()):
?>
          <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>"
              rel="home"><?php bloginfo('name');?></a></h1>
          <?php
else:
?>
          <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name');?></a>
          </p>
          <?php
endif;?>
        </div><!-- .site-branding -->

        <a class="catalogus-link catalogus-leren" href="/?ik=leren">Naar de NT2-Beginnersdoelen</a>
        <a class="catalogus-link catalogus-begeleider" href="/nt2-beginnersdoelen/">Naar de begeleiderspagina</a>
      </div><!-- .container -->
      <?php
			global $suppress_nav_menu;
			if (empty($suppress_nav_menu)):?>
      <nav id="site-navigation" class="main-navigation">
        <div class="container">
          <button class="menu-toggle" aria-controls="primary-menu"
            aria-expanded="false"><?php esc_html_e('Menu', 'hsn-theme');?></button>
          <?php
wp_nav_menu(array(
  //  'theme_location' => 'top',
    'menu_id' => 'main',
));
?>
        </div>
      </nav><!-- #site-navigation -->
      <?php endif ?>
    </header><!-- #masthead -->

    <div id="content" class="site-content">
