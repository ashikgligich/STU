<template>
  <div>
    <div class="about">
      <h1></h1>
      <div class="filterbutton" v-for="shipClass in shipClasses" :key="shipClass">
        <button @click="selectClass(shipClass)">{{ shipClass }}</button>
      </div>
      <div class="shipselector">
        <div v-if="gotData">
          <div v-if="!filterOn">
            <div v-for="ship in ships" :key="ship.id" v-memo="[ship]">
              <button @click="selectShip(ship)">
                {{ ship.ship }}
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
  const response = await fetch(
    'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
  )
  const array = await response.json()
  ships.value = array.ships
  gotData.value = true
  console.log(array)
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
