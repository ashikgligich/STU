<script setup>
import ModuleComponent from './ModuleComponent.vue'
import { shipStore } from '../stores/store.js'
import { ref, onMounted } from 'vue'

const store = shipStore()


import engineRigs from '../data/engineRigs.json'
import reactorRigs from '../reactorRigs.json'
import defenseRigs from '../defenseRigs.json'
import weaponRigs from '../weaponRigs.json'
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
        selectableModules=weaponRigs
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
