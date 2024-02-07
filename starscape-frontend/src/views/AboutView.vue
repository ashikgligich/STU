<template>
  <div class="about">
    <h1>This is an about page</h1>
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

</script>
