<template>
  <div class="breedselect">
    Породы -
    <select v-model="value" v-on:change="changeRoute($event.target.value)">
      <option v-for="breed in breedsFormatted" :key="breed">{{breed}}</option>
    </select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BreedSelect',
  data () {
    return {
      value: '',
      breedslist: []
    }
  },
  mounted () {
    this.getBreeds()
  },
  computed: {
    breedsFormatted: function () {
      let breeds = this.breedslist
      let breedsArray = []
      for (let breed in breeds) {
        if (breeds[breed].length) {
          breeds[breed].forEach(subbreed => {
            breedsArray.push(breed + '-' + subbreed)
          })
        } else {
          breedsArray.push(breed)
        }
      }
      return breedsArray
    }
  },
  methods: {
    getBreeds () {
      axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => response.data)
        .then(response => (
          this.breedslist = response.message
        ))
        .catch(error => console.error(error))
    },
    changeRoute (val) {
      this.$router.push({ path: '/' + val })
      this.value = ''
    }
  }
}
</script>

<style>
.breedselect{
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
