import Vue from 'vue/dist/vue.js'
import axios from 'axios'
import VueAutosuggest from 'vue-autosuggest'
import Fuse from 'fuse.js'
Vue.use(VueAutosuggest)

Vue.config.productionTip = false
Vue.config.devtools = false

const wp = createWordpressAxios()

const html = String.raw
Vue.component('Field', {
  props: ['value', 'field'],
  template: html`<div v-if="!value">no value</div>
    <div v-else-if="field.settings.type === 'group'">group {{field.key}}</div>
    <div v-else-if="field.settings.type === 'text'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>

      <div v-if="field.key === 'organisatie_naam'">
        <OrganisationSearch v-model="model" @change="model = $event" />
      </div>
      <input
        v-else
        type="text"
        class="d-block inp"
        v-model="model"
        :readonly="!$root.editable"
      />
    </div>
    <div v-else-if="field.settings.type === 'textarea'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <textarea
        type="text"
        class="d-block inp"
        :rows="field.settings.rows"
        :maxlength="field.settings.maxlength"
        :readonly="!$root.editable"
      ></textarea>
    </div>
    <div v-else-if="field.settings.type === 'checkbox'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="checkbox"
          class="mr-2"
          v-model="model"
          :value="val"
          :disabled="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div
      v-else-if="field.settings.type === 'button_group'||field.settings.type === 'radio'"
    >
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="radio"
          class="mr-2"
          :value="val"
          :name="field.key"
          v-model="model"
          :disabled="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div v-else-if="field.settings.type === 'radio'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input
          type="radio"
          class="mr-2"
          v-model="model"
          :value="val"
          :readonly="!$root.editable"
        />
        {{label}}
      </label>
    </div>
    <div v-else-if="field.settings.type === 'post_object'">
      <p class="mb-0" v-if="field.settings.instructions">
        {{field.settings.instructions}}
      </p>
      post object
    </div>
    <div v-else>
      Unexpected input type: {{field.settings.type}}
      <pre>{{field}}</pre>
    </div> `,
  computed: {
    model: {
      get() {
        const value =
          this.value[this.field.key] ?? this.field.settings.default_value
        if (this.field.settings.type === 'checkbox' && !Array.isArray(value))
          return []

        return value
      },
      set(value) {
        if (!this.$root.editable) return
        this.$set(this.value, this.field.key, value)
      },
    },
    enabled() {
      if (!Array.isArray(this.field.settings.conditional_logic)) return true
      return !this.field.settings.conditional_logic
        .flatMap()
        .flatMap()
        .find((c) => c.field)
    },
  },
  methods: {},
  mounted() {
    if (!this.value) this.$emit('change', {})
  },
})

Vue.component('OrganisationSearch', {
  props: ['value'],
  template: html` <div>
    <vue-autosuggest
      :suggestions="[{data:suggestions}]"
      :input-props="{id:'autosuggest__input', value, placeholder:value||'Kies jouw organisatie'}"
      @input="onInputChange"
      @selected="selectHandler"
      @click="clickHandler"
    >
      <template slot-scope="{suggestion}">
        <span class="my-suggestion-item">{{suggestion.item}}</span>
      </template>
    </vue-autosuggest>
  </div>`,
  data() {
    return { query: '' }
  },
  computed: {
    suggestions() {
      return this.fuse.search(this.query).map((s) => s.item.title)
    },
    fuse() {
      const fuse = new Fuse(this.allSuggestions, { keys: ['title'] })
      return fuse
    },
    allSuggestions() {
      return this.$root.allOrganisations || []
    },
  },
  methods: {
    onInputChange(value) {
      console.log('query', value, this.query)
      this.query = value
    },
    selectHandler(value) {
      console.log('selectHandler', value, this.query)
      if (value && value.item) {
        console.log('emitting', value.item)
        this.$emit('change', value.item)
      }
    },
    clickHandler(value) {
      console.log('clickHandler', value, this.query)
    },
  },
  mounted() {},
})

new Vue({
  el: '#app',
  data() {
    const url = new URL(window.location.href)
    const draftIds = this.getDraftIds()
    return {
      // Route
      draftId: url.searchParams.get('draftId') || '',
      editorId: parseInt(url.searchParams.get('editor')) || '',

      // Me
      user: window.user,

      // Form schema
      allGroupsPromise: null,
      allFieldsPromise: null,
      allFields: stale('allFields') || [],
      allGroups: stale('allGroups') || [{ title: 'Aanvrager' }],

      // My organisation data
      allOrganisationsPromise: null,
      allOrganisations: stale('allOrganisations'),

      // My application data
      draftIds,
      editor: null,
      myApplicationsPromise: null,
      myApplications: null,
    }
  },
  computed: {
    // User
    signedIn() {
      return window.user.ID
    },
    userData() {
      return window.user.data || {}
    },
    applications() {
      if (!this.signedIn) return []
      if (!this.myApplicationsPromise)
        setTimeout(() => this.loadMyApplications(), 10)
      return this.myApplications
    },
    organisations() {
      if (!this.allOrganisationsPromise)
        setTimeout(() => this.loadAllOrganisations(), 10)
      return this.allOrganisations
    },

    // Form
    fieldIds() {
      return this.allFields.map((c) => c.id)
    },
    allowedFields() {
      // Filter out irrelevant fields
      const fields = this.allFields
        .filter((f) => f.settings.type !== 'user')
        .filter((f) => !f.settings.wrapper.class.includes('admin'))
      return fields
        .filter((c) => !this.fieldIds.includes(c.parent))
        .map((parent) =>
          Object.assign(parent, {
            children: fields.filter((f) => f.parent === parent.id),
          })
        )
    },
    visibleFields() {
      return this.allowedFields.filter((f) =>
        this.evaluateConditions(f.settings.conditional_logic)
      )
    },

    // Application
    title() {
      return this.editor.title || 'Nieuwe aanvraag'
    },
    drafts() {
      this.draftId
      return this.draftIds.map((id) => stale(id))
    },
    status() {
      return this.editor && this.editor.acf && this.editor.acf.status
    },
    editable() {
      return this.status === 'draft'
    },
  },
  methods: {
    evaluateConditions(condition?: Condition[][]) {
      if (!condition) return true
      // OR
      return condition.some((or) => !or.some((c) => this.evaluateCondition(c)))
    },
    evaluateCondition(condition?: Condition) {
      if (!condition) return true
      const field = this.allFields.find((f) => f.slug === condition.field)
      if (!field) return false
      const parent = this.allFields.find((f) => f.id === field.parent)

      const value = parent
        ? this.editor.acf[parent.key][field.key]
        : this.editor.acf[field.key]
      switch (condition.operator) {
        case '==':
          return value === condition.value
      }
      console.warn('missing operator')
      return true
    },
    getDraftIds() {
      return Object.keys(window.localStorage).filter((d) =>
        d.startsWith('draft/')
      )
    },
    createDraft() {
      this.editor = this.emptyDraft()
      const url = new URL(window.location.href)
      url.searchParams.set('draftId', this.editor.draftId)
      this.visitURL(url)
    },
    emptyDraft() {
      return {
        draftId: Math.random().toString(36).slice(2),
        createdAt: new Date().toJSON(),
        id: 0,
        acf: { status: 'draft' },
        slug: {},
      }
    },
    edit(application) {
      const url = new URL(window.location.href)
      url.hash = ''
      // Its a browser draft
      if (application.draftId) {
        let draftId = application.draftId.replace('draft/', '')
        this.editor = stale('draft/' + draftId)
        if (!this.editor) {
          return alert('This draft is not available')
        }
        if (url.searchParams.get('draftId') === draftId) return
        url.searchParams.set('draftId', draftId)
      } else if (application.id) {
        // It's a real draft
        this.editorId = application.id
        this.editor = application
        if (url.searchParams.get('editor') === application.id) return
        url.searchParams.set('editor', application.id)
        url.searchParams.set('editor', application.id)
      }
      this.visitURL(url)
    },
    removeDraft(app) {
      delete window.localStorage['draft/' + app?.draftId?.replace('draft/', '')]
      this.draftIds = this.getDraftIds()
      // window.location.reload()
    },
    async loadGroups() {
      const promise = wp.get<any[]>('/wp/v2/acf-field-group')
      this.allGroupsPromise = promise
      this.allGroups = (await promise).data
      persist('allGroups', this.allGroups)
    },
    async loadFields() {
      const promise = wp.get<{ menu_order: number }[]>('/wp/v2/acf-field', {
        params: { per_page: 99 },
      })
      this.allFieldsPromise = promise
      this.allFields = (await promise).data.sort(
        (a, b) => a.menu_order - b.menu_order
      )
      persist('allFields', this.allFields)
    },
    async loadMyApplications() {
      const promise = wp.get<{ menu_order }[]>('/wp/v2/application')
      this.myApplicationsPromise = promise
      this.myApplications = (await promise).data.reverse()
      return this.myApplications
    },
    async loadAllOrganisations() {
      const promise = wp.get<Organisation[]>(
        '/subsidy-application/organisations'
      )
      this.allOrganisationsPromise = promise
      this.allOrganisations = (await promise).data.reverse()
      persist('allOrganisations', this.allOrganisations)
      return this.myApplications
    },

    // Status

    async save(application) {
      const saved = await wp.post('/wp/v2/application/', {})
    },
    async review(application) {},
    async remove(application) {
      const ok = await wp.delete('/wp/v2/application/' + application.id)
      this.reconsider()
    },

    // Routing

    visit(event) {
      event.preventDefault()
      const url = new URL(event.target.href || event.target.parentElement.href)
      this.draftId = url.searchParams.get('draftId') || ''
      this.editorId = url.searchParams.get('editor')
      if (!this.editorId) this.editor = null
      this.visitURL(url, false)
    },
    visitURL(url, back = false) {
      console.log('url', url.toString())
      const before = this.draftId
      this.draftId = url.searchParams.get('draftId') || ''
      if (!this.draftId && before) this.editor = null
      console.log('scrointview')
      document.body.scrollIntoView()

      if (!back) window.history.pushState({}, '', url)
    },

    // Helpers
    types(app) {
      return Array.isArray(app.acf.type) ? app.acf.type : []
    },
    isEditable(app) {
      return app && app.acf && app.acf.status === 'draft'
    },
    clear() {
      window.localStorage.clear()
      location.reload()
    },
    reconsider() {
      this.loadMyApplications()
    },
  },
  mounted() {
    this.loadGroups()
    this.loadFields()
    // window.jQuery('#collapse0').collapse('toggle')

    if (this.signedIn) {
      this.loadMyApplications().then((apps) => {
        const app = apps.find((a) => a.id === this.editorId)
        app && this.edit(app)
      })
    }

    if (this.draftId && !this.editor) {
      this.edit(this.draftId)
    }

    window.addEventListener('focus', this.reconsider)
    window.addEventListener('visible', this.reconsider)
    // Routing
    setTimeout(() => {
      window.addEventListener(
        'popstate',
        () => {
          console.log('postate')
          this.visitURL(new URL(window.location.href), true)
        },
        false
      )
    }, 500)
  },
  watch: {
    editor: {
      deep: true,
      handler(d) {
        if (d) persist('draft/' + d.draftId, d)
      },
    },
  },
})

function persist(key, data) {
  try {
    window.localStorage[key] = JSON.stringify({
      at: new Date(),
      data,
    })
  } catch (error) {}
}

function stale(key) {
  try {
    const data = window.localStorage[key]
    // console.log('stale', data)
    if (!data) return
    // console.log('stalee', JSON.parse(data))
    return JSON.parse(data).data
  } catch (error) {}
}

function createWordpressAxios() {
  return axios.create({
    baseURL: window.restUrl,
    headers: {
      'X-WP-Nonce': window.wpNonce,
    },
  })
}

function serialize(obj) {
  const str: string[] = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  }
  return str.join('&')
}

function unserialize(str) {
  const query = str[0] === '#' || str[0] === '?' ? str.slice(1) : str
  const result = {}
  query
    .split('&')
    .filter(Boolean)
    .forEach((part) => {
      const item = part.split('=')
      result[decodeURIComponent(item[0])] = decodeURIComponent(item[1])
    })
  return result
}

function loadScript(url) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script')
    script.src = url
    script.async = true
    script.onload = function () {
      script.remove()
      resolve(true)
    }
    script.onerror = function () {
      script.remove()
      reject()
    }
    document.head.appendChild(script)
  })
}

export interface Organisation {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  author: number
  template: string
  orgland: number[]
  'soort-organisatie': number[]
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

interface Condition {
  field: SVGStringList
  operator: '=='
  value: string
}
