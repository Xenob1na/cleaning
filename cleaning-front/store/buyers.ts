import { defineStore } from "pinia";

interface Buyers {
    buyers_id: number;
    buyers_name: string;
    buyers_phone: string;
    created_date: any;
}


export const useBuyersStore = defineStore("buyers", {
    state: () => ({
        buyers: [] as Buyers[],
    }),
    actions: {
        async getBuyers() {
            try {
              const result = await $fetch("https://backend-cleaning.vercel.app/api/buyers");
              this.buyers = result as Buyers[];
            } catch (error) {
              console.log(error);
            }
          },
    }
  });