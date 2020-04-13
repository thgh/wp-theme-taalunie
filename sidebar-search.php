<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package onderwijstermen
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
  return;
}
global $firstLetter;
global $postID;
$searchQuery = get_search_query() ?: $firstLetter;
$searchValue = strlen($searchQuery) > 1 ? $searchQuery : '';
$searchQueryLetter = lcfirst(substr($searchQuery?: $firstLetter , 0, 1));
?>
<aside id="secondary" class="widget-area widget-area--search">
  <div class="container">
    <section id="search-2" class="widget widget_search">
      <form role="search" method="get" class="search-form" action="<?php echo get_home_url() ?>" @submit.prevent>

        <div class="form-group form-group--20em">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Zoeken" aria-label="Zoeken" name="s" value="<?php echo esc_attr($searchValue) ?>">
            <div class="input-group-append">
              <button type="submit" class="btn btn-outline-secondary" type="button">Zoek</button>
              <svg class="search-icon" viewBox="0 0 24 24">
                <path fill="white" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </div>
          </div>
        </div>
<!--         <div class="form-group">
          <label for="country" class="screen-reader-text">Example multiple select</label>
          <select class="form-control" id="country">
            <option selected>Alle landen</option>
            <option>België</option>
            <option>Nederland</option>
            <option>Suriname</option>
          </select>
        </div> -->
      </form>

      <div class="letters">
        <?php foreach(range('a','z') as $letter){ ?>
          <a href="<?php echo get_home_url() ?>?s=<?php echo $letter ?>" class="letter<?php echo $searchQueryLetter === $letter ? ' letter--active' : '' ?>"><?php echo ucfirst($letter) ?></a>
        <?php } ?>
      </div>

      <div class="termslist">
        <?php
        $terms = new WP_Query([
          'posts_per_page'   => 1000,
          'post_type'        => 'term',
          'post_title_starts_with' => $searchQuery ,
          //'meta_key'         => 'page_first',
          'order'            => 'ASC',
          'orderby'          => 'post_title',
        ]);
        
        if ( $terms->have_posts() ) : ?>

          <!-- the loop -->
          <?php while ( $terms->have_posts() ) : $terms->the_post(); ?>
            <?php
            $regions = get_the_terms($post->ID, 'region') ?: [];
            $active = $postID == $post->ID;
            ?>
            <a href="<?php echo esc_url(get_permalink()) ?>" class="term-link<?php echo $active ? ' term-link--active' : '' ?>">
                <span class="term-link__term"><?php echo $post->post_title; ?></span>
                <?php foreach($regions as $region) { ?>
                  <span class="region"><?php echo strtoupper($region->slug) ?></span>
                <?php } ?>
            </a>
          <?php endwhile; ?>
          <!-- end of the loop -->

          <?php wp_reset_postdata(); ?>

        <?php else : ?>
          <p>
            Er zijn geen termen die beginnen met
            <b><?php echo ucfirst($searchQueryLetter) ?></b>
          </p>
        <?php endif ?>
      </div>
    </section>
  </div>
</aside><!-- #secondary -->
