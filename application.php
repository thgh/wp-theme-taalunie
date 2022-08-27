<?php
/**
* Template Name: Aanvraag formulier
*
* @package wp-theme-taalunie
*/

$data=[];
show_admin_bar( false );
wp_enqueue_style( 'application', get_template_directory_uri() . '/css/application.css', [], '1');



// $suppress_nav_menu = true;
get_header();
// /wp-json/wp/v2/acf-field
  ?>
<style>:root { margin-top: 0 !important; }</style>

<div class="site-content__background">
  <div class="container container--tight pb-5">
    <h1>Nieuwe aanvraag</h1>
    <div id="app" v-cloak>
      <form class="fieldGroup checked" v-for="(section, index) of rootFields" >
        <div class="fieldGroup__title">
          <div class="flex-grow-1">{{section.title}}</div>
          <button class="fieldGroup-toggle" type="button"  data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true" :aria-controls="'#collapse' + index" >
            <svg  class=" d-print-none" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>
        </div>
        <fieldset :id="'collapse' + index"  class="collapse" aria-labelledby="headingOne">
          <div v-for="(field, index) of section.children" class="mb-4">
<!-- <pre>{{field.settings.type}}</pre> -->
          <!-- <pre>{{section}}</pre>qsdf -->
            <label>{{field.title}}</label>
            <Field :field="field"/>
          </div>

          <Field :field="section"></Field>
        </fieldset>
      </form>
    </div>
  </div>
</div>

<script>
window.fieldGroups = <?php echo (json_encode($data)) ?>;
window.restUrl = <?php echo json_encode(get_rest_url()) ?>;
</script>
<?php
wp_register_script('vue', 'https://unpkg.com/vue@2.6.14/dist/vue.js', []);
wp_register_script('collapse', 'https://unpkg.com/bootstrap@4.4.1', ['jquery']);
wp_register_script('application', get_template_directory_uri() . '/js/application.js', ['vue', 'collapse'], '1');
wp_enqueue_script('application');
get_footer();
