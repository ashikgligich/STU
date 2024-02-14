import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const shipStore = defineStore('shipStore', () => {
  let currentShip = ref() // use for selecting ships
  let currentTurret = ref() // use for selecting turrets

  return { currentShip, currentTurret }
})
