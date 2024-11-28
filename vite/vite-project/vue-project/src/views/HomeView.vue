<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import {ref, onMounted} from "vue";

import {CatService} from "@/service/CatService.js";

const catService = new CatService();

const imgcat = ref("");

const cats = ref([]);

// Despues de haber cargado to_do el DOM
// se ejecuta el onMounted
onMounted(async () => {
  const catsResponse = await catService.findAll();
  console.log("hola", catsResponse);

  imgcat.value = catsResponse[0].url;
  cats.value = catsResponse;

})

// ref es una variable reactiva que sirve para que se pinte en el DOM
// de forma dinamica
const saluda = ref("hola");


function majuscula(){
  saluda.value = saluda.value.toUpperCase();
}


</script>

<template>
  <main>
    <!--    Los eventos van con @-->

    <button @click="majuscula()">Majuscula</button>
<!--    String con {{ }}-->
    <h1 v-if ="saluda ==='HOLA'">{{saluda}} </h1>
<!--    Cat: {{imgcat}}-->

<!-- Para que sea la varible reactiva, poneos ":" antes de src-->
    <img v-if="imgcat" :src="imgcat" alt="foto moix">
    <img v-if="!imgcat" src="https://img.freepik.com/vector-premium/icono-carga-vectorial-vector-editable-diseno-elementos_898898-180.jpg?w=740" alt="foto moix">


    <img v-for="cat of cats" :src="cat.url" alt="">

<!--    tmb podemos hacer-->
<h1> funciona con un for dentro de un DIV </h1>
    <div v-for="cat of cats">
      <img :src="cat.url" alt="">
      <p> Width: {{cat.width}} - Height: {{cat.height}}</p>
    </div>

    <h1> Uso de template para q no se ponga el DIV</h1>
    <template v-for="cat of cats">
      <img :src="cat.url" alt="">
      <p> Width: {{cat.width}} - Height: {{cat.height}}</p>
    </template>



    <!--    <TheWelcome />-->
  </main>
</template>
