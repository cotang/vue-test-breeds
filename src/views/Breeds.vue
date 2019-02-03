<template>
  <div class="breeds">
    <h1>Chosen breed - {{this.$route.params.id}}</h1>
    <Breed :dogData="breedData" />
  </div>
</template>

<script>
import axios from 'axios'
import Breed from '@/components/Breed.vue'

export default {
  name: 'Breeds',
  data () {
    return {
      breedData: []
    }
  },
  components: {
    Breed
  },
  mounted () {
    this.getBreedData()
  },
  methods: {
    getBreedData () {
      axios
        .get('https://dog.ceo/api/breed/' + this.$route.params.id + '/images')
        .then(response => response.data)
        .then(response => (
          this.breedData = response.message
        ))
        .catch(error => console.error(error))
    }
  },
  watch: {
    '$route.params.id': function () {
      this.getBreedData()
    }
  }
}
</script>
