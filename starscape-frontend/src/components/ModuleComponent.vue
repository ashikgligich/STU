<script setup>
import { defineProps, ref } from 'vue'
import { shipStore } from '@/stores/store'
const store = shipStore()
const props = defineProps(['selectableModules', 'number', 'moduleType'])
const shipModule = ref()
const previousModule = ref()
const match = ref(shipModule.value.effect.match(/^([+-]?\d+)([+\-*])(\d+)$/)) //module prop
const operand = ref(parseInt(match.value[1], 10))
const operator = ref(match.value[2])
const isDupe = ref(false)

const moduleEffect = (factor) => {
  shipModule.value.effectTarget.forEach((effect) => {
    const filter = (value, key) => key === effect
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator.value) {
          case '+':
            store.currentShip[key] = store.currentShip[key] + operand.value * factor
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] - operand.value * factor
            break
          case '*':
            store.currentShip[key] = store.currentShip[key] * operand.value * factor
            break
        }
      }
    }
  })

  previousModule.value = shipModule.value
}

const undoModuleEffect = (factor) => {
  shipModule.value.effectTarget.forEach((effect) => {
    const filter = (value, key) => key === effect //module prop
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator.value) {
          case '+':
            store.currentShip[key] = store.currentShip[key] - operand.value * factor
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] + operand.value * factor
            break
          case '*':
            store.currentShip[key] = (store.currentShip[key] / operand.value) * factor
            break
        }
      }
    }
  })
}

const cycleModules = (name) => {
  if (store.tempModuleSelection === name) {
    undoModuleEffect(1)
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
