<script setup>
import MainModel from '@/components/MainModel.vue';
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <main>
    <TheWelcome />
    <div id="welcome-message" class="welcome-message">

      <!-- <h1>Welcome to Starscape</h1>
      <p>Explore the universe of Starscape, where you can build and customize your own ships!</p>
      <p>Use the navigation bar to explore different sections of the application.</p>
      <p>Click on the "Ship Stats" tab to view detailed information about your ships.</p>
      <p>Click on the "Ship Costs" tab to see the costs associated with building and upgrading your ships.</p>
      <p>Click on the "Ship Mods" tab to view and manage your ship modifications.</p> -->

    </div>
    
      <MainModel />
    
  </main>
</template>

<style scoped>
  #welcome-message {
    text-align: center;
    color: white;
    font-size: 24px;
    margin-top: 20px;
  }
  
</style>