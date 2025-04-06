<template>
  <div>
    <div class="about">
      <div class="filter">
      <div class="filterbutton" v-for="shipClass in shipClasses" :key="shipClass">
        <button @click="selectClass(shipClass)">{{ shipClass }}</button>
      </div>
    </div>
      <div class="shipselector">
        <div id="data" v-if="gotData">
          <div id="filter" v-if="!filterOn">
            <div id="SinS" v-for="ship in ships" :key="ship.id" v-memo="[ship]">
              <button @click="selectShip(ship)">
                
                <img :src="ship.pic" :alt="'insert image of ' + ship.ship + ' here'" />
              </button>
            </div>
          </div>
          <div v-if="filterOn">
            <div v-for="ship in store.shipFilter" :key="ship.id">
              <button @click="selectShip(ship)">
                {{ ship.ship }}
                <img :src="ship.pic" :alt="'insert image of ' + ship.ship + ' here'" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#data > div {
  background-color: aqua;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
  justify-content: center;
}

#data > div > div {
  width: 100px;
  height: 120px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
table {
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;

  margin: 0px;
  padding: 0px;
  border: 0;
  text-align: center;

  font-family: arial, helvetica, sans-serif;
  font-size: 16px;

  text-align: right;
}
td {
  display: table-cell;
  vertical-align: inherit;
}

.shipselector {
  float: left;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: #000;
} 
.shipselector img {
  height: 10vh;
  
  margin: 10px;
  
  border: 2px solid #000;
  box-shadow: 0 0 10px #000;
}


</style>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
let filterOn = ref(false)
let ships = ref()
let gotData = ref(false)
const router = useRouter()
const shipClasses = [
  'Destroyer',
  'Frigate',
  'Corvette',
  'Fighter',
  'Interceptor',
  'Hauler',
  'Miner',
  'All'
]

async function fetchShips() {
  try {
    // Try loading the local JSON file
    const localResponse = await fetch('/data/ships.json');
    if (!localResponse.ok) {
      throw new Error('Local JSON file not found');
    }
    const localData = await localResponse.json();
    ships.value = localData.ships;
    gotData.value = true;
    console.log('Loaded ships from local JSON:', localData);
  } catch (error) {
    console.warn('Failed to load local JSON, falling back to API:', error);

    // Fallback to the API
    try {
      const apiResponse = await fetch(
        'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
      );
      if (!apiResponse.ok) {
        throw new Error('API request failed');
      }
      const apiData = await apiResponse.json();
      ships.value = apiData.ships;
      gotData.value = true;
      console.log('Loaded ships from API:', apiData);
    } catch (apiError) {
      console.error('Failed to load ships from both local JSON and API:', apiError);
    }
  }
}

function selectShip(ship) {
  store.$patch({ currentShip: ship })
  console.log(store.currentShip)
  router.push('/stats')
}

function selectClass(shipClass) {
  let tempShips = []
  ships.value.forEach((ship) => {
    if (ship.class == shipClass) {
      tempShips.push(ship)
      store.$patch({ shipFilter: tempShips })
      filterOn.value = true
    } else if (shipClass == 'All') {
      filterOn.value = false
      store.$patch({ shipFilter: [] })
      return
    }
  })
}

onMounted(() => {
  fetchShips()
  console.log(ships)
})
</script>
