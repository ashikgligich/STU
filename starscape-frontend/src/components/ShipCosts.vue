<template>
  <div>
    <h2 class="category-header">Costs:</h2>
    <div v-if="ship">
      <div class="flex flex-wrap justify-between">
        <div class="" v-for="resource in resources" :key="resource">
          <span v-if="resource[1] >= 0">{{ resource[0] }}: {{ resource[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useShipStore } from '../stores/shipStore.js'
import { storeToRefs } from 'pinia'

const shipStore = useShipStore()
const ship = storeToRefs(shipStore).currentShip

const resources = computed(() => [
  ['Korrelite', ship.value.korrelite],
  ['Reknite', ship.value.reknite],
  ['Gellium', ship.value.gellium],
  ['Axnit', ship.value.axnit],
  ['Narcor', ship.value.blucor],
  ['Red Narcor', ship.value.redcor],
  ['Vexnium', ship.value.vexnium],
  ['Blueprint', ship.value.bp],
  ['Drone Cores', ship.value.dc],
  ['Powercells', ship.value.pc]
])
</script>

<style scoped></style>
