<template>
  <div>
    <div>
      <div class="flex gap-2 mb-2 items-baseline">
        <span class="text-lg">Filters:</span>
        <div v-for="shipClass in shipClasses" :key="shipClass">
          <button @click="selectClass(shipClass)">{{ shipClass }}</button>
        </div>
      </div>
    </div>
    <main>
      <div class="flex flex-wrap gap-2" v-if="ships.length">
        <RouterLink
          class="border-white border-2"
          v-for="ship in shipStore.shipFilter.length ? shipStore.shipFilter : ships"
          :key="ship.id"
          :to="`/stats/${ship.id}`"
        >
          <img class="w-40" :src="ship.picture" :alt="ship.ship" />
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useShipStore } from '../stores/shipStore.js'
import { storeToRefs } from 'pinia'

const shipStore = useShipStore()
const { ships } = storeToRefs(shipStore)
const filterOn = ref(false)
const shipClasses = [
  'Destroyer',
  'Frigate',
  'Corvette',
  'Fighter',
  'Interceptor',
  'Hauler',
  'Miner',
  'All'
]

function selectClass(shipClass) {
  if (shipClass === 'All') {
    filterOn.value = false
    shipStore.$patch({ shipFilter: [] })
    return
  }

  const tempShips = []
  ships.value.forEach((ship) => {
    if (ship.class === shipClass) {
      tempShips.push(ship)
    }
  })
  filterOn.value = true
  shipStore.$patch({ shipFilter: tempShips })
}

onMounted(shipStore.fetchShips)
</script>

<style scoped></style>
