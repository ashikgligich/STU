<template>
  <div class="container mx-auto" v-if="shipStore.currentShip">
    <h1 class="text-3xl font-extrabold underline mb-4">{{ shipStore.currentShip.ship }}</h1>
    <main class="flex flex-col gap-4">
      <ShipCosts />
      <ShipMods />
      <ShipStats />
    </main>
    <footer>
      <p class="font-bold">evil footer</p>
      <p>this is the project of all time</p>
      <p>layout is probably held together with an ounce of watery elmer's glue</p>
    </footer>
  </div>
</template>

<script setup>
import ShipCosts from '@/components/ShipCosts.vue'
import ShipStats from '@/components/ShipStats.vue'
import ShipMods from '@/components/ShipMods.vue'
import { useShipStore } from '@/stores/shipStore'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, toRaw } from 'vue'
const shipStore = useShipStore()
const route = useRoute()
const router = useRouter()

const id = Number(route.params.id)
onMounted(async () => {
  try {
    if (isNaN(id)) throw new Error('that is not an id')

    await shipStore.fetchShips()

    const ship = shipStore.ships.find((ship) => ship.id === id)

    if (!ship) throw new Error(`no ship found with id ${id}`)

    // toRaw, otherwise both will point to the same obj
    shipStore.$patch({ currentShip: ship, baseCurrentShipStats: structuredClone(toRaw(ship)) })
  } catch (error) {
    alert(error)
    router.push('/')
  }
})
</script>

<style scoped></style>
