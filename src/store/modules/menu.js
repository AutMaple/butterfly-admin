import axios from "axios"

const state = {
  menus: []
}

const actions = {
  loadMenus({ commit, state }) {
    if (!state.menus || state.menus.length == 0) {
      axios.get("http://localhost:8080/menu")
        .then((res) => {
          var menus = res.data
          commit("STORE_MENUS", menus)
        })
    }
  }
}

const mutations = {
  STORE_MENUS(state, menus) {
    state.menus = menus
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
