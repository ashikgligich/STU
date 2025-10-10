<template>
  <div class="p-4">
    <div class="flex gap-2 items-center text-2xl">
      <img alt="Ash Tek" class="size-8" src="/ASH_TEK_logo.png" />
      <p>{{ msg }}</p>
    </div>
    <p class="italic">
      Welcome to the Starscape ship builder. This is a work in "progress", and we are "constantly"
      adding new features and ships. "Please" check back often for "updates".
    </p>
    <div class="flex gap-4 text-blue-300 underline">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/builder">Ship Builder</RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
