<template>
  <div class="breed">
    <div v-for="(dogSrc, i) in dogData"
    :key="dogSrc+'-'+i"
    class="img-wrapper"
    :class="{active: isFavourite(dogSrc)}" >
      <img :src="dogSrc" alt="dog">
      <a
      href="#"
      class="img-icon"
      @click.prevent="addToFav(dogSrc)" >&#10084;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breed',
  props: {
    dogData: Array
  },
  data () {
    return {
    }
  },
  methods: {
    addToFav: function (url) {
      this.$store.dispatch('toggleFav', url)
    },
    isFavourite: function (thisDog) {
      return this.$store.state.favouriteDogsPictures.some(elem => elem === thisDog)
    }
  }
}
</script>

<style scoped>
.img-wrapper{
  display: inline-block;
  width: 200px;
  height: 200px;
  position: relative;
}
.img-wrapper img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-icon{
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
  font-size: 20px;
  margin: 0 0.5em;
  text-decoration: none;
  opacity: 0.5;
}
.img-wrapper.active .img-icon{
  opacity: 1;
}
.img-wrapper:hover .img-icon{
  opacity: 1;
}
</style>
