<template>
  <div >
  <h1>Aeropuertos</h1>


    <input type="text" v-model="BuscarAeropuerto">
    <p>Los aeropuerto encontrados son: {{BuscarAeropuerto}}</p>
  </div>
</template>


<script setup>
import {onMounted, ref} from "vue";
import {AeropoertService} from "@/service/AeropoertService.js";
const BuscarAeropuerto = ref("pmi");
const serviceAeropuerto = new AeropoertService();

onMounted(async () => {

  const dataRecibido = await serviceAeropuerto.load();
  console.log(dataRecibido);

})

</script>

<style scoped>

</style>
