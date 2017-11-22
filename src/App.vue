<template>
  <div id="app" class="app-container">
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
      <transition name="">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </main>
    <transition name="fade" :duration="500">
      <LoadingOverlay v-show="ajaxCallsInProgress > 0" />
    </transition>
    <footer class="footer">
      <p class="footer__copy">&copy;Footer</p>
    </footer>
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
  }),
  methods: {
  }
}
</script>

<style>

</style>
