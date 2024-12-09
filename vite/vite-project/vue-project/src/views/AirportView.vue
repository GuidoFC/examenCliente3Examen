<template>
  <div>
    <h1>Aeropuertos <span v-if="valorCerca"> de {{ valorCerca.toUpperCase() }}</span> !</h1>

    <input v-model="valorCerca" placeholder="pmi" @input="cercaAeropuerto">

    <!--    Los 2 : puntos se pone porque quiere poner una variable reactiva -->
    <lista :titol= "`Aeropuertos de ${valorCerca}`" :aeroports="aeroportsFilter">

      <!-- Slot per defecte perque no té nom -->
<!--      <template v-slot:header>-->
<!--        <h2>Aeroports filtrats de {{valorCerca}}</h2>-->
<!--        <p>Número de resultats: {{aeroportsFilter.length}}</p>-->
<!--      </template>-->

      <!-- Slot "footer" -->
      <template v-slot:footer>
        <small>Llista provisional</small>
      </template>
    </lista>

    <Lista titol="Aeropuertos vacío" :aeroports="[]"/>

    <lista titol="Todos los aeropuertos"  :aeroports="aeroports"/>

    <ul>
      <li v-for="aeroport in aeroportsFilter">
        {{ aeroport.codi }} - {{ aeroport.nom }} - {{ aeroport.ciutat }}
      </li>
    </ul>

  </div>
</template>


<script setup>
// Explicación del orden
// Siempre tengo que importar priemero la libreria del framwork, luego mis Service que importo
import {ref, onMounted} from "vue";
import {AeropoertService} from "../service/AeropoertService.js";
// Tienes que poner el nombre del archivo del componente

import Lista from "../components/Lista.vue"

// después van las variables reactivas
const aeroports = ref([])
const aeroportsFilter = ref([])

const valorCerca = ref("")

const serviceAeropuerto = new AeropoertService();

// despues las funciones de controlador
async function carregarAeropuertos() {
  aeroports.value = await serviceAeropuerto.load();
}

async function cercaAeropuerto() {
  aeroportsFilter.value = serviceAeropuerto.cerca(aeroports.value, valorCerca.value)
}

// y finalmente onMounted
onMounted(async () => {

  await carregarAeropuertos();
  // si queremos que la lista inifica sean todos los aeropuertos
  aeroportsFilter.value = aeroports.value

})

</script>

<style scoped>

</style>