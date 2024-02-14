<template>
  <div>
    <div class="about" v-if="gotData">
      <h1>This is an about page</h1>
      <label for="cars">Choose a car:</label>
      <select name v-for="ship in ships.value" :key="ship">
        <option value="ship.ship">{{ ship.ship }}</option>
      </select>
      <h4></h4>
    </div>
    <main>
      <MainModel />
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
import MainModel from '../components/MainModel.vue'

let ships = ref()
let gotData = ref(false)

async function fetchShips() {
  let url = 'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
  const response = await fetch(url)
  const array = await response.json()
  ships.value = array
  gotData.value = true
  console.log(array)
}
onMounted(() => {
  fetchShips()
})
</script>
