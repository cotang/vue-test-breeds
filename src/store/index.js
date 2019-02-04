import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    mainPageDogs: []
  },
  // getter: {
  //   titleCount: state => state.navbarTitle.length
  // },
  mutations: {
  //   changeTitle: (state, payload) => (state.navbarTitle = payload),
  //   changeNavMain: (state, payload) => (state.navbarMain = payload),
    setMainPageDogs: (state, payload) => (
      state.mainPageDogs = state.mainPageDogs.concat(payload)
    )
  },
  actions: {
    getRandomDogsPictures (context) {
      axios
        .get('https://dog.ceo/api/breeds/image/random/20')
        .then(response => response.data)
        .then(response => context.commit('setMainPageDogs', response.message))
        .catch(error => console.error(error))
    }
  }
})

export default store
