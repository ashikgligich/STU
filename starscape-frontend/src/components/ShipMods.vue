<script setup>
import { ref, onMounted } from 'vue'
import ModuleComponent from './ModuleComponent.vue'
import { shipStore } from '../stores/store.js'
const store = shipStore()
const wepRig = ref(false)
const defRig = ref(false)
const engRig = ref(false)
const rctRig = ref(false)

onMounted(() => {
  setTimeout(() => {
    wepRig.value = true
  }, 10)
  setTimeout(() => {
    defRig.value = true
  }, 20)
  setTimeout(() => {
    engRig.value = true
  }, 30)
  setTimeout(() => {
    rctRig.value = true
  }, 40)
})
</script>

<template>
  <div>
    <div v-if="wepRig">
      <h2>Weapon Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.wep"
        :key="n"
        :moduleType="'Weapon'"
        :number="n"
      />
    </div>
    <div v-if="defRig">
      <h2>Defense Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.def"
        :key="n"
        :moduleType="'Defense'"
        :number="n"
      />
    </div>
    <div v-if="engRig">
      <h2>Engine Rigs:</h2>
      <ModuleComponent
        v-for="n in store.currentShip.eng"
        :key="n"
        :moduleType="'Engine'"
        :number="n"
      />
    </div>
    <div v-if="rctRig">
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
