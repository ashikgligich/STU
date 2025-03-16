<script setup>
import shipStore from '../stores/store.js'
const store = shipStore()
</script>

<template>
  <div>
    <h4>Name: {{ store.currentTurret.turrets }}</h4>
    <h4>Type: {{ store.currentTurret.type }} turret</h4>
    <h4>Damage per second: {{ store.currentTurret.dps }}/s</h4>
    <h4>Damage per shot: {{ store.currentTurret.dpShot }}/s</h4>
    <div v-if="store.currentTurret.shield !== 1">
      <h4>Multipliers:</h4>
      <h5>Shield: x{{ store.currentTurret.shield }}</h5>
      <h5>Hull: x{{ store.currentTurret.hull }}</h5>
    </div>
  </div>
</template>
