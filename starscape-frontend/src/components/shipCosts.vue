<script setup>
import { shipStore } from '../stores/store.js'

const store = shipStore()
let ship = store.currentShip
//console.log(store.currentShip)
let resources = [
  { resource: ['Korrelite', ship.korrelite] },
  { resource: ['Reknite', ship.reknite] },
  { resource: ['Gellium', ship.gellium] },
  { resource: ['Axnit', ship.axnit] },
  { resource: ['Narcor', ship.blucor] },
  { resource: ['Red Narcor', ship.redcor] },
  { resource: ['Vexnium', ship.vexnium] },
  { resource: ['Blueprint', ship.bp] },
  { resource: ['Drone Cores', ship.dc] },
  { resource: ['Powercells', ship.pc] }
]
console.log(resources)
</script>

<template>
  <div>
    <h2>Costs:</h2>
    <div v-for="resource in resources" :key="resource">
      <h4 v-if="resource.resource[1] >= 0">
        {{ resource.resource[0] }}: {{ resource.resource[1] }}
      </h4>
    </div>
  </div>
</template>
