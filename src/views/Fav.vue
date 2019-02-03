<template>
  <div class="fav">
    <h1>Favourites</h1>
    <Breed :dogData="favouriteDogs" />
  </div>
</template>

<script>
import Breed from '@/components/Breed.vue'

export default {
  name: 'Fav',
  components: {
    Breed
  },
  computed: {
    favouriteDogs: function () {
      return localStorage.getItem('fav') ? JSON.parse(localStorage.getItem('fav')) : []
    }
  }
}
</script>
