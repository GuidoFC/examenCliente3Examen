<template>
  <div class="about">
    <h1>Formulario de alta de Gatos</h1>
    <input type="text" v-model="CatName">
    <p>El meu moix es diu {{CatName}}</p>
    <br>
    <input type="file" @change="loadImage">
    <br>
    <button @click="uploadCat" >Subir Foto Gato</button>


  </div>
</template>


<script setup>
import {ref} from "vue";
import {CatService} from "@/service/CatService.js";

const CatName = ref("Gato con Botas");
const CatFile = ref();
const catService = new CatService();

function loadImage(evento) {
  console.log("loading Image");
  CatFile.value = evento.target.files[0];

}

function uploadCat() {
  alert("Estas subiendo a punto de subir el gato: " + CatName.value);
  catService.uploadImages(CatFile.value)
//   Todo falta redirigir
}
</script>

<style lang="scss">
$color: #37aada;

.about {
  background: $color;
}

</style>
