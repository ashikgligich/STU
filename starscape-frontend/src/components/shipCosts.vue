<script setup>
import { shipStore } from '../stores/store.js'

const store = shipStore()
let ship = store.currentShip
//console.log(store.currentShip)
let resources = [
  ['Korrelite', ship.korrelite],
  ['Reknite', ship.reknite],
  ['Gellium', ship.gellium],
  ['Axnit', ship.axnit],
  ['Narcor', ship.blucor],
  ['Red Narcor', ship.redcor],
  ['Vexnium', ship.vexnium],
  ['Blueprint', ship.bp],
  ['Drone Cores', ship.dc],
  ['Powercells', ship.pc]
]
console.log(resources)
</script>

<template>
  <div>
    <h2>Costs:</h2>
    <div v-for="resource in resources" :key="resource">
      <h4 v-if="resource[1] >= 0">{{ resource[0] }}: {{ resource[1] }}</h4>
    </div>
  </div>
</template>
