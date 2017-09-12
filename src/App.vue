<template>
  <div id="app">
    <header>
      <router-link class="home-link" to="/">V</router-link>
      <router-link to="/Top/">Top</router-link>
      <router-link to="/New/">New</router-link>
      <router-link to="/Show/">Show</router-link>
      <router-link to="/Ask/">Ask</router-link>
      <router-link to="/Jobs/">Jobs</router-link>
      <router-link to="/About/">About</router-link>
    </header>
    <main>
        <router-view :key="$route.fullPath"></router-view>
    </main>
    <transition name="fade">
      <LoadingOverlay v-if="ajaxCallsInProgress > 0" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingOverlay from '@/components/LoadingOverlay'

export default {
  name: 'app',
  components: {
    LoadingOverlay
  },
  computed: mapGetters({
    ajaxCallsInProgress: 'ajaxCallsInProgress'
  })
}
</script>

<style>

</style>
