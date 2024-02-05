<template>
    <div>
<h1>{{ Destanation.name }}</h1>
<img src="Destanations.img" alt="">
<h2></h2>
<button>@click="increment">Ee</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    Destination: Object,
});

const clicked = ref(0);
function increment() {
    clicked.value++;
}
</script>

<style scoped>

</style>