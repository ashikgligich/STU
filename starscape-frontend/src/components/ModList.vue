
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

let filterOn = ref(false)

let gotData = ref(false)

const wepMods = ref()

async function fetchWepMods() {
    const response = await fetch(
      'https://api.sheety.co/9aee2b657f33b4b9cde173e45d295b27/sTarscape/turrets'
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

