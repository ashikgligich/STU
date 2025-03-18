import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default const shipStore = defineStore('shipStore', () => {
  let currentShip = ref() // use for selecting ships
  let currentTurret = ref() // use for selecting turrets
  let currentModule = ref() // use for selecting modules
  let currentTurretLoadout = ref([]) //ship customization for turrets
  let currentModuleLoadout = ref([]) // ship customization for modules
  let currentRigLoadout = ref([]) // ship customization for rigs
  let shipFilter = ref([]) //throw ship classes and stuff in here

  return {
    currentShip,
    currentTurret,
    currentModule,
    currentModuleLoadout,
    currentTurretLoadout,
    currentRigLoadout,
    shipFilter
  }
})
