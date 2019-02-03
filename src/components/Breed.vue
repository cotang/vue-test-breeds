<template>
  <div class="breed">
    <div v-for="dogSrc in dogData"
    :key="dogSrc"
    class="img-wrapper"
    :class="{active: isFavourite(dogSrc)}" >
      <img :src="dogSrc" alt="dog">
      <a
      href="#"
      class="img-icon"
      @click="addToFav(dogSrc)" >&#10084;</a>
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
      favArr: (localStorage.getItem('fav')) ? JSON.parse(localStorage.getItem('fav')) : []
    }
  },
  methods: {
    addToFav: function (url) {
      this.favArr.indexOf(url) === -1 ? this.favArr.push(url) : this.favArr.splice(this.favArr.indexOf(url), 1)
    },
    isFavourite: function (thisDog) {
      return this.favArr.some(elem => elem === thisDog)
    }
  },
  watch: {
    favArr: function () {
      localStorage.setItem('fav', JSON.stringify(this.favArr))
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
