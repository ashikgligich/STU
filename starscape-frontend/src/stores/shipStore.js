import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShipStore = defineStore('shipStore', () => {
  const ships = ref([])
  const weaponRigs = ref([])
  const defenseRigs = ref([])
  const engineRigs = ref([])
  const reactorRigs = ref([])

  const currentShip = ref() // use for selecting ships
  const baseCurrentShipStats = ref()
  const currentTurret = ref() // use for selecting turrets
  const currentModule = ref() // use for selecting modules
  const currentTurretLoadout = ref([]) //ship customization for turrets
  const currentModuleLoadout = ref([]) // ship customization for modules
  const currentRigLoadout = ref([]) // ship customization for rigs
  const shipFilter = ref([]) //throw ship classes and stuff in here

  async function fetchShips() {
    // say no if already fetched
    if (ships.value.length) return

    try {
      // Try loading the local JSON file
      const localResponse = await fetch('/data/ships.json')
      if (!localResponse.ok) throw new Error('Local JSON file not found')

      const localData = await localResponse.json()

      ships.value = localData.ships.slice(1)
      console.log('Loaded ships from local JSON:', localData)

      // make things numbers
      ships.value.forEach((ship) => {
        const keys = Object.keys(ship)
        keys.forEach((key) => {
          const maybeNumber = Number(ship[key])
          if (!isNaN(maybeNumber)) ship[key] = maybeNumber
        })
      })

      // load rig data
      const rigs = [
        fetch('/data/weapon_rigs.json').then((response) => response.json()),
        fetch('/data/defense_rigs.json').then((response) => response.json()),
        fetch('/data/engine_rigs.json').then((response) => response.json()),
        fetch('/data/reactor_rigs.json').then((response) => response.json())
      ]
      weaponRigs.value = (await rigs[0])['weapon_rigs'].slice(1)
      defenseRigs.value = (await rigs[1])['defense_rigs'].slice(1)
      engineRigs.value = (await rigs[2])['engine_rigs'].slice(1)
      reactorRigs.value = (await rigs[3])['reactor_rigs'].slice(1)
    } catch (error) {
      console.warn('Failed to load local JSON, falling back to API:', error)

      // Fallback to the API
      try {
        const apiResponse = await fetch(
          'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
        )
        if (!apiResponse.ok) throw new Error('API request failed')

        const apiData = await apiResponse.json()
        ships.value = apiData.ships
        console.log('Loaded ships from API:', apiData)
      } catch (apiError) {
        console.error('Failed to load ships from both local JSON and API:', apiError)
      }
    }
  }

  return {
    ships,
    weaponRigs,
    defenseRigs,
    engineRigs,
    reactorRigs,
    currentShip,
    baseCurrentShipStats,
    currentTurret,
    currentModule,
    currentModuleLoadout,
    currentTurretLoadout,
    currentRigLoadout,
    shipFilter,
    fetchShips
  }
})
