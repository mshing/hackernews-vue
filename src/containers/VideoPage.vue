<template>
  <div class="page-container">
    <div class="page-container__content">
      <h1 class="page-container__title">Videos</h1>

      <div class="video-search">
          <input type="text" v-model="searchParam" /><button class="button button--inline" v-on:click="search">Search</button>
      </div>
    </div>

    <ul class="gallery" v-if="youtubeVideos != null && youtubeVideos.length > 0">
      <li class="gallery__item" v-for="video in youtubeVideos" v-on:click="selectVideo(video)">
        <h2 class="gallery__title">{{video.snippet.title}}</h2>
        <img class="gallery__thumbnail" :src="video.snippet.thumbnails.medium.url" :width="video.snippet.thumbnails.medium.width" :height="video.snippet.thumbnails.medium.height" />
      </li>
    </ul>
    <div class="light-box" v-if="currentVideo != null" v-on:click="currentVideo = null;">
      <iframe :width="currentVideo.snippet.thumbnails.high.width" :height="currentVideo.snippet.thumbnails.high.height" v-bind:src="`https://www.youtube.com/embed/${currentVideo.id.videoId}`" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="page-container__content" v-if="youtubeVideos != null && youtubeVideos.length > 0">
      <pre style="white-space:pre-wrap;">{{youtubeVideos}}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Video',
  components: {
  },
  data () {
    return {
      searchParam: null,
      currentVideo: null
    }
  },
  created () {
  },
  computed: mapGetters({
    youtubeVideos: 'youtubeVideos',
    youtubeTotal: 'youtubeTotal'
  }),
  methods: {
    selectVideo: function (video) {
      this.currentVideo = video
    },
    search: function () {
      this.$store.dispatch('youtubeSearch', {search: this.searchParam}).then(() => {
      })
    }
  }
}
</script>

<style>
</style>