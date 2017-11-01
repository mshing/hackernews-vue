<template>
  <div id="app">
    <header class="header">
      <router-link class="header__link header__link--home" to="/">V</router-link>
      <router-link class="header__link" to="/Top/">Top</router-link>
      <router-link class="header__link" to="/New/">New</router-link>
      <router-link class="header__link" to="/Show/">Show</router-link>
      <router-link class="header__link" to="/Ask/">Ask</router-link>
      <router-link class="header__link" to="/Jobs/">Jobs</router-link>
      <router-link class="header__link" to="/About/">About</router-link>
      <router-link class="header__link" to="/Videos/">Videos</router-link>
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
