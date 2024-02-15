<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
      <div v-if="gotData">
        <div v-for="ship in ships.ships" :key="ship.id">
          <button @click="selectShip(ship)">{{ ship.ship }}</button>
        </div>
      </div>
    </div>
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
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
let ships = ref()
let gotData = ref(false)
const router = useRouter()

async function fetchShips() {
  const response = await fetch(
    'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
  )
  const array = await response.json()
  ships.value = array
  gotData.value = true
  console.log(array)
}

function selectShip(ship) {
  store.$patch({ currentShip: ship })
  console.log(store.currentShip)
  router.push('/stats')
}

onMounted(() => {
  fetchShips()
  console.log(ships)
})
</script>
