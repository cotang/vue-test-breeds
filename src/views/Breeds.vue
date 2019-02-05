<template>
  <div class="breeds">
    <h1>Chosen breed - {{this.$route.params.id}}</h1>
    <Breed :dogData="$store.state.breedPictures" />
  </div>
</template>

<script>
import Breed from '@/components/Breed.vue'

export default {
  name: 'Breeds',
  data () {
    return {
    }
  },
  components: {
    Breed
  },
  mounted () {
    this.$store.dispatch('getBreedPictures', this.$route.params.id)
  },
  watch: {
    '$route.params.id': function () {
      this.$store.dispatch('getBreedPictures', this.$route.params.id)
    }
  }
}
</script>
