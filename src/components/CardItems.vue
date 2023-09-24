<template>
  <div>
    <div class="cards">
      <CardItem
        v-for="(card, index) in cards.cards"
        :order="index"
        :card="card"
        :key="card.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from "./CardItem.vue";
import { useCardStore } from "../stores/card";

import { defineComponent, defineProps, onMounted } from "vue";
defineComponent({});

const cards = useCardStore();
// console.log("🚀 ~ file: CardItems.vue:23 ~ cards:", JSON.stringify(cards.cards[0].plan) )

onMounted(() => {});
</script>

<style scoped>

</style>
