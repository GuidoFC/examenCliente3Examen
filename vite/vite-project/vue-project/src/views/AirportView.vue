<template>
  <div >
  <h1>Aeropuertos <span v-if="valorCerca"> de {{valorCerca.toUpperCase()}}</span> !</h1>

    <input v-model="valorCerca" placeholder="pmi" @input="cercaAeropuerto">
    <ul>
      <li v-for="aeroport in aeroportsFilter">
        {{aeroport.codi}} - {{aeroport.nom}} - {{aeroport.ciutat}}
      </li>
    </ul>

  </div>
</template>


<script setup>
import {onMounted, ref} from "vue";
import {AeropoertService} from "@/service/AeropoertService.js";


const aeroports = ref([])
const aeroportsFilter = ref([])

const valorCerca = ref("")

const serviceAeropuerto = new AeropoertService();

async function carregarAeropuertos(){
  aeroports.value = await serviceAeropuerto.load();
}

async function cercaAeropuerto(){
  aeroportsFilter.value =  serviceAeropuerto.cerca(aeroports.value, valorCerca.value)
}


onMounted(async () => {

 await carregarAeropuertos();
 // si queremos que la lista inifica sean todos los aeropuertos
 aeroportsFilter.value = aeroports.value

})

</script>

<style scoped>

</style>
