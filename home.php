<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package taalunie
 */

$suppress_nav_menu = true;
get_header();
?>
<div id="app" class="site-content__background">
  <div class="modal-body" v-if="!p" <?php echo isset($_GET['p']) ? ' v-cloak': '' ?>>
    <div class="modal-options">
      <a class="modal-option" href="/?p=leren" @click="visit">
        <div class="modal-option__text">
          Ik leer Nederlands.
        </div>
        <img class="modal-option__img" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/modal-option.png"
          alt="">
      </a>
      <a class="modal-option" href="/taak">
        <div class="modal-option__text">
          Ik ben begeleider.
        </div>
        <img class="modal-option__img" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/modal-option.png"
          alt="">
      </a>
    </div>
  </div>
  <div class="modal-body" v-else-if="!region" v-cloak>
    <div class="modal-options">
      <a class="modal-option" href="/?p=leren&region=nl" @click="visit">
        <div class="modal-option__text">
          Ik woon in Nederland.
        </div>
        <img class="modal-option__img" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/modal-option.png"
          alt="">
      </a>
      <a class="modal-option" href="/?p=leren&region=be" @click="visit">
        <div class="modal-option__text">
          Ik woon in België.
        </div>
        <img class="modal-option__img" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/modal-option.png"
          alt="">
      </a>
    </div>
  </div>
  <div v-else-if="!categorySlug" v-cloak class="container">
    <h1>Ik wil leren over</h1>
    <div class="categories categories--main">
      <a class="category-card" v-for="category of mainCategories" :href="slugify(category)" @click="visit">
        {{category.name}}
      </a>
    </div>
  </div>
  <div v-else-if="!category" v-cloak class="container">
    <h1>Bezig...</h1>
  </div>
  <div v-else-if="!step || step === 'sorting'" v-cloak>
    <button class="selection" v-if="selection.length" @click.prevent="next">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            {{selection.length}} {{selection.length===1?'doel':'doelen'}} geselecteerd
          </div>
          <div class="selection__next">
            Volgende
          </div>
        </div>
      </div>
    </button>

    <!-- Selecting goals -->
    <div class="container pb-4" v-if="step !== 'sorting'">
      <h1 class="mb-2">{{category.name}}</h1>

      <p class="mb-5" style="font-size:18px">Selecteer de doelen waar je over wil leren</p>

      <div class="row">
        <div class="nav-sticky col-md-4 d-none d-md-block" :class="{'nav-sticky--low':selection.length}">
          <div v-for="child in categoryChildren">
            <h3 class="nav-category">
              <a :href="'#' + child.slug">{{child.name}}</a>
            </h3>
            <ul class="nav-subcategories">
              <li v-for="grandchild in child.children" class="nav-subcategory">
                <a :href="'#' + grandchild.slug">{{grandchild.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8 mt-1">
          <label class="goal-card" v-for="goal of categoryGoals">
            <input type="checkbox" :checked="ids.includes(goal.id)" @change="toggle(goal)" />
            {{goal.title.rendered}}
          </label>

          <div class="category-section" v-for="child in categoryChildren" :id="child.slug">
            <!-- <h3 class="category-section-title">{{child.name}}</h3> -->
            <label class="goal-card" :class="{checked:ids.includes(goal.id)}" v-for="goal of child.goals">
              <div class="goal-card__title">
                <input type="checkbox" :checked="ids.includes(goal.id)" @change="toggle(goal)" />
                {{goal.title.rendered}}
              </div>
              <div class="goal-card__content" v-if="goal.content.rendered" v-html="goal.content.rendered">
              </div>
            </label>

            <div class="category-section" v-for="grandchild in child.children" :id="grandchild.slug">
              <h3 class="category-section-subtitle">{{grandchild.name}}</h3>
              <label class="goal-card" :class="{checked:ids.includes(goal.id)}" v-for="goal of grandchild.goals">
                <div class="goal-card__title">
                  <input type="checkbox" :checked="ids.includes(goal.id)" @change="toggle(goal)" />
                  {{goal.title.rendered}}
                </div>
                <div class="goal-card__content" v-if="goal.content.rendered" v-html="goal.content.rendered">
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <h1>Andere domeinen</h1>
      <div class="categories categories--main mb-4">
        <a class="category-card" v-for="category of otherCategories" :href="slugify(category)" @click="visit">
          {{category.name}}
        </a>
      </div>
    </div>

    <!-- Sorting goals -->
    <div class="container pb-4" v-else-if="draggable===2">

      <h1 class="mb-2">Jouw doelen</h1>
      <p style="font-size:18px">Wat vind je het belangrijkste? Verander de volgorde van jouw doelen.</p>

      <div class="row">
        <div class="col-md-8">
          <draggable tag="div" class="goal-group" v-model="selection" @start="drag=true" @end="drag=false"
            v-bind="{animation:400}">
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <div class="goal-card checked" v-for="goal of selection" :key="goal.id">
                <div class="goal-card__title">
                  <div class="goal-handle">=</div>
                  {{goal.title}}
                </div>
                <div class="goal-card__content" v-if="goal.content" v-html="goal.content"></div>
              </div>
            </transition-group>
          </draggable>

          <h3 class="category-section-subtitle"> Wil je nog een eigen doel toevoegen? </h3>

          <form class="goal-card checked" @submit.prevent="add(title)">
            <div class="goal-card__title">
              <div class="goal-handle"></div>
              <input type="text" placeholder="Ik kan..." class="flex-grow-1" v-model="title" id="addgoaltitle" />
              <button type="submit" class="goal-add" :disabled="!title">Voeg toe</button>
            </div>
          </form>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <img loading="lazy" src="<?php echo esc_url( get_template_directory_uri()) ?>/img/modal-option.png" />
        </div>
      </div>
    </div>

    <!-- Failed to load vue-draggable -->
    <div v-else>
      Probleem bij het laden van de sorteringsmodule
    </div>
  </div>
  <div v-else-if="step==='linking'" v-cloak>
    <button class="selection" v-if="selection.length" @click.prevent="next">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            {{selection.length}} {{selection.length===1?'doel':'doelen'}} geselecteerd
          </div>
          <div class="selection__next">
            Volgende
          </div>
        </div>
      </div>
    </button>
    <div class="modal-body">
      <div class="modal-options">
        <a class="modal-option" :href="back()" @click="visit">
          <div class="modal-option__img">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div class="modal-option__text">
            Ik wil andere domeinen toevoegen.
          </div>
        </a>
        <button class="modal-option" @click="finish">
          <div class="modal-option__img">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
              stroke="#08B589" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-check">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="modal-option__text">
            Ik ben klaar met kiezen en wil afronden.
          </div>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    Step={{step}}
  </div>
</div>

<script>
window.restUrl = <?php echo json_encode(get_rest_url()) ?>;
</script>
<?php
wp_register_script('vue', 'https://unpkg.com/vue@2.6.14/dist/vue.js', []);
wp_register_script('home-custom', get_template_directory_uri() . '/js/home.js', ['vue'], '1');
wp_enqueue_script('home-custom');

get_footer();
