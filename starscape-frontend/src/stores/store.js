import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const shipStore = defineStore('shipStore', () => {
  const currentShip = ref() // use for selecting ships
  const baseCurrentShipStats = ref()
  const currentTurret = ref() // use for selecting turrets
  const currentModule = ref() // use for selecting modules
  const currentTurretLoadout = ref([]) //ship customization for turrets
  const currentModuleLoadout = ref([]) // ship customization for modules
  const currentRigLoadout = ref([]) // ship customization for rigs
  const shipFilter = ref([]) //throw ship classes and stuff in here

  return {
    currentShip,
    baseCurrentShipStats,
    currentTurret,
    currentModule,
    currentModuleLoadout,
    currentTurretLoadout,
    currentRigLoadout,
    shipFilter
  }
})
