import * as types from '../mutation-types'

// initial state
const state = {
  ajaxCallsInProgress: 0
}

// getters
const getters = {
  ajaxCallsInProgress: state => state.ajaxCallsInProgress
}

// actions
const actions = {
  ajaxCallBegin (context, params) {
    context.commit(types.AJAX_CALL_BEGIN)
  },
  ajaxCallSuccess (context, params) {
    context.commit(types.AJAX_CALL_SUCCESS)
  },
  ajaxCallError (context, params) {
    context.commit(types.AJAX_CALL_ERROR)
  }
}

// mutations
const mutations = {
  [types.AJAX_CALL_BEGIN] (state, payload) {
    state.ajaxCallsInProgress += 1
    return state
  },
  [types.AJAX_CALL_SUCCESS] (state, payload) {
    state.ajaxCallsInProgress -= state.ajaxCallsInProgress > 0 ? 1 : 0
    return state
  },
  [types.AJAX_CALL_ERROR] (state, payload) {
    state.ajaxCallsInProgress -= state.ajaxCallsInProgress > 0 ? 1 : 0
    return state
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
