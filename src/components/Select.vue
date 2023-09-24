<template>
  <div>
    <div class="select">
      <div class="select__content">
        <div class="select__content__header">
          <p>Подбор квартир</p>
        </div>

        <div class="select__content__room">
          <p>Количество комнат</p>
          <div>
            <a
              class="waves-effect waves-red white btn select__content__room__button"
              @click="updateCards('rooms', 1)"
              >1</a
            >
            <a
              class="waves-effect waves-red white btn select__content__room__button"
              @click="updateCards('rooms', 2)"
              >2</a
            >
            <a
              class="waves-effect waves-red white btn select__content__room__button"
              @click="updateCards('rooms', 3)"
              >3</a
            >
            <a
              class="waves-effect waves-red white btn select__content__room__button"
              @click="updateCards('rooms', 4)"
              >4+</a
            >
          </div>
        </div>

        <div class="select__content__floor">
          <p>Этаж</p>
          <div class="row">
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">от</span>
                <span class="black-text">{{ `${minFloor}` }}</span>
              </div>
            </div>
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">до</span>
                <span class="black-text">{{ `${maxFloor}` }}</span>
              </div>
            </div>
          </div>
          <div style="margin: -1.2rem 2rem 0 0.5rem" id="floor-slider"></div>
        </div>

        <div class="select__content__square">
          <p>Площадь</p>
          <div class="row">
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">от</span>
                <span class="black-text">{{ `${minSquare}` }}</span>
              </div>
            </div>
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">до</span>
                <span class="black-text">{{ `${maxSquare}` }}</span>
              </div>
            </div>
          </div>

          <div style="margin: -1.2rem 2rem 0 0.5rem" id="square-slider"></div>
        </div>

        <div class="select__content__cost">
          <p>Стоимость</p>
          <div class="row">
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">от</span>
                <span class="black-text">{{ `${minCost}` }}</span>
              </div>
            </div>
            <div class="col">
              <div class="card white select__content__floor__range">
                <span class="black-text">до</span>
                <span class="black-text">{{ `${maxCost}` }}</span>
              </div>
            </div>
          </div>
          <div style="margin: -1.2rem 2rem 0 0.5rem" id="cost-slider"></div>
        </div>
      </div>

      <div class="select__content__find">
        <a
          class="waves-effect default red lighten-1 btn select__content__find__button"
          >Подобрать</a
        >
      </div>

      <div class="select__content__filter"></div>
      <a
        class="red-text waves-effect waves-red white lighten-1 btn select__content__find__reset"
        >Сбросить</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCardStore } from "../stores/card";
import noUiSlider from "nouislider";
import { type } from "os";

import { defineComponent, defineProps, ref, computed, onMounted } from "vue";

defineComponent({});

const cards = useCardStore();

let minFloor = ref(0);
let maxFloor = ref(0);

let minSquare = ref(0);
let maxSquare = ref(0);

let minCost = ref(0);
let maxCost = ref(0);

// Methods
function updateCards(type: string, amount: number) {
  switch (type) {
    case "rooms":
    filterRooms("rooms", amount);
      break;
    case "floor":
    filterFloor("floor");
      break;
    case "square":
    filterSquare("square");
      break;
    case "price":
    filterPrice("price");
      break;

    default:
      break;
  }
  
}

function filterRooms(rooms: string, amount: number) {
  const result = cards.cards.filter((c) => c.rooms >= amount);
  if (result.length > 0) {
    // console.log("🚀 ~ file: Select.vue:154 ~ filterRooms ~ result:", result)
    // todo set visible
    // todo updateStore
    return result
  }
  return
}
function filterFloor(floor: string) {
  const result = cards.cards.filter(
    (c) => c.floor >= +minFloor.value && c.floor <= +maxFloor.value
  );
  if (result.length > 0) {
    // console.log("🚀 ~ file: Select.vue:154 ~ filterFloor ~ result:", result)
    // todo set visible
    return result
  }
  return
}
function filterSquare(square: string) {
  const result = cards.cards.filter(
    (c) => c.square >= +minSquare.value && c.square <= +maxSquare.value
  );
  if (result.length > 0) {
    // console.log("🚀 ~ file: Select.vue:154 ~ filterSquare ~ result:", result)
    // todo set visible
    return result
  }
  return
}
function filterPrice(price: string) {
  const result = cards.cards.filter(
    (c) =>
      c.price / 1000000 >= +minCost.value && c.price / 1000000 <= +maxCost.value
  );
  if (result.length > 0) {
    // console.log("🚀 ~ file: Select.vue:154 ~ filterPrice ~ result:", result)
    // todo set visible
    return result
  }
  return
}

function createFloorSlider() {
  const floorSlider: any = document.getElementById("floor-slider");

  // create slider
  const slider = noUiSlider.create(floorSlider, {
    start: [1, 10],
    connect: true,
    step: 1,
    orientation: "horizontal",
    range: {
      min: 1,
      max: 10,
    },
  });
  // listen slider
  slider.on("update", (values) => {
    minFloor.value = +values[0];
    maxFloor.value = +values[1];
    const type = "floor";
    updateCards(type, 0);
  });
}

function createSquareSlider() {
  const squareSlider = <HTMLElement>document.getElementById("square-slider");

  // create slider
  const slider = noUiSlider.create(squareSlider, {
    start: [22.94, 192.27],
    connect: true,
    step: 1,
    orientation: "horizontal",
    range: {
      min: 22.94,
      max: 192.27,
    },
  });
  // listen slider
  slider.on("update", (values) => {
    minSquare.value = +values[0];
    maxSquare.value = +values[1];
    const type = "square";
    updateCards(type, 0);
  });
}

function createCostSlider() {
  const costSlider = <HTMLElement>document.getElementById("cost-slider");

  // create slider
  const slider = noUiSlider.create(costSlider, {
    start: [2.23, 12.43],
    connect: true,
    step: 0.1,
    orientation: "horizontal",
    range: {
      min: 2.23,
      max: 12.43,
    },
  });
  // listen slider
  slider.on("update", (values) => {
    minCost.value = +values[0];
    maxCost.value = +values[1];
    const type = "price";
    updateCards(type, 0);
  });
}

onMounted(() => {
  createFloorSlider();
  createSquareSlider();
  createCostSlider();
});
</script>

<style scoped></style>
