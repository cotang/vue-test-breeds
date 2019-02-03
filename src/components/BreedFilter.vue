<template>
  <div class="breedfilter">
    <select :value="value" @input="changeBreed($event.target.value)">
      <option value=""></option>
      <option v-for="breed in breeds" :key="breed">{{breed}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BreedFilter',
  props: {
    breeds: Array,
    value: String
  },
  methods: {
    changeBreed (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style>
.breedfilter{
  margin-bottom: 20px;
}
</style>
