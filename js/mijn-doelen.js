Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  el: '#app',
  data() {
    let selection = window.selection
    if (selection.value) selection = selection.value
    if (selection.selection) selection = selection.selection
    let author = window.selection
    if (author.author) author = author.author
    if (author.value) author = author.value
    if (author.author) author = author.author
    const url = new URL(window.location.href)
    return {
      readkey: url.searchParams.get('key') || '',
      writekey: url.searchParams.get('writekey') || '',
      value: window.selection.value,
      author,
      selection: selection || [],
      editing: false,
    }
  },
  methods: {
    async set(goal, score) {
      if (!this.writekey) return alert('Je kan geen aanpassingen maken.')
      console.log('goa', goal, score)
      goal.score = score
      this.selection = this.selection.slice()

      try {
        await wpFetch('/wp-json/anonymous-storage/v1/item/' + this.writekey, {
          method: 'PUT',
          body: JSON.stringify({ ...this.value, selection: this.selection }),
        })
      } catch (error) {
        console.log('err', error)
        alert('De score is NIET bewaard. ' + error.message)
      }
    },
  },
  mounted() {},
})

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
