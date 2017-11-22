<template>
  <div class="video-results">
    <div class="gallery">
      <transition name="slide-fade">
        <ul class="gallery__container" v-show="youtubeVideos != null && youtubeVideos.length > 0">
          <li class="gallery__item" v-for="video in youtubeVideos" v-on:click="selectVideo(video)" :key="video.id.videoId">
            <h2 class="gallery__title">{{video.snippet.title}}</h2>
            <router-link class="gallery__channel-link" :to="`/videos/channel/${video.snippet.channelId}`">{{video.snippet.channelTitle}}</router-link>
            <image-loader class="gallery__thumbnail" :lo-res-src="video.snippet.thumbnails.default.url" :hi-res-src="video.snippet.thumbnails.high.url" />
          </li>
        </ul>
      </transition>
    </div>
    <div class="light-box" v-if="currentVideo != null" v-on:click="currentVideo = null;">
      <iframe :width="currentVideo.snippet.thumbnails.high.width" :height="currentVideo.snippet.thumbnails.high.height" v-bind:src="`https://www.youtube.com/embed/${currentVideo.id.videoId}`" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="page-container__content" v-if="youtubeVideos != null && youtubeVideos.length > 0">
      <pre style="white-space:pre-wrap;">{{youtubeVideos}}</pre>
    </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
import { mapGetters } from 'vuex'

export default {
  name: 'VideoResults',
  components: {
    ImageLoader
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
    }
  }
}
</script>