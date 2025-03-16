<script setup>
import { ref } from 'vue'
import { shipStore } from '../stores/store.js'

const store = shipStore()
const resources = ref([
  ['Korrelite', store.currentShip.korrelite],
  ['Reknite', store.currentShip.reknite],
  ['Gellium', store.currentShip.gellium],
  ['Axnit', store.currentShip.axnit],
  ['Narcor', store.currentShip.blucor],
  ['Red Narcor', store.currentShip.redcor],
  ['Vexnium', store.currentShip.vexnium],
  ['Blueprint', store.currentShip.bp],
  ['Drone Cores', store.currentShip.dc],
  ['Powercells', store.currentShip.pc]
])
</script>

<template>
  <div>
    <h2>Costs:</h2>
    <div v-for="resource in resources" :key="resource">
      <h4 v-if="resource[1] >= 0">{{ resource[0] }}: {{ resource[1] }}</h4>
    </div>
  </div>
</template>
