<template>
  <div class="main">
    <h1>Main page</h1>
    <BreedFilter :breeds="loadedDogsBreeds" v-model="chosenBreed" />
    {{chosenBreed}}
    <Breed :dogData="filteredDoglist" />
  </div>
</template>

<script>
import Breed from '@/components/Breed.vue'
import BreedFilter from '@/components/BreedFilter.vue'
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      chosenBreed: null,
    }
  },
  components: {
    Breed,
    BreedFilter
  },
  computed: {
    doglist() {
      return this.$store.state.mainPageDogs
    },
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
    this.$store.dispatch('getRandomDogsPictures')
    this.scroll(this.doglist)
  },
  methods: {
    scroll (person) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.$store.dispatch('getRandomDogsPictures')
        }
      }
    }
  }
}
</script>
