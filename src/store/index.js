import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    mainPageDogsPictures: [],
    breedPictures: [],
    favouriteDogsPictures: JSON.parse(localStorage.getItem('fav')) || []
  },
  // getter: {
  //   titleCount: state => state.navbarTitle.length
  // },
  mutations: {
    setMainPageDogsPictures: (state, payload) => (
      state.mainPageDogsPictures = state.mainPageDogsPictures.concat(payload)
    ),
    setBreedPictures: (state, payload) => (
      state.breedPictures = payload
    ),
    addFavouritePicture: (state, pic) => {
      state.favouriteDogsPictures.push(pic)
    },
    removeFavouritePicture: (state, pic) => {
      state.favouriteDogsPictures.splice(state.favouriteDogsPictures.indexOf(pic), 1)
    }
  },
  actions: {
    getRandomDogsPictures (context) {
      axios
        .get('https://dog.ceo/api/breeds/image/random/20')
        .then(response => response.data)
        .then(response => context.commit('setMainPageDogsPictures', response.message))
        .catch(error => console.error(error))
    },
    getBreedPictures (context, id) {
      axios
        .get('https://dog.ceo/api/breed/' + id + '/images')
        .then(response => response.data)
        .then(response => context.commit('setBreedPictures', response.message))
        .catch(error => console.error(error))
    },
    toggleFav: function (context, pic) {
      if (context.state.favouriteDogsPictures.indexOf(pic) === -1) {
        context.commit('addFavouritePicture', pic)
      } else {
        context.commit('removeFavouritePicture', pic)
      }
      localStorage.setItem('fav', JSON.stringify(context.state.favouriteDogsPictures))
    }
  }
})

export default store
