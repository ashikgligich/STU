<script setup>
import { onMounted } from 'vue'
import { shipStore } from '../stores/store.js'

const store = shipStore()
let ship = store.currentShip
console.log(store.currentShip)
console.log(ship)
</script>

<template>
  <div>
    <div>
      <h3>General Overview:</h3>
      <h4>Name: {{ ship.ship }}</h4>
      <h4>Class: {{ ship.class }}</h4>
      <h4>Line: {{ ship.line }}</h4>
      <h4>Faction: {{ ship.faction }}</h4>
    </div>
    <div>
      <h3>Ship Combat Stats:</h3>
      <h4>Small Turret Slots: {{ ship.s }}</h4>
      <h4>Medium Turret Slots: {{ ship.m }}</h4>
      <h4>Point Defense Turret Slots: {{ ship.pdt }}</h4>
      <h4>Shield: {{ ship.shield }}</h4>
      <h4>Shield Regen: {{ ship.shieldRegen }}/s</h4>
      <h4>Shield Deflection: {{ ship.deflection }}</h4>
      <h4>Hull: {{ ship.hull }}</h4>
      <h4>Hull Regen: {{ ship.hullRegen }}/s</h4>
      <h4>Hull Armor: {{ ship.armor }}</h4>
      <h4>Energy: {{ ship.energy }}</h4>
      <h4>Energy Regen: {{ ship.energyRegen }}/s</h4>
      <h4>Signal Range: {{ ship.signalRange }}</h4>
      <h4>Sensor Strength: {{ ship.sensorStrength }}</h4>
    </div>
    <div>
      <h3>Ship Mobility Stats:</h3>
      <h4>Speed: {{ ship.speed }}</h4>
      <h4>Accelleration: {{ ship.accelleration }}/s</h4>
      <h4>Agility: {{ ship.agility }}</h4>
      <h4>Warp Speed: {{ ship.warpSpeed }}/s</h4>
      <h4>Charge Time: {{ ship.chargeTime }}s</h4>
      <h4>Cargo Slots: {{ ship.cargo }} Slots</h4>
    </div>
    <div>
      <h3>Rigs and Modules:</h3>
      <h4>Weapon Rigs: {{ ship.wep }} Slots</h4>
      <h4>Defense Rigs: {{ ship.def }} Slots</h4>
      <h4>Engine Rigs: {{ ship.eng }} Slots</h4>
      <h4>Reactor Rigs: {{ ship.rct }} Slots</h4>
      <h4>Subsystems: {{ ship.subsystems }} Slots</h4>
    </div>
    <div v-if="ship.special">
      <h4>Special Effects:</h4>
      <h5>{{ ship.special }}</h5>
    </div>
  </div>
</template>
