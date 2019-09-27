const state = {
  language: uni.getStorageSync('language') || 'zh'
}
const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    uni.setStorageSync('language', language)
  }
}

const actions = {
  setLanguage({ commit }, language)  {
    commit('SET_LANGUAGE', language)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}