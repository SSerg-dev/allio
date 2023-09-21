<template>
  <div class="card">
    <div class="card__content"> 
      <div class="card__content__header">
        <!-- <img src="../assets/images/header.svg" alt="header" /> -->
        <div class="card__content__header__item">
          {{ `${props.card.rooms} комната` }}
        </div>
        <div class="card__content__header__item">
          {{ props.card.square }} м<sup>2</sup>
        </div>
        <div class="card__content__header__item" style="color: grey">
          {{ props.card.floor }} этаж
        </div>
      </div>

      <div class="card__content__body">
        <div class="card__content__image">
          <div>
            <img src="../assets/images/plan.svg" alt="plan" />
          </div>
        </div>
      </div>
      <!-- <div class="card__content__number"><div >{{ props.card.building_id }}</div></div> -->

      <div class="card__content__footer">
        <div
          style="
            margin-left: -8rem;
            margin-top: 2rem;
            color: gray;
            font-size: 1.2rem;
          "
        >
          {{ `№ ${props.card.building_id}` }}
        </div>
        <h6>
          <div class="card__content__footer__item">
            {{ props.card.price }} р.
          </div>
        </h6>
        <div class="card__content__footer__item">
          {{ props.card.number }} р./ м<sup>2</sup>
        </div>

        <!--  -->
      </div>
      <a class="waves-effect waves-light red lighten-1 btn card__content_button"
        >Забронировать</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps, ref, onMounted } from "vue";
defineComponent({});

const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () => {},
  },
});

onMounted(() => {});
</script>

<style scoped></style>
