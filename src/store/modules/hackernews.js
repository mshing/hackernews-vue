import * as types from '../mutation-types'
import ajaxStatus from './ajaxStatus'

// initial state
const state = {
  items: null,
  total: 0
}

// getters
const getters = {
  newsItems: state => state.items,
  newsTotal: state => state.total
}

// actions
const actions = {
  getNews (context, params) {
    ajaxStatus.actions.ajaxCallBegin(context)

    return fetch(`https://hacker-news.firebaseio.com/v0/${params.type}.json`).then((result) => {
      return result.json().then(json => {
        let promises = []

        let startIndex = (params.page - 1) * params.itemsPerPage
        let endIndex = Math.min((params.page * params.itemsPerPage), json.length)

        for (let i = startIndex; i < endIndex; i++) {
          promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${json[i]}.json`))
        }

        return Promise
            .all(promises)
            .then(function (response) {
              let promises = []
              for (let i = 0; i < response.length; i++) {
                promises.push(response[i].json())
              }
              return Promise.all(promises)
            })
            .then(function (objects) {
              let results = []
              for (let i = 0; i < objects.length; i++) {
                results.push(objects[i])
              }

              context.commit(types.GET_NEWS_SUCCESS, {items: results, total: json.length})
              ajaxStatus.actions.ajaxCallSuccess(context)
            })
            .catch(function (error) {
              ajaxStatus.actions.ajaxCallError(context)
              throw (error.message)
            })
      })
    }).catch((error) => {
      ajaxStatus.actions.ajaxCallError(context)
      throw (error.message)
    })
  }
}

// mutations
const mutations = {
  [types.GET_NEWS_SUCCESS] (state, payload) {
    state.items = payload.items
    state.total = payload.total
    return state
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
