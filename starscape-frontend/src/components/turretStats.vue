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
    <h4>Damage per second: {{ turret.dps }}/s</h4>
    <h4>Damage per shot: {{ turret.dpShot }}/s</h4>
    <div v-if="turret.shield !== 1">
      <h4>Multipliers:</h4>
      <h5>Shield: x{{ turret.shield }}</h5>
      <h5>Hull: x{{ turret.hull }}</h5>
    </div>
  </div>
</template>
