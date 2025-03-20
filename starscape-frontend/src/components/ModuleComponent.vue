<script setup>
import { defineProps, ref } from 'vue'
import { shipStore } from '@/stores/store'
const store = shipStore()
const props = defineProps(['selectableModules', 'number', 'moduleType'])
const shipModule = ref()
const previousModule = ref()
const isDupe = ref(false)

const moduleEffect = (factor) => {
  let match = shipModule.value.effect.match(/^([+-]?\d+)([+\-*])(\d+)$/)
  let operand = parseInt(match[1], 10)
  let operator = match[2]
  shipModule.value.effectTarget.forEach((effect) => {
    const filter = (value, key) => key === effect
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator) {
          case '+':
            store.currentShip[key] = store.currentShip[key] + operand * factor
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] - operand * factor
            break
          case '*':
            store.currentShip[key] = store.currentShip[key] * operand * factor
            break
        }
      }
    }
  })

  previousModule.value = shipModule.value
}

const undoModuleEffect = (factor, name) => {
  let match
  store.tempModuleSelection === name
    ? (match = shipModule.value.effect.match(/^([+-]?\d+)([+\-*])(\d+)$/))
    : (match = previousModule.value.effect.match(/^([+-]?\d+)([+\-*])(\d+)$/))
  let operand = parseInt(match[1], 10)
  let operator = match[2]
  shipModule.value.effectTarget.forEach((effect) => {
    const filter = (value, key) => key === effect //module prop
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator) {
          case '+':
            store.currentShip[key] = store.currentShip[key] - operand * factor
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] + operand * factor
            break
          case '*':
            store.currentShip[key] = (store.currentShip[key] / operand) * factor
            break
        }
      }
    }
  })
}

const cycleModules = (name) => {
  if (store.tempModuleSelection === name) {
    undoModuleEffect(1, name)
    moduleEffect(2)
    return
  }
  previousModule.value ? (isDupe.value ? undoModuleEffect(2) : undoModuleEffect(1)) : moduleEffect()
  store.tempModuleSelection = name
}
</script>

<template>
  <div>
    <h2>{{ props.moduleType }} Module {{ props.number }}</h2>
    <div>
      <select
        v-model="shipModule"
        v-for="mod in props.selectableModules"
        :key="mod.name"
        @change="cycleModules(mod.name)"
      >
        <option :value="mod">{{ mod.name }}</option>
      </select>
    </div>
  </div>
</template>
