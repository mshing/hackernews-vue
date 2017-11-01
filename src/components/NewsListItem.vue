<template>
  <li class="news-item">
    <div class="news-item__content news-item__rating">{{item.score}}</div>
    <div class="news-item__content">
      <span class="news-item__line"><a class="news-item__title" :href="item.url">{{item.title}}</a> <span>(<a class="news-item__link" :href="`https://news.ycombinator.com/from?site=${domain}`">{{domain}}</a>)</span> - {{item.type}}</span>
      <span class="news-item__line">by <a class="news-item__link" :href="`https://news.ycombinator.com/user?id=${item.by}`">{{item.by}}</a> {{timeSince}} | <a class="news-item__link" :href="`https://news.ycombinator.com/item?id=${item.id}`">{{item.descendants}} comments</a></span>
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

<style>
</style>
