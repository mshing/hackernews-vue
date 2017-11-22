<template>
  <div class="page-container">
    <div class="page-container__content">
      <h1 class="page-container__title">Videos</h1>

      <div class="video-search">
          <input type="text" v-model="searchParam" /><button class="button button--inline" v-on:click="search">Search</button>
      </div>
    </div>
    
    <router-view :key="$route.fullPath"></router-view>
</div>
</template>

<script>

export default {
  name: 'Video',
  data () {
    return {
      searchParam: null,
      currentVideo: null
    }
  },
  created () {
  },
  methods: {
    search: function () {
      this.$store.dispatch('youtubeSearch', {search: this.searchParam}).then(() => {
        var route = '/videos/'
        if (this.$route.path !== route) this.$router.push('/videos/')
      })
    }
  }
}
</script>

<style>
</style>