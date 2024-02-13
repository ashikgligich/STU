<template>
  <div class="about">
    <h1>This is an about page</h1>\
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
import MainModel from '../components/MainModel.vue'


let url = 'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/ships';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.ships);
  let ships = json.ships;

});
//output the array of ships to html page  
    
// ships.forEach(ship => {
//   let card = document.createElement('div');
//   card.className = 'card';
//   card.innerHTML = ship.name;
//   document.body.appendChild(card);
// });

</script>
