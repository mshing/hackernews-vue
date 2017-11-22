<template>
  <div>
    <div class="page-container__content" v-if="youtubeChannel != null">
      <img :src="youtubeChannel.brandingSettings.image.bannerImageUrl" />
      <h2>{{youtubeChannel.snippet.title}}</h2>
      <p>{{youtubeChannel.snippet.description}}</p>
    </div>
    <div class="page-container__content" v-if="youtubeChannel != null">
      <pre style="white-space:pre-wrap;">{{youtubeChannel}}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  created () {
    this.search()
  },
  computed: mapGetters({
    youtubeChannel: 'youtubeChannel'
  }),
  methods: {
    search: function () {
      this.$store.dispatch('youtubeChannel', {channelId: this.id}).then(() => {
      })
    }
  }
}
</script>