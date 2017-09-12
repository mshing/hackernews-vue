import * as types from '../mutation-types'

// initial state
const state = {
  count: 0
}

// getters
const getters = {
  getCount: state => state.count
}

// actions
const actions = {
  incrementCount (context, payload) {
    context.commit(types.COUNTER_INCREMENT, payload)
  },
  decrementCount (context, payload) {
    context.commit(types.COUNTER_DECREMENT, payload)
  }
}

// mutations
const mutations = {
  [types.COUNTER_INCREMENT] (state, payload) {
    state.count = state.count + payload.amount
    return state.count
  },
  [types.COUNTER_DECREMENT] (state, payload) {
    state.count = state.count - payload.amount
    return state.count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
