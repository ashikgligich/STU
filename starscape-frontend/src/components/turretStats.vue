<script setup>
import { onMounted } from 'vue'
import shipStore from '../stores/store.js'

const store = shipStore()
let turret

onMounted(() => {
  turret = store.currentTurret
})
</script>

<template>
  <div>
    <h4>Name: {{ turret.turrets }}</h4>
    <h4>Type: {{ turret.type }} turret</h4>
    <h4>Damage per second: {{ turret.dps }}</h4>
    <h4>Damage per shot: {{ turret.dpShot }}</h4>
    <div v-if="turret.multiplier.shield !== 1">
      <h4>Multipliers:</h4>
      <h5>Shield: {{ turret.multiplier.shield }}</h5>
      <h5>Hull: {{ turret.multiplier.hull }}</h5>
    </div>
  </div>
</template>
