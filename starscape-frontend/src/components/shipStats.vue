<script setup>
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
const router = useRouter()
let ship = store.currentShip
console.log(store.currentShip)
console.log(ship)

let shipOverview = [
  { stat: ['Name', ship.ship] },
  { stat: ['Class', ship.class] },
  { stat: ['Line', ship.line] },
  { stat: ['Faction', ship.faction] }
]

let shipCombatStats = [
  { stat: ['Small Turret Slots', ship.s] },
  { stat: ['Medium Turret Slots', ship.m] },
  { stat: ['Point Defense Slots', ship.pdt] },
  { stat: ['Shield', ship.shield] },
  { stat: ['Shield Regen', ship.shieldRegen] },
  { stat: ['Shield Deflection', ship.deflection] },
  { stat: ['Hull', ship.hull] },
  { stat: ['Hull Regeneration', ship.hullRegen] },
  { stat: ['Hull Armor', ship.armor] },
  { stat: ['Energy', ship.energy] },
  { stat: ['Energy Regeneration', ship.energyRegen] },
  { stat: ['Signal Range', ship.signalRange] },
  { stat: ['Sensor Strength', ship.sensorStrength] }
]

let shipMobilityStats = [
  { stat: ['Speed', ship.speed] },
  { stat: ['Acceleration', ship.acceleration] },
  { stat: ['Agility', ship.agility] },
  { stat: ['Warp Speed', ship.warpSpeed] },
  { stat: ['Warp Charge Time', ship.chargeTime] },
  { stat: ['Cargo Slots', ship.cargo] }
]

function back() {
  router.push('/about')
}
</script>

<template>
  <div>
    <div>
      <button @click="back">Back:</button>
    </div>
    <div>
      <h3>General Overview:</h3>
      <div v-for="stat in shipOverview" :key="stat">
        <h4>{{ stat.stat[0] }}: {{ stat.stat[1] }}</h4>
      </div>
    </div>
    <div>
      <h3>Combat Stats:</h3>
      <div v-for="stat in shipCombatStats" :key="stat">
        <h4 v-if="!stat.stat[0].includes('Regeneration')">
          {{ stat.stat[0] }}: {{ stat.stat[1] }}
        </h4>
        <h4 v-if="stat.stat[0].includes('Regeneration')">
          {{ stat.stat[0] }}: {{ stat.stat[1] }}/s
        </h4>
      </div>
    </div>
    <div>
      <h3>Ship Mobility Stats:</h3>
      <div v-for="stat in shipMobilityStats" :key="stat">
        <h4
          v-if="
            !stat.stat[0].includes('Acceleration') &&
            !stat.stat[0].includes('Warp Speed') &&
            !stat.stat[0].includes('Charge Time') &&
            !stat.stat[0].includes('Slots')
          "
        >
          {{ stat.stat[0] }} : {{ stat.stat[1] }}
        </h4>
        <h4 v-if="stat.stat[0].includes('Acceleration') || stat.stat[0].includes('Warp Speed')">
          {{ stat.stat[0] }}: {{ stat.stat[1] }}/s
        </h4>
        <h4 v-if="stat.stat[0].includes('Slots')">{{ stat.stat[0] }}: {{ stat.stat[1] }} Slots</h4>
      </div>
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
