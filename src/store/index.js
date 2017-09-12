import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import ajaxStatus from './modules/ajaxStatus'
import counter from './modules/counter'
import hackernews from './modules/hackernews'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    ajaxStatus,
    counter,
    hackernews
  }
})

export default store
