Vue.config.productionTip = false
Vue.config.devtools = false

const html = String.raw
Vue.component('Field', {
  props: ['field'],
  template: html`<div v-if="field.settings.type === 'group'" />
    <input
      v-else-if="field.settings.type === 'text'"
      type="text"
      class="d-block inp"
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
        v-for="(label, value) of field.settings.choices"
        class="d-flex mb-0 py-2"
      >
        <input type="checkbox" class="mr-2" /> {{label}}
      </label>
    </div>
    <div v-else>
      Unexpected input type: {{field.settings.type}}
      <pre>{{field}}</pre>
    </div> `,
})

new Vue({
  el: '#app',
  data() {
    const url = new URL(window.location.href)
    return {
      p: url.searchParams.get('p') || '',
      region: url.searchParams.get('regio') || '',
      categorySlug: url.searchParams.get('category') || '',
      step: url.searchParams.get('step') || '',
      groupsPromise: null,
      allFieldsPromise: null,
      allFields: stale('allFields') || [],
      groups: stale('groups') || [{ title: 'Aanvrager' }],
      selection: stale('selection') || [],
      draggable: false,
      drag: false,
      title: '',
    }
  },
  computed: {
    fieldIds() {
      return this.allFields.map((c) => c.id)
    },
    rootFields() {
      return this.allFields
        .filter((c) => !this.fieldIds.includes(c.parent))
        .map((parent) =>
          Object.assign(parent, {
            children: this.allFields.filter((f) => f.parent === parent.id),
            // children: this.childrenByCategory(parent).map((grandchild) =>
            //   Object.assign(
            //     { fields: this.fieldsByCategory(grandchild) },
            //     grandchild
            //   )
            // ),
          })
        )
    },
    otherGroups() {
      if (!this.category) return this.mainGroups
      return this.mainGroups.filter((c) => c.id !== this.category.id)
    },
    category() {
      setTimeout(() => {
        if (
          this.groups.length &&
          !this.groups.find((c) => c.slug === this.categorySlug)
        ) {
          this.categorySlug = ''
        }
      }, 500)
      return this.groups.find((c) => c.slug === this.categorySlug)
    },
    categoryFields() {
      if (!this.allFieldsPromise) setTimeout(() => this.loadFields())
      return this.regionFields.filter((g) =>
        g.groups.includes(this.category.id)
      )
    },
    categoryChildren() {
      return this.childrenByCategory(this.category).map((child) =>
        Object.assign(
          {
            fields: this.fieldsByCategory(child),
            children: this.childrenByCategory(child).map((grandchild) =>
              Object.assign(
                { fields: this.fieldsByCategory(grandchild) },
                grandchild
              )
            ),
          },
          child
        )
      )
    },

    // Fields by region
    regionFields() {
      if (!this.region) return this.allFields
      if (!this.regionsPromise) setTimeout(() => this.loadRegions())
      if (!this.regions) return this.allFields
      const region = this.regions.find((r) => r.slug === this.region)
      if (!region) return this.allFields
      const regionId = region.id
      return this.allFields.filter(
        (goal) =>
          !goal.region || !goal.region.length || goal.region.includes(regionId)
      )
    },

    // Selection
    ids() {
      return this.selection.map((g) => g.id)
    },
  },
  methods: {
    // childrenByCategory(parent) {
    //   return this.groups.filter((c) => c.parent === parent.id)
    // },
    // fieldsByCategory(c) {
    //   return this.regionFields.filter((g) => g.groups.includes(c.id))
    // },
    async loadGroups() {
      this.groupsPromise = wpFetch('/wp-json/wp/v2/acf-field-group')
      this.groups = await this.groupsPromise
      persist('groups', this.groups)
    },
    async loadFields() {
      this.allFieldsPromise = wpFetch('/wp-json/wp/v2/acf-field')
      this.allFields = (await this.allFieldsPromise).reverse()
      persist('allFields', this.allFields)
    },
    // back() {
    //   const url = new URL(window.location.href)
    //   url.searchParams.delete('category')
    //   url.searchParams.delete('step')
    //   url.hash = ''
    //   return url.toString()
    // },
    // slugify(category) {
    //   const url = new URL(window.location.href)
    //   url.searchParams.set('category', category.slug)
    //   url.hash = ''
    //   return url.toString()
    // },
    // visit(event) {
    //   event.preventDefault()
    //   const url = new URL(event.target.href || event.target.parentElement.href)
    //   this.visitURL(url, false)
    // },
    // visitURL(url, back = false) {
    //   this.p = url.searchParams.get('p') || ''
    //   this.region = url.searchParams.get('regio') || ''
    //   this.categorySlug = url.searchParams.get('category') || ''
    //   this.step = url.searchParams.get('step') || ''
    //   document.body.scrollIntoView()

    //   if (!back) window.history.pushState({}, '', url)
    // },

    // // Selection
    // toggle(goal) {
    //   if (this.ids.includes(goal.id)) {
    //     this.selection = this.selection.filter((g) => g.id !== goal.id)
    //   } else
    //     this.selection.push({
    //       id: goal.id,
    //       title: goal.title.rendered,
    //       content: goal.content.rendered,
    //     })
    // },
    // next() {
    //   if (!this.step) {
    //     const url = new URL(window.location.href)
    //     url.searchParams.set('step', 'sorting')
    //     url.hash = ''
    //     this.visitURL(url)
    //     return
    //   }
    //   if (this.step === 'sorting') {
    //     const url = new URL(window.location.href)
    //     url.searchParams.set('step', 'linking')
    //     url.hash = ''
    //     this.visitURL(url)
    //     return
    //   }
    // },
    // async finish() {
    //   if (this.saving) return
    //   this.saving = true
    //   try {
    //     const ok = await wpFetch('/wp-json/anonymous-storage/v1/item', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         author: this.author || prompt('Wat is jouw naam?') || 'Anoniem',
    //         selection: this.selection,
    //       }),
    //     })
    //     this.saving = false

    //     console.log('ok', ok)
    //     localStorage.selection = null
    //     window.location.href =
    //       '/mijn-fields?' +
    //       serialize({ readkey: ok.readkey, writekey: ok.writekey })
    //   } catch (error) {
    //     this.saving = false
    //     alert('Jouw fields zijn NIET bewaard. ' + error.message)
    //   }
    // },

    // // Sorting
    // async loadSorting() {
    //   if (this.draggable) return
    //   this.draggable = 1
    //   await loadScript('https://unpkg.com/sortablejs@1.15.0/Sortable.min.js')
    //   await loadScript(
    //     'https://unpkg.com/vuedraggable@2.24.3/dist/vuedraggable.umd.min.js'
    //   )
    //   this.draggable = 2
    // },
    // add(title) {
    //   this.selection.push({ id: Math.random(), title })
    //   this.title = ''
    //   const elem = document.querySelector('#addgoaltitle')
    //   if (elem) elem.focus()
    // },
  },
  mounted() {
    this.loadGroups()
    this.loadFields()
    // window.jQuery('#collapse0').collapse('toggle')
  },
  watch: {},
})

function persist(key, data) {
  try {
    localStorage[key] = JSON.stringify({
      at: new Date(),
      data,
    })
  } catch (error) {}
}

function stale(key) {
  try {
    const data = localStorage[key]
    if (!data) return
    return JSON.parse(data).data
  } catch (error) {}
}

function wpFetch(url, options) {
  let res
  return fetch(window.restUrl + url.replace('/wp-json', '').slice(1), options)
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
