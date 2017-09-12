<template>
  <div class="page-container">
    <news-pager v-if="newsItems && newsTotal" :page="page" :itemCount="newsTotal" :clickAction="changePage" :itemsPerPage="itemsPerPage"></news-pager>

    <div class="list">
      <transition name="slide-fade">
        <ul v-bind:class="{ hidden: !listVisible }" v-show="listVisible">
          <news-list-item v-for="(newsItem, index) in newsItems" :item="newsItem" :index="index" :key="newsItem.id"></news-list-item>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import NewsListItem from '@/components/NewsListItem'
import NewsPager from '@/components/NewsPager'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    NewsListItem,
    NewsPager
  },
  data () {
    return {
      page: 1,
      itemsPerPage: 30,
      errors: '',
      type: null,
      listVisible: false
    }
  },
  created () {
    this.type = this.getType(this.$route.path)

    this.getNews(1, this.type)
  },
  computed: mapGetters({
    newsItems: 'newsItems',
    newsTotal: 'newsTotal'
  }),
  methods: {
    getNews: function (page, type) {
      this.page = page
      this.type = type
      this.listVisible = false

      this.$store.dispatch('getNews', { page: page, itemsPerPage: this.itemsPerPage, type: type }).then(() => {
        this.listVisible = true
      })
    },
    getType: function (path) {
      let type = path.toLowerCase().replace(/\//g, '').replace('jobs', 'job') + 'stories'

      return type === 'stories' ? 'topstories' : type
    },
    changePage: function (e) {
      if (e !== undefined) {
        e.preventDefault()

        var page = this.page
        let dataPage = e.target.getAttribute('data-page')
        let pageCount = this.newsTotal ? Math.ceil(this.newsTotal / this.itemsPerPage) : 1

        if (dataPage === 'next') {
          page += 1
        } else if (dataPage === 'prev') {
          page -= 1
        } else {
          page = 1
        }

        if (page > pageCount) page = pageCount
        if (page < 1) page = 1

        if (page !== this.page) {
          this.getNews(page, this.type)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
