import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import ajaxStatus from './modules/ajaxStatus'
import counter from './modules/counter'
import hackernews from './modules/hackernews'
import youtube from './modules/youtube'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    ajaxStatus,
    counter,
    hackernews,
    youtube
  }
})

export default store
