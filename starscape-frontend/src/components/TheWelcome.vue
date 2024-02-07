<template>
    <div>
      <h1 v-if="answer">Correct</h1>
      <h1 v-else>Incorrect</h1>
      <h2 v-for="animal in animals" :key="animal">{{ animal }}</h2>
    </div>
    
  </template>
  
  <script setup>
  const answer = true;
  const animals = ["Ape", "Baboon", "elk", "Joe Mama"];
  </script>
  
  <style scoped>
  h1 {
    background-color: red;
  }
  </style>