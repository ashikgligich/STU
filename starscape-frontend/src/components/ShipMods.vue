<script setup>
import ModuleComponent from './ModuleComponent.vue'
import shipStore from '../stores/store.js'
const store = shipStore()
</script>

<template>
  <div>
    <div>
      <h2>Weapon Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.wep"
        :key="n"
        :moduleType="'Weapon'"
        :number="n"
      />
    </div>
    <div>
      <h2>Defense Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.def"
        :key="n"
        :moduleType="'Defense'"
        :number="n"
      />
    </div>
    <div>
      <h2>Engine Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.eng"
        :key="n"
        :moduleType="'Engine'"
        :number="n"
      />
    </div>
    <div>
      <h2>Reactor Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.rct"
        :key="n"
        :moduleType="'Reactor'"
        :number="n"
      />
    </div>
  </div>
</template>
