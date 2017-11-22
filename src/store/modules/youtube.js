import * as types from '../mutation-types'
import ajaxStatus from './ajaxStatus'

// initial state
const state = {
  videos: null,
  total: 0,
  channel: null
}

// getters
const getters = {
  youtubeVideos: state => state.videos,
  youtubeTotal: state => state.total,
  youtubeChannel: state => state.channel
}

// actions
const actions = {
  youtubeSearch (context, params) {
    state.videos = null

    ajaxStatus.actions.ajaxCallBegin(context)

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${params.search}&key=AIzaSyCXJq_nDZuqyo_iyCqGj7RgSQSya6IdYoA`).then((result) => {
      return result.json().then(json => {
        context.commit(types.YOUTUBE_SEARCH_SUCCESS, {videos: json.items, total: json.items.length})
        ajaxStatus.actions.ajaxCallSuccess(context)
      })
    }).catch((error) => {
      ajaxStatus.actions.ajaxCallError(context)
      throw (error.message)
    })
  },
  youtubeChannel (context, params) {
    state.channel = null

    ajaxStatus.actions.ajaxCallBegin(context)

    return fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${params.channelId}&key=AIzaSyCXJq_nDZuqyo_iyCqGj7RgSQSya6IdYoA`).then((result) => {
      return result.json().then(json => {
        context.commit(types.YOUTUBE_CHANNEL_SUCCESS, {channel: json.items[0]})
        ajaxStatus.actions.ajaxCallSuccess(context)
      })
    }).catch((error) => {
      ajaxStatus.actions.ajaxCallError(context)
      throw (error.message)
    })
  }
}

// mutations
const mutations = {
  [types.YOUTUBE_SEARCH_SUCCESS] (state, payload) {
    console.log(payload)
    state.videos = payload.videos
    state.total = payload.total
    return state
  },
  [types.YOUTUBE_CHANNEL_SUCCESS] (state, payload) {
    console.log(payload)
    state.channel = payload.channel
    return state
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
