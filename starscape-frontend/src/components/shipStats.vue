<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
const router = useRouter()

const shipOverview = ref([
  ['Name', store.currentShip.ship],
  ['Class', store.currentShip.class],
  ['Line', store.currentShip.line],
  ['Faction', store.currentShip.faction]
])

const shipCombatStats = ref([
  ['Small Turret Slots', store.currentShip.s],
  ['Medium Turret Slots', store.currentShip.m],
  ['Point Defense Slots', store.currentShip.pdt],
  ['Shield', store.currentShip.shield],
  ['Shield Regeneration', store.currentShip.shieldRegen],
  ['Shield Deflection', store.currentShip.deflection],
  ['Hull', store.currentShip.hull],
  ['Hull Regeneration', store.currentShip.hullRegen],
  ['Hull Armor', store.currentShip.armor],
  ['Energy', store.currentShip.energy],
  ['Energy Regeneration', store.currentShip.energyRegen],
  ['Signal Range', store.currentShip.signalRange],
  ['Sensor Strength', store.currentShip.sensorStrength]
])

const shipMobilityStats = ref([
  ['Speed', store.currentShip.speed],
  ['Acceleration', store.currentShip.acceleration],
  ['Agility', store.currentShip.agility],
  ['Warp Speed', store.currentShip.warpSpeed],
  ['Warp Charge Time', store.currentShip.chargeTime],
  ['Cargo Slots', store.currentShip.cargo]
])

const rigsNmodules = ref([
  ['Weapon Rigs', store.currentShip.wep],
  ['Defense Rigs', store.currentShip.def],
  ['Engine Rigs', store.currentShip.eng],
  ['Reactor Rigs', store.currentShip.rct],
  ['Subsystems', store.currentShip.subsystems]
])

function back() {
  router.push('/about')
}
</script>

<template>
  <body>
    <div>
      <div>
        <button @click="back">Back:</button>
      </div>
      <div>
        <h3>General Overview:</h3>
        <div v-for="stat in shipOverview" :key="stat">
          <h4>{{ stat[0] }}: {{ stat[1] }}</h4>
        </div>
      </div>
      <div>
        <h3>Combat Stats:</h3>
        <div v-for="stat in shipCombatStats" :key="stat">
          <h4 v-if="!stat[0].includes('Regeneration')">{{ stat[0] }}: {{ stat[1] }}</h4>
          <h4 v-if="stat[0].includes('Regeneration')">{{ stat[0] }}: {{ stat[1] }}/s</h4>
        </div>
      </div>
      <div>
        <h3>Ship Mobility Stats:</h3>
        <div v-for="stat in shipMobilityStats" :key="stat">
          <h4
            v-if="
              !stat[0].includes('Acceleration') &&
              !stat[0].includes('Warp Speed') &&
              !stat[0].includes('Charge Time') &&
              !stat[0].includes('Slots')
            "
          >
            {{ stat[0] }} : {{ stat[1] }}
          </h4>
          <h4 v-if="stat[0].includes('Acceleration') || stat[0].includes('Warp Speed')">
            {{ stat[0] }}: {{ stat[1] }}/s
          </h4>
          <h4 v-if="stat[0].includes('Slots')">{{ stat[0] }}: {{ stat[1] }} Slots</h4>
        </div>
      </div>
      <div>
        <h3>Rigs and Modules:</h3>
        <div v-for="modules in rigsNmodules" :key="modules">
          <h4>{{ modules[0] }}: {{ modules[1] }} Slots</h4>
        </div>
      </div>
      <div v-if="ship.special">
        <h3>Special Effects:</h3>
        <h4>{{ ship.special }}</h4>
      </div>
    </div>
  </body>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

body {
  background-color: black;
  width: 15vw;
}
</style>
