<script setup>
import weaponRigs from '@/data/weaponRigs.json'
import defenseRigs from '@/data/defenseRigs.json'
import engineRigs from '@/data/engineRigs.json'
import reactorRigs from '@/data/reactorRigs.json'
import ModuleComponent from './ModuleComponent.vue'
import { ref, onMounted } from 'vue'
import { shipStore } from '../stores/store.js'
const store = shipStore()
const rigs = ref([])

onMounted(async () => {
  try {
    ;[weaponRigs, defenseRigs, engineRigs, reactorRigs].forEach(async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      rigs.value.push(data)
    })
  } catch (error) {
    console.error('Error fetching ship data:', error)
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
        :selectableModules="rigs[0]"
      />
    </div>
    <div>
      <h2>Defense Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.defenseRig"
        :key="n"
        :moduleType="'Defense'"
        :number="n"
        :selectableModules="rigs[1]"
      />
    </div>
    <div>
      <h2>Engine Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.engineRig"
        :key="n"
        :moduleType="'Engine'"
        :number="n"
        :selectableModules="rigs[2]"
      />
    </div>
    <div>
      <h2>Reactor Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.reactorRig"
        :key="n"
        :moduleType="'Reactor'"
        :number="n"
        :selectableModules="rigs[3]"
      />
    </div>
  </div>
</template>
