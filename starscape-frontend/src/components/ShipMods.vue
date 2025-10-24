<template>
  <div>
    <h2 class="category-header">Rigs:</h2>
    <div class="flex justify-between" v-if="ship">
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Weapon Rigs:</h3>
        <ModuleComponent
          v-for="i in ship.weaponRig"
          :key="i"
          :moduleType="'Weapon'"
          :number="i"
          :selectableModules="shipStore.weaponRigs"
        />
        <span class="text-white/60" v-if="ship.weaponRig <= 0">
          {{
            Math.random() < 0.5
              ? "This ship is an expert in unarmed combat, and doesn't need weapons."
              : 'This ship is too pacifist for weapons.'
          }}
        </span>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Defense Rigs:</h3>
        <ModuleComponent
          v-for="i in ship.defenseRig"
          :key="i"
          :moduleType="'Defense'"
          :number="i"
          :selectableModules="shipStore.defenseRigs"
        />
        <span class="text-white/60" v-if="ship.defenseRig <= 0">
          {{
            Math.random() < 0.5
              ? "This ship doesn't need defense, as it will simply just not get hit."
              : 'This ship has glass bones and paper skin.'
          }}
        </span>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Engine Rigs:</h3>
        <ModuleComponent
          v-for="i in ship.engineRig"
          :key="i"
          :moduleType="'Engine'"
          :number="i"
          :selectableModules="shipStore.engineRigs"
        />
        <span class="text-white/60" v-if="ship.engineRig <= 0">
          {{
            Math.random() < 0.5
              ? `This ship "ain't got no gas in it".`
              : 'This ship believes in the one true method of transportation — walking.'
          }}
        </span>
      </div>
      <div class="max-w-80 w-full">
        <h3 class="font-semibold text-lg">Reactor Rigs:</h3>
        <ModuleComponent
          v-for="i in ship.reactorRig"
          :key="i"
          :moduleType="'Reactor'"
          :number="i"
          :selectableModules="shipStore.reactorRigs"
        />
        <span class="text-white/60" v-if="ship.reactorRig <= 0">
          {{
            Math.random() < 0.5
              ? 'This ship is prohibited from owning weapons of mass destruction due to a history of violence.'
              : 'This ship runs entirely on AA batteries.'
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModuleComponent from './ModuleComponent.vue'

import { useShipStore } from '../stores/shipStore.js'
import { storeToRefs } from 'pinia'

const shipStore = useShipStore()
const ship = storeToRefs(shipStore).currentShip
</script>112121111
