<script setup>
import ModuleComponent from './ModuleComponent.vue'
import { shipStore } from '../stores/store.js'
import { ref, onMounted } from 'vue'

const store = shipStore()
const weaponRigs = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data/weapon_rigs.json')
    if (!response.ok) {
      throw new Error('Failed to load weapon_rigs.json')
    }
    weaponRigs.value = await response.json()
    console.log('Loaded weapon rigs:', weaponRigs.value)
  } catch (error) {
    console.error('Error loading weapon rigs:', error)
  }
})
</script>

<template>
  <div>
    <div>
      <h2>Weapon Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.weaponRig"
        :key="n"
        :moduleType="'Weapon'"
        :number="n"
      />
    </div>
    <div>
      <h2>Defense Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.defenseRig"
        :key="n"
        :moduleType="'Defense'"
        :number="n"
      />
    </div>
    <div>
      <h2>Engine Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.engineRig"
        :key="n"
        :moduleType="'Engine'"
        :number="n"
      />
    </div>
    <div>
      <h2>Reactor Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.reactorRig"
        :key="n"
        :moduleType="'Reactor'"
        :number="n"
      />
    </div>
  </div>
</template>
