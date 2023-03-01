Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  el: '#app',
  data() {
    const url = new URL(window.location.href)
    return {
      ik: url.searchParams.get('ik') || '',
      region: url.searchParams.get('regio') || '',
      categorySlug: url.searchParams.get('category') || '',
      step: url.searchParams.get('step') || '',
      categoriesPromise: null,
      allGoalsPromise: null,
      allGoals: stale('allGoals') || [],
      categories: stale('categories') || [],
      selection: stale('selection') || [],
      draggable: false,
      drag: false,
      title: '',
    }
  },
  computed: {
    mainCategories() {
      return this.categories.filter((c) => !c.parent)
    },
    otherCategories() {
      if (!this.category) return this.mainCategories
      return this.mainCategories.filter((c) => c.id !== this.category.id)
    },
    category() {
      setTimeout(() => {
        if (
          this.categories.length &&
          !this.categories.find((c) => c.slug === this.categorySlug)
        ) {
          this.categorySlug = ''
        }
      }, 500)
      return this.categories.find((c) => c.slug === this.categorySlug)
    },
    categoryGoals() {
      if (!this.allGoalsPromise) setTimeout(() => this.loadDoelen())
      return this.regionGoals.filter((g) =>
        g.categories.includes(this.category.id)
      )
    },
    categoryChildren() {
      return this.childrenByCategory(this.category).map((child) =>
        Object.assign(
          {
            goals: this.goalsByCategory(child),
            children: this.childrenByCategory(child).map((grandchild) =>
              Object.assign(
                { goals: this.goalsByCategory(grandchild) },
                grandchild
              )
            ),
          },
          child
        )
      )
    },

    // Goals by region
    regionGoals() {
      if (!this.region) return this.allGoals
      if (!this.regionsPromise) setTimeout(() => this.loadRegions())
      if (!this.regions) return this.allGoals
      const region = this.regions.find((r) => r.slug === this.region)
      if (!region) return this.allGoals
      const regionId = region.id
      return this.allGoals.filter(
        (goal) =>
          !goal.region || !goal.region.length || goal.region.includes(regionId)
      )
    },

    // Selection
    ids() {
      return this.selection.map((g) => g.id)
    },

    // If the user can hover, they can scroll through probably
    supportsHover() {
      return matchMedia('(any-hover: hover)').matches
    },
    goalHandle() {
      return this.supportsHover ? undefined : '.goal-handle'
    },
  },
  methods: {
    childrenByCategory(parent) {
      return this.categories.filter((c) => c.parent === parent.id)
    },
    goalsByCategory(c) {
      return this.regionGoals.filter((g) => g.categories.includes(c.id))
    },
    async loadCategories() {
      this.categoriesPromise = wpFetch(
        '/wp-json/wp/v2/categories?per_page=1000'
      )
      this.categories = await this.categoriesPromise
      persist('categories', this.categories)
    },
    async loadDoelen() {
      this.allGoalsPromise = wpFetch('/wp-json/wp/v2/doel?per_page=1000')
      this.allGoals = (await this.allGoalsPromise).reverse()
      persist('allGoals', this.allGoals)
    },
    async loadRegions() {
      this.regionsPromise = wpFetch('/wp-json/wp/v2/region')
      this.regions = (await this.regionsPromise).reverse()
      persist('regions', this.regions)
    },
    back() {
      const url = new URL(window.location.href)
      url.searchParams.delete('category')
      url.searchParams.delete('step')
      url.hash = ''
      return url.toString()
    },
    slugify(category) {
      const url = new URL(window.location.href)
      url.searchParams.set('category', category.slug)
      url.hash = ''
      return url.toString()
    },
    visit(event) {
      event.preventDefault()
      const url = new URL(event.target.href || event.target.parentElement.href)
      this.visitURL(url, false)
    },
    visitURL(url, back = false) {
      this.ik = url.searchParams.get('ik') || ''
      this.region = url.searchParams.get('regio') || ''
      this.categorySlug = url.searchParams.get('category') || ''
      this.step = url.searchParams.get('step') || ''
      document.body.scrollIntoView()

      if (!back) window.history.pushState({}, '', url)
    },
    alertBE() {
      alert(
        'Aan de Vlaamse versie van de leerdoelencatalogus wordt op dit moment hard gewerkt. We plaatsen die zo snel mogelijk online.'
      )
    },

    // Selection
    toggle(goal, categories = []) {
      if (this.ids.includes(goal.id)) {
        this.selection = this.selection.filter((g) => g.id !== goal.id)
      } else
        this.selection.push({
          id: goal.id,
          title: goal.title.rendered,
          content: goal.content.rendered,
          categories: categories.map((c) => ({
            id: c.id,
            link: c.link,
            name: c.name,
            slug: c.slug,
            thumb: c.thumb || undefined,
          })),
        })
    },
    next() {
      if (!this.step) {
        const url = new URL(window.location.href)
        url.searchParams.set('step', 'sorting')
        url.hash = ''
        this.visitURL(url)
        return
      }
      if (this.step === 'sorting') {
        const url = new URL(window.location.href)
        url.searchParams.set('step', 'linking')
        url.hash = ''
        this.visitURL(url)
        return
      }
    },
    async finish() {
      if (!this.selection || !this.selection.length) {
        return alert('Kies minstens één doel!')
      }

      if (this.saving) return
      this.saving = true
      try {
        const ok = await wpFetch('/wp-json/anonymous-storage/v1/item', {
          method: 'POST',
          body: JSON.stringify({
            author: this.author || prompt('Wat is jouw naam?') || 'Anoniem',
            selection: this.selection,
          }),
        })
        this.saving = false

        console.log('ok', ok)
        localStorage.selection = null
        window.location.href =
          '/mijn-doelen?' +
          serialize({ readkey: ok.readkey, writekey: ok.writekey })
      } catch (error) {
        this.saving = false
        alert('Jouw doelen zijn NIET bewaard. ' + error.message)
      }
    },

    // Sorting
    async loadSorting() {
      if (this.draggable) return
      this.draggable = 1
      await loadScript('https://unpkg.com/sortablejs@1.15.0/Sortable.min.js')
      await loadScript(
        'https://unpkg.com/vuedraggable@2.24.3/dist/vuedraggable.umd.min.js'
      )
      this.draggable = 2
    },
    add(title, categories = []) {
      this.selection.push({ id: Math.random(), title, categories })
      this.title = ''
      const elem = document.querySelector('#addgoaltitle')
      if (elem) elem.focus()
    },
  },
  mounted() {
    if (this.region && !this.categoriesPromise) this.loadCategories()
    if (this.selection) this.loadSorting()

    // Routing
    window.addEventListener(
      'popstate',
      () => {
        console.log('back', window.location.href)
        this.visitURL(new URL(window.location.href), true)
      },
      false
    )

    if (this.region) document.body.classList.remove('no-catalogus-link')
    else document.body.classList.add('no-catalogus-link')
  },
  watch: {
    ik(wil) {
      if (!this.categoriesPromise) this.loadCategories()
    },
    region(r) {
      if (r && !this.categoriesPromise) this.loadCategories()

      if (r) document.body.classList.remove('no-catalogus-link')
      else document.body.classList.add('no-catalogus-link')
    },
    selection() {
      persist('selection', this.selection)
      this.loadSorting()
    },
  },
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
