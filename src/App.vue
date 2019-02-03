<template>
  <div id="app">

    <div id="nav">

      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <span class="navbar-brand">Breeds</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" class="nav-item" to="/" exact>
              <a class="nav-link">Главная страница</a>
            </router-link>

            <li class="nav-item">
              <BreedSelect />
            </li>

            <router-link tag="li" class="nav-item" to="/fav">
              <a class="nav-link">Избранное</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <main role="main" class="container">
        <router-view/>
      </main>
    </div>

  </div>
</template>

<script>
import BreedSelect from '@/components/BreedSelect.vue'
export default {
  name: 'App',
  components: {
    BreedSelect
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
