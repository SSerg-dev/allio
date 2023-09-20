import { defineStore } from "pinia";
import cards from "../data/data.json";
console.log("🚀 ~ file: card.ts:3 ~ cards:", cards);

export const useCard = defineStore("card", () => {
  state: () => {
    cards
  };
});
