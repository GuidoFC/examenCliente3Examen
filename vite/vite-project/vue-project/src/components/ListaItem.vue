<script setup>
const variableABC = defineProps({
  descriptionBB: {
    type: String,
    required: true
  }
})

const emit =  defineEmits(['editaaeroport']) // es un evento

function edita() {
  console.log("Edita " + variableABC.descriptionBB)
  emit('editaaeroport', "Paso el aeropuerto al padre" + variableABC.descriptionBB, "HELLO WORD") // es un evento con 2 parametros
}

</script>

<template>
  <li> {{ descriptionBB }}
    <button @click="edita">Edita</button>
  </li>

</template>

<style scoped>

</style>