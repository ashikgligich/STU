<script setup>
import ModuleComponent from './ModuleComponent.vue'
import { shipStore } from '../stores/store.js'
import { ref, onMounted } from 'vue'
import { reactive } from 'vue'

const store = shipStore()


const rigs = reactive({
  weapon: [],
  defense: [],
  engine: [],
  reactor: []
})

async function fetchData(who) {
  const response = await fetch(`/data/${who}_rigs.json`)
  if (!response.ok) throw new Error(`Failed to load ${who}_rigs.json`)
  return (await response.json())[`${who}_rigs`]
}
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
        :selectableModules="'rigs.weapon.moduleName'"

      />
    </div>
    <div>
      <h2>Defense Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.defenseRig"
        :key="n"
        :moduleType="'Defense'"
        :number="n"
        :selectableModules="'rigs.defense'"
      />
    </div>
    <div>
      <h2>Engine Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.engineRig"
        :key="n"
        :moduleType="'Engine'"
        :number="n"
        :selectableModules="'rigs.engine'"
      />
    </div>
    <div>
      <h2>Reactor Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.reactorRig"
        :key="n"
        :moduleType="'Reactor'"
        :number="n"
        :selectableModules="'rigs.reactor'"
      />
    </div>
  </div>
</template>
