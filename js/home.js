Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  el: '#app',
  data() {
    const url = new URL(window.location.href)
    return {
      p: url.searchParams.get('p') || '',
      region: url.searchParams.get('region') || '',
      categorySlug: url.searchParams.get('category') || '',
      categoriesPromise: null,
      allGoalsPromise: null,
      allGoals: stale('allGoals') || [],
      categories: stale('categories') || [],
      selection: stale('selection') || [],
      sorting: url.searchParams.get('step') === 'sorting',
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
      return this.allGoals.filter((g) =>
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

    // Selection
    ids() {
      return this.selection.map((g) => g.id)
    },
  },
  methods: {
    childrenByCategory(parent) {
      return this.categories.filter((c) => c.parent === parent.id)
    },
    goalsByCategory(c) {
      return this.allGoals.filter((g) => g.categories.includes(c.id))
    },
    async loadCategories() {
      this.categoriesPromise = wpFetch('/wp-json/wp/v2/categories?per_page=100')
      this.categories = await this.categoriesPromise
      persist('categories', this.categories)
    },
    async loadDoelen() {
      this.allGoalsPromise = wpFetch('/wp-json/wp/v2/doel?per_page=100')
      this.allGoals = await this.allGoalsPromise
      persist('allGoals', this.allGoals)
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
      this.p = url.searchParams.get('p') || ''
      this.region = url.searchParams.get('region') || ''
      this.categorySlug = url.searchParams.get('category') || ''
      this.sorting = url.searchParams.get('step') === 'sorting'
      document.body.scrollIntoView()

      if (!back) window.history.pushState({}, '', url)
    },

    // Selection
    toggle(goal) {
      if (this.ids.includes(goal.id)) {
        this.selection = this.selection.filter((g) => g.id !== goal.id)
      } else
        this.selection.push({
          id: goal.id,
          title: goal.title.rendered,
          content: goal.content.rendered,
        })
    },
    next() {
      if (!this.sorting) {
        const url = new URL(window.location.href)
        url.searchParams.set('step', 'sorting')
        url.hash = ''
        this.visitURL(url)
        return
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
    add(title) {
      this.selection.push({ id: Math.random(), title })
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
  },
  watch: {
    p() {
      if (!this.categoriesPromise) this.loadCategories()
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

function wpFetch(url) {
  let res
  return fetch(window.restUrl + url.replace('/wp-json', '').slice(1))
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
