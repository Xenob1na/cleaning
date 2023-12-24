import { defineStore } from "pinia";

export const useServicesStore = defineStore("services", {
    state: () => ({
        isCloseOverlay: false
    }),
  });