<script setup>
import { useShipStore } from '../stores/shipStore.js'
const store = useShipStore()
</script>

<template>
  <div>
    <span>Name: {{ store.currentTurret.turrets }}</span>
    <span>Type: {{ store.currentTurret.type }} turret</span>
    <span>Damage per second: {{ store.currentTurret.dps }}/s</span>
    <span>Damage per shot: {{ store.currentTurret.dpShot }}/s</span>
    <div v-if="store.currentTurret.shield !== 1">
      <span>Multipliers:</span>
      <h5>Shield: x{{ store.currentTurret.shield }}</h5>
      <h5>Hull: x{{ store.currentTurret.hull }}</h5>
    </div>
  </div>
</template>
