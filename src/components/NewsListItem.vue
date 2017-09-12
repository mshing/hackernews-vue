<template>
  <li>
    <div class="rating">{{item.score}}</div>
    <div>
      <span><a class="title" :href="item.url">{{item.title}}</a> <span>(<a :href="`https://news.ycombinator.com/from?site=${domain}`">{{domain}}</a>)</span> - {{item.type}}</span>
      <span>by <a :href="`https://news.ycombinator.com/user?id=${item.by}`">{{item.by}}</a> {{timeSince}} | <a :href="`https://news.ycombinator.com/item?id=${item.id}`">{{item.descendants}} comments</a></span>
    </div>
  </li>
</template>

<script>

export default {
  name: 'NewsListItem',
  props: ['item'],
  computed: {
    domain: function () {
      let domain = this.item.url
      let match = domain && domain.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
      if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) domain = match[2]

      return domain
    },
    timeSince: function () {
      let date = this.item.time
      let seconds = Math.floor(((new Date().getTime() / 1000) - date))
      let interval = Math.floor(seconds / 31536000)

      if (interval >= 1) return interval + ' year' + (interval > 1 ? 's' : '') + ' ago'

      interval = Math.floor(seconds / 2592000)
      if (interval >= 1) return interval + ' month' + (interval > 1 ? 's' : '') + ' ago'

      interval = Math.floor(seconds / 86400)
      if (interval >= 1) return interval + ' day' + (interval > 1 ? 's' : '') + ' ago'

      interval = Math.floor(seconds / 3600)
      if (interval >= 1) return interval + ' hour' + (interval > 1 ? 's' : '') + ' ago'

      interval = Math.floor(seconds / 60)
      if (interval >= 1) return interval + ' minute' + (interval > 1 ? 's' : '') + ' ago'

      interval = Math.floor(seconds)

      return interval + ' second' + (interval > 1 ? 's' : '') + ' ago'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
