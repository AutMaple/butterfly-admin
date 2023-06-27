import axios from "axios"

const state = {
  menus: [],
  menuPath: []
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
  },
  CHANGE_MENU_PATH(state, menuIndexes) {
    var path = []
    var menus = state.menus
    for (let index of menuIndexes) {
      index = parseInt(index)
      for (let menu of menus) {
        if (menu.id === index) {
          path.push(menu.title)
          menus = menu.subMenu
          break
        }
      }
    }
    state.menuPath = path
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
