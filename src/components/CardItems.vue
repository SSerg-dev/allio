<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";
</script>

<template>
  <div>
    <div class="container">
      <div class="item">
        <CardItem />
      </div>

      <div class="item">
        <CardItem />
      </div>

      <div class="item">
        <CardItem />
      </div>

      <div class="item">
        <CardItem />
      </div>

      <div class="item">
        <CardItem />
      </div>

      <div class="item">
        <CardItem />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  width: fit-content;
  flex-wrap: wrap;

  padding-top: 2vh;
}
item {
  width: fit-content;

  margin-bottom: 4vh;
}
</style>
