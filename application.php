<?php

/**
 * Template Name: Aanvraag formulier
 *
 * @package wp-theme-taalunie
 */

// Require user to login first!
$current_user = wp_get_current_user();
if (empty($current_user->data))
  auth_redirect();


$data = [];
// show_admin_bar( false );
wp_enqueue_style('application', get_template_directory_uri() . '/css/application.css', [], '1');

// $suppress_nav_menu = true;
get_header();
// /wp-json/wp/v2/acf-field
?>
<style>
  :root {
    margin-top: 0 !important;
  }
</style>

<div class="site-content__background">
  <div class="container container--tight py-5" id="app" v-cloak>

    <!-- Sign in first! -->
    <div v-if="!user.ID" class="flex my-40">
      <h1>Aanvraag indienen of opvolgen?</h1>

      <p class="mb-1">We helpen jou om je aanvraag sneller in te vullen als je aangemeld bent.</p>
      <a href="/wp-login.php?option=oauthredirect&app_name=mijnNederlands&redirect_to=/" class="btn">Aanmelden</a>
    </div>

    <!-- Follow up on my applications -->
    <div v-else>

      <!-- Edit a draft or application -->
      <div v-if="editor">

        <a href="/" @click="visit">Terug naar overzicht van aanvragen</a>

        <h1 v-if="editable">Aanvraag opstellen</h1>
        <h1 v-else>Aanvraag bekijken</h1>

        <form class="fieldGroup checked" v-for="(section, index) of visibleFields" :aria-readonly="editable">
          <div class="fieldGroup__title">
            <div class="flex-grow-1">{{section.title}}</div>
            <button class="fieldGroup-toggle" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true" :aria-controls="'#collapse' + index">
              <svg class=" d-print-none" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
              </svg>
            </button>
          </div>
          <fieldset :id="'collapse' + index" class="collapse show" aria-labelledby="headingOne">
            <div v-for="(field, index) of section.children" class="mb-4">
              <!-- <pre>{{field.settings.type}}</pre> -->
              <!-- <pre>{{section}}</pre>qsdf -->
              <label>{{field.title}}</label>
              <Field :value="editor.acf[section.key]" @change="$set(editor.acf, section.key, $event)" :field="field" />
            </div>

            <Field v-if="!section.children.length" :value="editor.acf" @change="$set(editor.acf, section.key, $event)" :field="section"></Field>
          </fieldset>
        </form>
        <pre>{{editor}}</pre>
      </div>
      <div v-else>

        <!-- Overview of all my applications -->
        <h1>Mijn aanvragen</h1>

        <div>
          <button class="btn btn-view" type="button" @click="createDraft()">Nieuwe aanvraag</button>
        </div>

        <div v-if="drafts.length">Niet bewaarde aanvragen</div>

        <div v-for="app in drafts" class="application-card">
          <h2>{{app.title || app.acf.aanvrager?.organisatie_naam||'Draft in browser'}}</h2>
          <div class="application-type">{{types(app).length>1?'Subsidies':'Subsidie'}}: {{types(app).join(', ')}}</div>
          <div class="application-status">Status: {{app.acf.status}}</div>
          <button class="btn btn-view" @click="edit(app)">Bewerken</button>
          <button class="btn btn-duplicate" @click="duplicate(app)">Dupliceren</button>
          <button class="btn btn-remove" @click="removeDraft(app)">Verwijderen</button>
        </div>

        <div v-if="drafts.length">Bewaarde aanvragen</div>

        <div v-for="app in myApplications" class="application-card">
          <h2>{{app.title || app.acf.aanvrager?.organisatie_naam}}</h2>
          <div class="application-type">{{types(app).length>1?'Subsidies':'Subsidie'}}: {{types(app).join(', ')}}</div>
          <div class="application-status">Status: {{app.acf.status}}</div>
          <div class="d-flex" style="gap: 10px">
            <button class="btn btn-view" v-if="isEditable(app)" @click="edit(app)">Bewerken</button>
            <button class="btn btn-view" v-else @click="edit(app)">Bekijken</button>
            <button class="btn btn-review" v-if="app.acf.status === 'draft'" @click="review(app)">Indienen</button>
            <button class="btn btn-remove" v-if="app.acf.status === 'draft'" @click="remove(app)">Verwijderen</button>

            <div style="flex:1"></div>
            <button class="btn btn-duplicate" v-if="app.acf.status === 'draft'" @click="duplicate(app)">Dupliceren</button>
          </div>
        </div>

      </div>
    </div>
    <pre>{{allowedFields}}</pre>
  </div>
</div>

<script>
  window.user = <?php echo json_encode($current_user) ?>;
  window.fieldGroups = <?php echo (json_encode($data)) ?>;
  window.restUrl = <?php echo json_encode(get_rest_url()) ?> //.replace('/wp-json', '/index.php/wp-json');
  window.wpNonce = <?php echo json_encode(wp_create_nonce('wp_rest')) ?>;
</script>
<?php
wp_register_script('vue', 'https://unpkg.com/vue@2.6.14/dist/vue.js', []);
wp_register_script('collapse', 'https://unpkg.com/bootstrap@4.4.1/dist/js/bootstrap.js', ['jquery']);
wp_register_script('axios', 'https://unpkg.com/axios@1.1.2/dist/axios.min.js', []);
wp_register_script('application', get_template_directory_uri() . '/js/application.js', ['collapse'], '1');
wp_enqueue_script('application');
get_footer();
