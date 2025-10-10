<template>
  <div class="flex flex-col">
    <label :for="id">{{ props.moduconstype }} Module {{ props.number }}</label>
    <select class="border rounded p-1" :id="id" v-model="shipModule">
      <option v-for="mod in props.selectableModules" :key="mod.moduleName" :value="mod">
        {{ mod.moduleName }}
      </option>
    </select>
    <span v-if="shipModule && effectExists(shipModule.effect)" class="font-mono text-white/80">{{
      shipModule.effect
    }}</span>
  </div>
</template>

<script setup>
import { ref, useId, watch } from 'vue'
import { useShipStore } from '@/stores/shipStore'
const shipStore = useShipStore()
const shipModule = ref()
const props = defineProps(['selectableModules', 'number', 'moduconstype'])

const id = useId()

const round = (num) => parseFloat(num.toFixed(3))

const effectExists = (effect) => {
  return effect && effect !== '0'
}

const applyModuleEffect = (module) => {
  if (!effectExists(module.effect)) {
    console.warn(`no effect for module ${module.moduleName}`)
    return
  }

  const effects = module.effect.split(', ')

  for (const effect of effects) {
    const match = effect.match(/^([\w\s]+)([+\-*])\s*(\d*\.?\d+)$/)
    if (!match || match.length < 4) {
      console.error(`effect ${effect} is malformed`)
      continue
    }
    const key = match[1].trim()
    const operator = match[2]
    const operand = parseFloat(match[3])

    // whatever eslint. do your prototype thing. idc anymore
    if (!Object.prototype.hasOwnProperty.call(shipStore.currentShip, key)) {
      console.error('bad effect:', effect)
      continue
    }

    switch (operator) {
      case '+':
        shipStore.currentShip[key] = shipStore.currentShip[key] + operand
        break
      case '-':
        shipStore.currentShip[key] = shipStore.currentShip[key] - operand
        break
      case '*':
        // *1.1 = increase by 10% of base stats
        // *0.9 = decrease by 10% of base stats
        if (operand >= 1) {
          const change = shipStore.baseCurrentShipStats[key] * (operand - 1)
          shipStore.currentShip[key] += change
        } else {
          const change = shipStore.baseCurrentShipStats[key] * (1 - operand)
          shipStore.currentShip[key] -= change
        }

        break
    }

    shipStore.currentShip[key] = round(shipStore.currentShip[key])
  }
}

const undoModuleEffect = (module) => {
  if (!effectExists(module.effect)) {
    console.warn(`no effect for module ${module.moduleName}`)
    return
  }

  const effects = module.effect.split(', ')

  for (const effect of effects) {
    const match = effect.match(/^([\w\s]+)([+\-*])\s*(\d*\.?\d+)$/)
    if (!match || match.length < 4) {
      console.error(`effect ${effect} is malformed`)
      continue
    }
    const key = match[1].trim()
    const operator = match[2]
    const operand = parseFloat(match[3])

    if (!Object.prototype.hasOwnProperty.call(shipStore.currentShip, key)) {
      console.error('bad effect:', effect)
      continue
    }

    switch (operator) {
      case '+':
        shipStore.currentShip[key] = shipStore.currentShip[key] - operand
        break
      case '-':
        shipStore.currentShip[key] = shipStore.currentShip[key] + operand
        break
      case '*':
        // 1.1 => decrease by 10%
        // 0.9 => increase by 10%
        if (operand >= 1) {
          const change = shipStore.baseCurrentShipStats[key] * (operand - 1)
          shipStore.currentShip[key] -= change
        } else {
          const change = shipStore.baseCurrentShipStats[key] * (1 - operand)
          shipStore.currentShip[key] += change
        }

        break
    }

    shipStore.currentShip[key] = round(shipStore.currentShip[key])
  }
}

watch(shipModule, (newModule, oldModule) => {
  if (oldModule) undoModuleEffect(oldModule)
  applyModuleEffect(newModule)
})
</script>
