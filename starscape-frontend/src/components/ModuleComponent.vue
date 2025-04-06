<script setup>
import { defineProps, ref } from 'vue'
import { shipStore } from '@/stores/store'
const store = shipStore()
const props = defineProps(['selectableModules', 'number', 'moduleType'])
const shipModule = ref()
const previousModule = ref()

const moduleEffect = () => {
  shipModule.value.effect.forEach((effect) => {
    let match = effect.match(/^([\w\s]+)([+\-*])\s*(\d*\.?\d+)$/)
    let keyName = match[1].trim()
    let operator = match[2]
    let operand = parseFloat(match[3])
    const filter = (value, key) => key === keyName
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator) {
          case '+':
            store.currentShip[key] = store.currentShip[key] + operand
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] - operand
            break
          case '*':
            operand >= 1
              ? (store.currentShip[key] =
                  store.currentShip[key] + store.baseCurrentShipStats * operand)
              : (store.currentShip[key] =
                  store.currentShip[key] - store.baseCurrentShipStats * (1 - operand))
            break
        }
      }
    }
  })

  previousModule.value = shipModule.value
}

const undoModuleEffect = () => {
  shipModule.value.effectTarget.forEach((effect) => {
    let match = previousModule.value.effect.match(/^([\w\s]+)([+\-*])\s*(\d*\.?\d+)$/)
    let operator = match[2]
    let operand = parseFloat(match[3])
    const filter = (value, key) => key === effect //module prop
    for (let key in store.currentShip) {
      if (filter(store.currentShip[key], key)) {
        switch (operator) {
          case '+':
            store.currentShip[key] = store.currentShip[key] - operand
            break
          case '-':
            store.currentShip[key] = store.currentShip[key] + operand
            break
          case '*':
            operand >= 1
              ? (store.currentShip[key] =
                  store.currentShip[key] - store.baseCurrentShipStats * operand)
              : (store.currentShip[key] =
                  store.currentShip[key] + store.baseCurrentShipStats * (1 - operand))
            break
        }
      }
    }
  })
}

const cycleModules = () => {
  previousModule.value ? undoModuleEffect(1) : moduleEffect()
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
        @change="cycleModules()"
      >
        <option :value="mod">{{ mod.name }}</option>
      </select>
    </div>
  </div>
</template>
