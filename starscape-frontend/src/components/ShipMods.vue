<script setup>
import { Scene } from 'three';
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
const router = useRouter()
let ship = store.currentShip
console.log(store.currentShip)
console.log(ship)

let shipOverview = [
  ['Name', ship.ship],

]

let shipCombatStats = [
  ['Small Turret Slots', ship.s],
  ['Medium Turret Slots', ship.m],
  ['Point Defense Slots', ship.pdt],
]
</script>

<template>
    <div>
      <div>
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
  </template>