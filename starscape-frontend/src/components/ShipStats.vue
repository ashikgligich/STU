<template>
  <div>
    <h2 class="category-header">Stats:</h2>
    <div class="flex justify-between w-full">
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">General Overview:</h3>
        <div v-for="stat in shipOverview" :key="stat">
          <span>{{ stat[0] }}: {{ stat[1] }}</span>
        </div>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Combat Stats:</h3>
        <div v-for="stat in shipCombatStats" :key="stat">
          <span v-if="!stat[0].includes('Regeneration')">{{ stat[0] }}: {{ stat[1] }}</span>
          <span v-if="stat[0].includes('Regeneration')">{{ stat[0] }}: {{ stat[1] }}/s</span>
        </div>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Ship Mobility Stats:</h3>
        <div v-for="stat in shipMobilityStats" :key="stat">
          <span
            v-if="
              !stat[0].includes('Acceleration') &&
              !stat[0].includes('Warp Speed') &&
              !stat[0].includes('Charge Time') &&
              !stat[0].includes('Slots')
            "
          >
            {{ stat[0] }}: {{ stat[1] }}
          </span>
          <span v-if="stat[0].includes('Acceleration') || stat[0].includes('Warp Speed')">
            {{ stat[0] }}: {{ stat[1] }}/s
          </span>
          <span v-if="stat[0].includes('Slots')">{{ stat[0] }}: {{ stat[1] }} Slots</span>
        </div>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Rigs and Modules:</h3>
        <div v-for="modules in rigsNmodules" :key="modules">
          <span>{{ modules[0] }}: {{ modules[1] }} slot{{ modules[1] === 1 ? '' : 's' }}</span>
        </div>
      </div>
      <!-- <div v-if="ship.specialEffect">
        <h2 class="category-header">Special Effects:</h2>
        <span>{{ ship.special }}</span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useShipStore } from '../stores/shipStore.js'
import { storeToRefs } from 'pinia'

const shipStore = useShipStore()
const ship = storeToRefs(shipStore).currentShip

import { computed } from 'vue'

const shipOverview = computed(() => [
  ['Name', ship.value.ship],
  ['Class', ship.value.class],
  ['Line', ship.value.line],
  ['Faction', ship.value.faction]
])

const shipCombatStats = computed(() => [
  ['Small Turret Slots', ship.value.small],
  ['Medium Turret Slots', ship.value.medium],
  ['Point Defense Slots', ship.value.pointDefense],
  ['Shield', ship.value.shield],
  ['Shield Regeneration', ship.value.shieldRegen],
  ['Shield Deflection', ship.value.deflection],
  ['Hull', ship.value.hull],
  ['Hull Regeneration', ship.value.hullRegen],
  ['Hull Armor', ship.value.armor],
  ['Energy', ship.value.energy],
  ['Energy Regeneration', ship.value.energyRegen],
  ['Signal Range', ship.value.signalRange],
  ['Sensor Strength', ship.value.sensorStrength]
])

const shipMobilityStats = computed(() => [
  ['Speed', ship.value.speed],
  ['Acceleration', ship.value.acceleration],
  ['Agility', ship.value.agility],
  ['Warp Speed', ship.value.warpSpeed],
  ['Warp Charge Time', ship.value.chargeTime],
  ['Cargo Slots', ship.value.cargo]
])

const rigsNmodules = computed(() => [
  ['Weapon Rigs', ship.value.weaponRig],
  ['Defense Rigs', ship.value.defenseRig],
  ['Engine Rigs', ship.value.engineRig],
  ['Reactor Rigs', ship.value.reactorRig],
  ['Subsystems', ship.value.subsystems]
])
</script>

<style scoped></style>
