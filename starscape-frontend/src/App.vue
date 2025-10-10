<template>
  <header class="sticky top-0 bg-gray-800 mb-4">
      <NavBar msg="STU" />
  </header>

  <RouterView />
</template>

<style scoped></style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
