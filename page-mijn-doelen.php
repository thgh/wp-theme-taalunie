<?php
/**
 * Template Name: Mijn doelen
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package taalunie
 */

$suppress_nav_menu = true;
get_header();

$key = isset($_GET['readkey'])?$_GET['readkey']:'';
$data = $anonymous_storage->db->get($key);
if (!$data) {
  ?>

<h1>Niet gevonden!</h1>

<?php
} else {
?>
<div class="site-content__background">
  <div class="container d-flex flex-wrap pt-4 pb-4 align-items-center justify-content-center d-print-none">

    <div class="bookmark-alert">Sla deze pagina op in jouw bladwijzers...</div>

    <button onclick="print()" class="goal-add">
      Download (PDF)
    </button>
  </div>
  <div class="container container--tight pb-5">

    <h1>Leerdoelen van <strong><?php esc_html_e($data->value->author ?? $data->author) ?></strong></h1>

    <p>Wat kun je al? Geef jezelf sterren. 1 ster = ik kan het een beetje. 5 sterren = ik kan het heel goed. </p>

    <div id="app" v-cloak>
    <section v-for="group in groups" :key="group.id">
      <div class="category-section-thumbed" v-if="group.category.thumb">
        <img :src="group.category.thumb" class="category-section-thumb">
        <h3 class="category-section-subtitle">{{group.category.name}}</h3>
      </div>
      <h3 v-else class="category-section-subtitle">{{group.category.name}}</h3>
      <p class="category-section-lead" v-if="group.goals.length">Ik wil...</p>
      <div class="goal-card checked" v-for="goal of group.goals">
        <div class="goal-card__title">
          <svg v-if="goal.id > 1" class="goal-card__icon d-print-none" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-arrow-right">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          <svg v-else class="goal-card__icon d-print-none" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
          <div class="goal-body">
            <div
              class="goal-categories"
              v-if="goal.categories && goal.categories.length > 1"
            >
              <span
                v-for="(category, index) of goal.categories.slice(1)"
                :key="category.id"
              >
                <span v-if="index"> / </span>
                {{category.name}}
              </span>
            </div>
            <div class="goal-title">{{goal.title}}</div>
          </div>
          <div class="scoring" :class="{readonly:!writekey}">
            <button class="scoring__star" :class="{active:goal.score >= star}" v-for="star in 5"
              @click.prevent="set(goal,star)" :disabled="!writekey">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-star">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
              </svg>
            </button>
          </div>
        </div>
        <div class="goal-card__content" v-if="goal.content" v-html="goal.content"></div>
      </div>
    </section>
  </div>
</div>

<script>
window.selection = <?php echo (json_encode($data)) ?>;
window.restUrl = <?php echo json_encode(get_rest_url()) ?>;
</script>
<?php
wp_register_script('vue', 'https://unpkg.com/vue@2.6.14/dist/vue.js', []);
wp_register_script('mijn-doelen', get_template_directory_uri() . '/js/mijn-doelen.js', ['vue'], '1');
wp_enqueue_script('mijn-doelen');
}

get_footer();