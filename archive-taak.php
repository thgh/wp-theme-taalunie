<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package onderwijstermen
 */

get_header();
?>

<div class="content-background">
  <nav class="container" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>">Home</a></li>
      <li class="breadcrumb-item"><a href="<?php echo get_home_url() ?>/taak/">Doos op rollen</a></li>
    </ol>
  </nav>

<div id="primary" class="content-area">
  <main id="main" class="site-main container">
    <header class="page-header">
      <h1 class="page-title">Doos op rollen</h1>
    </header><!-- .page-header -->

    <div class="row">
      <div class="col col-12 order-2 order-sm-1">
        <?php get_template_part('template-parts/filter', 'taak');?>
      </div>
      <div class="col order-3 order-sm-2">
          <?php
if (have_posts()):
    while (have_posts()):
        the_post();
        get_template_part('template-parts/content', 'mini-taak');
    endwhile;
    the_posts_navigation();
else:
    get_template_part('template-parts/content', 'none');
endif;
?>
      </div>
      <div class="col order-1 order-sm-3">
        <div class="site-intro">
          <div class="container">
            <h1>Lesactiviteiten</h1>
            <p>
              <strong>
                Een verzameling voorbeeldactiviteiten voor het bieden van NT2-onderwijs op maat aan de hand van rollen.
              </strong>
            </p>
            <p>
              In de informatie over maatwerkhoeken op deze website wordt uitgelegd hoe u het materiaal op een goede manier kunt inzetten. In de leerdoelencatalogus op deze website ziet u welke leerdoelen u met de verschillende rollen kunt nastreven.
            </p>
            <p>
              De doos bevat voorbeelden van activiteiten voor verschillende rollen, met name voor studenten en ondernemers.
            </p>
            <p>
              Het is belangrijk om cursisten te stimuleren om eigen materiaal uit hun dagelijks leven mee te brengen naar de les. Zo sluit de cursus nog meer aan bij het dagelijks leven van de cursist.
            </p>
          </div> <!-- .container -->
        </div><!-- .site-intro -->
      </div><!-- .col -->
    </div><!-- .row -->
  </main><!-- #main -->
</div><!-- #primary -->
</div>
<?php
get_sidebar();
get_footer();
