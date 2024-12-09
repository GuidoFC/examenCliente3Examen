<script setup>

import ListaItem from "@/components/ListaItem.vue";

defineProps({
  titol: {
    type: String,
    default: "Llistat per defecte",
    required: false
  },
  aeroports: {
    type: Array,
    required: true
  }
});

</script>

<template>

  <div>
    <slot name="header">
      <h1>{{ titol }}</h1>
      <p> Aeropuerto XXX actualizado</p>
    </slot>


    <ul>
      <ListaItem v-for="aeroport in aeroports" :descriptionBB="`${aeroport.codi} -
      ${aeroport.nom} - ${ aeroport.ciutat }` "/>
<!--      <li v-for="aeroport in aeroports">-->
<!--        {{ aeroport.codi }} - {{ aeroport.nom }} - {{ aeroport.ciutat }}-->
<!--      </li>-->
    </ul>


    <slot name="footer"></slot>
  </div>

</template>

<style scoped lang="scss">

ul {
  list-style: none;
}

li:nth-child(2n) {
  background-color: #31c075;
}

</style>