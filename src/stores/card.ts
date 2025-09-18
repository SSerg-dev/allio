import { defineStore } from "pinia";
import cards from "../data/data.json";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards,
    nativeCards: [...cards],             
    filterCards: [],

    filterRooms: [],
    filterFloor: [],
    filterSquare: [],
    filterPrice: [],
    
    cardVisible: {
      isRoom: true,
      isFloor: true,
      isSquare: true,
      isCost: true,
    },
  }),
  getters: {
    getFilterCards() {
      return this.filterCards
    },
    getNativeCards() {
      return this.nativeCards
    },
    getFilterRooms() {
      return this.filterRooms
    },
    getFilterFloor() {
      return this.filterFloor
    },
    getFilterSquare() {
      return this.filterSquare
    },
    getFilterPrice() {
      return this.filterPrice
    }

  },
  actions: {
    setFilterCards(cards: any) {
      this.filterCards = cards
    },
    setFilterRooms(rooms: any) {
      this.filterRooms = rooms
      // console.log("🚀 ~ file: card.ts:45 ~ setFilterRooms ~ this.filterRooms:", this.filterRooms)
    },
    setFilterFloor(floor: any) {
      this.filterFloor = floor
    },
    setFilterSquare(square: any) {
      this.filterSquare = square
    },
    setFilterPrice(price: any) {
      this.filterPrice = price
    }

  }
  
});
