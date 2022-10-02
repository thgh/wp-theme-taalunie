Vue.config.productionTip = false
Vue.config.devtools = false

const html = String.raw
Vue.component('Field', {
  props: ['value', 'field'],
  template: html`<div v-if="!value">no value</div>
    <div v-else-if="field.settings.type === 'group'">group {{field.key}}</div>
    <input
      v-else-if="field.settings.type === 'text'"
      type="text"
      class="d-block inp"
      v-model="model"
    />
    <textarea
      v-else-if="field.settings.type === 'textarea'"
      type="text"
      class="d-block inp"
      :rows="field.settings.rows"
      :maxlength="field.settings.maxlength"
    ></textarea>
    <div v-else-if="field.settings.type === 'checkbox'" type="text">
      <label
        v-for="(label, val) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input type="checkbox" class="mr-2" v-model="model" :value="val" />
        {{label}}
      </label>
    </div>
    <div v-else-if="field.settings.type === 'button_group'" type="text">
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
        />
        {{label}}
      </label>
      <pre>{{field}}</pre>
    </div>
    <div v-else-if="field.settings.type === 'post_object'" type="text">
      <input
        type="text"
        placeholder="autocomplete organisatie"
        class="d-block inp"
        v-model="model"
      />
      <button
        type="button"
        :disabled="model === org.id"
        :style="{background: model === org.id ? '#212d4c':'',color: model === org.id ? '#fff':''}"
        @click="$set(value, field.key, org.id)"
        v-for="org in $root.organisations"
      >
        {{org.title}}
      </button>
    </div>
    <div v-else>
      Unexpected input type: {{field.settings.type}}
      <pre>{{field}}</pre>
    </div> `,
  computed: {
    model: {
      get() {
        return this.value[this.field.key] ?? this.field.settings.default_value
      },
      set(value) {
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

new Vue({
  el: '#app',
  data() {
    const url = new URL(window.location.href)
    const draftIds = Object.keys(window.localStorage).filter((d) =>
      d.startsWith('draft/')
    )
    return {
      // Route
      draftId: url.searchParams.get('draftId') || '',

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
    rootFields() {
      return this.allFields
        .filter((f) => f.settings.type !== 'user')
        .filter((c) => !this.fieldIds.includes(c.parent))
        .map((parent) =>
          Object.assign(parent, {
            children: this.allFields.filter((f) => f.parent === parent.id),
          })
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
  },
  methods: {
    emptyDraft() {
      return {
        draftId: Math.random().toString(36).slice(2),
        createdAt: new Date().toJSON(),
        id: 0,
        acf: {},
        slug: {},
      }
    },
    loadDraft(draftId) {
      draftId = draftId.replace('draft/', '')
      this.editor = stale('draft/' + draftId)
      const url = new URL(window.location.href)
      url.searchParams.set('draftId', draftId)
      url.hash = ''
      this.visitURL(url)
    },
    removeDraft(app) {
      delete window.localStorage['draft/' + app?.draftId?.replace('draft/', '')]
      window.location.reload()
    },
    async loadGroups() {
      this.allGroupsPromise = wpFetch('/wp-json/wp/v2/acf-field-group')
      this.allGroups = await this.allGroupsPromise
      persist('allGroups', this.allGroups)
    },
    async loadFields() {
      this.allFieldsPromise = wpFetch('/wp-json/wp/v2/acf-field?per_page=20')
      this.allFields = (await this.allFieldsPromise).reverse()
      persist('allFields', this.allFields)
    },
    async loadMyApplications() {
      this.myApplicationsPromise = wpFetch('/wp-json/wp/v2/application')
      this.myApplications = (await this.myApplicationsPromise).reverse()
    },
    async loadAllOrganisations() {
      this.allOrganisationsPromise = wpFetch('/wp-json/wp/v2/organisation')
      this.allOrganisations = (await this.allOrganisationsPromise).reverse()
      persist('allOrganisations', this.allOrganisations)
    },

    // Routing

    visit(event) {
      event.preventDefault()
      const url = new URL(event.target.href || event.target.parentElement.href)
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
      this.loadMyApplications()
      console.log()
    }

    if (this.draftId && !this.editor) {
      this.loadDraft(this.draftId)
    }

    window.addEventListener('focus', this.reconsider)
    window.addEventListener('visible', this.reconsider)
    // Routing
    window.addEventListener(
      'popstate',
      () => this.visitURL(new URL(window.location.href), true),
      false
    )
  },
  watch: {
    editor: {
      deep: true,
      handler(d) {
        console.log('d', d)
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
    console.log('stale', data)
    if (!data) return
    console.log('stalee', JSON.parse(data))
    return JSON.parse(data).data
  } catch (error) {}
}

function wpFetch(url, options) {
  let res
  return fetch(
    window.restUrl + url.replace('/wp-json', '').slice(1),
    Object.assign(options || {}, {
      headers: Object.assign((options && options.headers) || {}, {
        'X-WP-Nonce': window.wpNonce,
      }),
    })
  )
    .then((r) => {
      res = r
      return r.json()
    })
    .then((d) => {
      if (d.code) {
        throw new Error('Fetch error: ' + d.code)
      }
      d.total = res.headers.get('X-WP-Total')
      return d
    })
}

function serialize(obj) {
  const str = []
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
      resolve()
    }
    script.onerror = function () {
      script.remove()
      reject()
    }
    document.head.appendChild(script)
  })
}
