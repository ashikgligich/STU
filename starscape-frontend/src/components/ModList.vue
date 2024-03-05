
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

let filterOn = ref(false)

let gotData = ref(false)

const wepMods = ref()

async function fetchWepMods() {
    const response = await fetch(
      'https://api.sheety.co/ea29051c955a22ec793735655dab1987/sTarscape/weaponRigs'
    )
    const array = await response.json()
    wepMods.value = array.weaponRigs
    gotData.value = true
    console.log(array)
    console.log(wepMods.value)
    console.log(wepMods[6])
  }
  
  
    fetchWepMods()
    console.log(wepMods)
  


</script>



<template>

<option v-for="wepMod in wepMods" :key="wepMod.id" :value="wepMod.rigs">{{wepMod.rigs}}</option>


</template>

