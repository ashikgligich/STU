<script setup>
import shipCosts from '@/components/shipCosts.vue'
import shipStats from '@/components/shipStats.vue'
import ShipMods from '@/components/ShipMods.vue'
import MainModel from '@/components/MainModel.vue';
</script>

<template>
<div class="container">
   <div class="left-element">
    <ShipMods />
    </div>
<div class="spacer">
    
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
    background-color: #200120;
    display: flex;
}

.left-element {
    background: green;
    
    float: left;
}

.spacer {
    float: center;

    background: rgb(5, 5, 66);
    width: 10px;
}
.right-element {
    background: red;
    
    float: right;
}
</style>