<template>
  <div class="main">
    <h1>Main page</h1>
    <BreedFilter :breeds="loadedDogsBreeds" v-model="chosenBreed" />
    {{chosenBreed}}
    <Breed :dogData="filteredDoglist" />
  </div>
</template>

<script>
// @ is an alias to /src
import Breed from '@/components/Breed.vue'
import BreedFilter from '@/components/BreedFilter.vue'
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      chosenBreed: null,
      doglist: []
    }
  },
  components: {
    Breed,
    BreedFilter
  },
  computed: {
    loadedDogsBreeds: function () {
      let doglistArr = this.doglist.map(dogSrc => {
        return dogSrc.split('/')[dogSrc.split('/').length - 2]
      }).filter((v, i, a) => a.indexOf(v) === i)
      return doglistArr
    },
    filteredDoglist: function () {
      let filteredDoglist = this.doglist.filter(dogSrc => {
        return dogSrc.split('/')[dogSrc.split('/').length - 2] === this.chosenBreed
      })
      return this.chosenBreed ? filteredDoglist : this.doglist
    }
  },
  mounted () {
    this.getPictures()
    this.scroll(this.doglist)
  },
  methods: {
    getPictures () {
      axios
        .get('https://dog.ceo/api/breeds/image/random/20')
        .then(response => response.data)
        .then(response => (
          this.doglist = this.doglist.concat(response.message)
        ))
        .catch(error => console.error(error))
    },

    scroll (person) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.getPictures()
        }
      }
    }
  }
}
</script>
