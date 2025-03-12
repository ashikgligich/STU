<script setup>
import { defineProps, ref } from 'vue'
import { shipStore } from '@/stores/store'
const store = shipStore()
const props = defineProps(['selectableModules', 'number', 'moduleType'])
const module = ref()
const previousModule = ref()
const match = ref(module.value.effect.match(/^([+-]?\d+)([+\-*])(\d+)$/)) //module prop
const operand = ref(parseInt(match.value[1], 10))
const operator = ref(match.value[2])

const moduleEffect = () => {
  const filter = (value, key) => key === module.value.effectTarget //module prop
  for (let key in store.currentShip) {
    if (filter(store.currentShip[key], key)) {
      switch (operator.value) {
        case '+':
          store.currentShip[key] = store.currentShip[key] + operand.value
          break
        case '-':
          store.currentShip[key] = store.currentShip[key] - operand.value
          break
        case '*':
          store.currentShip[key] = store.currentShip[key] * operand.value
          break
      }
    }
  }

  previousModule.value = module.value
}

const undoModuleEffect = () => {
  const filter = (value, key) => key === previousModule.value.effectTarget //module prop
  for (let key in store.currentShip) {
    if (filter(store.currentShip[key], key)) {
      switch (operator.value) {
        case '+':
          store.currentShip[key] = store.currentShip[key] - operand.value
          break
        case '-':
          store.currentShip[key] = store.currentShip[key] + operand.value
          break
        case '*':
          store.currentShip[key] = store.currentShip[key] / operand.value
          break
      }
    }
  }
}

const cycleModules = () => {
  previousModule.value ? undoModuleEffect() : console.log('No previous module')
  moduleEffect()
}
</script>

<template>
  <div>
    <h2>{{ props.moduleType }} Module {{ props.number }}</h2>
    <div>
      <select
        v-model="module"
        v-for="mod in props.selectableModules"
        :key="mod.name"
        @change="cycleModules"
      >
        <option :value="mod">{{ mod.name }}</option>
      </select>
    </div>
  </div>
</template>
