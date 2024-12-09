<script setup>
const variableABC = defineProps({
  descriptionBB: {
    type: String,
    required: true
  }
})

function edita() {
  console.log("Edita " + variableABC.descriptionBB)
}

</script>

<template>
  <li> {{ descriptionBB }}
    <button @click="edita">Edita</button>
  </li>

</template>

<style scoped>

</style>