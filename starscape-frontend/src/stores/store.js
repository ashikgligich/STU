import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const shipStore = defineStore('shipStore', () => {
  let shipList = ref() //ship array
  let turretList = ref() //turret array

  let currentShip = ref() // use for selecting ships
  let currentTurret = ref() // use for selecting turrets
  let currentModule = ref() // use for selecting modules
  let currentTurretLoadout = ref([]) //ship customization for turrets
  let currentModuleLoadout = ref([]) // ship customization for modules
  let currentRigLoadout = ref([]) // ship customization for rigs

  return {
    currentShip,
    currentTurret,
    shipList,
    turretList,
    currentModule,
    currentModuleLoadout,
    currentTurretLoadout,
    currentRigLoadout
  }
})
