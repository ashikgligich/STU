<template>
  <div>
    <div class="about">
      <h1></h1>
      <div class="shipselector">
        <table align="center">
            <tbody>
      <div v-if="gotData">
        
        <div v-for="ship in ships.ships" :key="ship.id">
          <tr>
          <td align="right" @click="selectShip(ship)">{{ ship.ship }}</td>
          <td align="right" img url="{{ ship.pic }}"></td>
        </tr>
        </div>
      </div>
    </tbody>
          </table>
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
    
  font-family: arial,helvetica,sans-serif;
  font-size: 16px;

  text-align: right
 
  
  


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
  
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { shipStore } from '../stores/store.js'

const store = shipStore()
let ships = ref()
let gotData = ref(false)
const router = useRouter()

async function fetchShips() {
  const response = await fetch(
    'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships'
  )
  const array = await response.json()
  ships.value = array
  gotData.value = true
  console.log(array)
}

function selectShip(ship) {
  store.$patch({ currentShip: ship })
  console.log(store.currentShip)
  router.push('/stats')
}

onMounted(() => {
  fetchShips()
  console.log(ships)
})
</script>
