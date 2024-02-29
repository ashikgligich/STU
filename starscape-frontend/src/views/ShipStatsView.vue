<script setup>
import shipCosts from '@/components/shipCosts.vue'
import shipStats from '@/components/shipStats.vue'
import ShipMods from '@/components/ShipMods.vue'
</script>

<template>
<div class="container">
   <div class="left-element">
    <ShipMods />
    </div>

    <div class="right-element">
    <shipCosts />
    <shipStats />
    
  </div>
  </div>
</template>

<style>
.container {
  
   
    padding: 0;
    margin: 0;
    background-color: #ff00ff;
    display: flex;
}

.left-element {
    background: green;
    
    float: left;
}

.right-element {
    background: red;
    
    float: right;
}
</style>