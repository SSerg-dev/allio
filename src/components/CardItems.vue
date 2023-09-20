<template>
  <div>
    <div class="cards">

      <!-- {{ cards }} -->

      <!-- <div>
        <CardItem />
      </div>

      <div>
        <CardItem />
      </div>

      <div>
        <CardItem />
      </div>

      <div>
        <CardItem />
      </div> -->

      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCard } from "../stores/card";
import CardItem from "./CardItem.vue";

const cards = useCard(); 
console.log("🚀 ~ file: CardItems.vue:33 ~ cards:", cards)


</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: fit-content;
  flex-wrap: wrap;

  padding-top: 2vh;
}

</style>
