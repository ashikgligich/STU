<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label for="cars">Choose a car:</label>
<select name v-for="ship in ships" :key="ship">
<option value="ship.ship">{{ ship.ship }}</option>


</select>
    <h4></h4>
  </div>
  <main>
    <MainModel />
  </main>



</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { onUnmounted, ref } from 'vue';
import MainModel from '../components/MainModel.vue'

function fetchShips() {
    let url = 'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships';
    return fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.ships);
            return json.ships;
            ships.value = json.ships;
        });
}
let ships = ref();
onUnmounted(() => {
        fetchShips

        
    }); 
fetchShips().then(ships => {
    // Do something with the ships
    


    ships.forEach(ship => {
        console.log(ship);
    });

});
</script>
