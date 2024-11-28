<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import {ref, onMounted} from "vue";

const saluda = ref("Hola");

function majuscula(){
  saluda.value = saluda.value.toUpperCase();
}


</script>

<template>
  <main>
    <button @click="majuscula()">Majuscula</button>/

    <TheWelcome />
  </main>
</template>
