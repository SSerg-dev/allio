import { defineStore } from "pinia";
import cards from "../data/data.json";

export const useCardStore = defineStore("cardStore", () => ({
  cards,
}));
