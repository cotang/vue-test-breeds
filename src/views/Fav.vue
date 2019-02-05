<template>
  <div class="fav">
    <h1>Favourites</h1>
    <Breed :dogData="$store.state.favouriteDogsPictures" />
  </div>
</template>

<script>
import Breed from '@/components/Breed.vue'

export default {
  name: 'Fav',
  components: {
    Breed
  }
}
</script>
