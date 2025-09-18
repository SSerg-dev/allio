<template>
  <main>
    <Select />
    <CardItems />
  </main>
</template>

<script setup lang="ts">
import CardItems from "../components/CardItems.vue";
import Select from "../components/Select.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>
