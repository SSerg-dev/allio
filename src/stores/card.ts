import { defineStore } from "pinia";
import cards from "../data/data.json";

export const useCardStore = defineStore("cardStore", () => ({
  cards,
  filteredCards: [],
  cardVisible: {
    isRoom: true,
    isFloor: true,
    isSquare: true,
    isCost: true,
  },
}));
