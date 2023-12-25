import { defineStore } from "pinia";

interface Service {
    services_id: number;
    services_title: string;
    services_desc1: string;
    services_desc2: string;
    services_desc3: string;
    services_desc4: string;
    services_desc5: string;
    services_price: number;
}


export const useServicesStore = defineStore("services", {
    state: () => ({
        isCloseOverlay: false,
        services: [] as Service[],
    }),
    actions: {
        async getTask() {
            try {
              const result = await $fetch("https://backend-cleaning.vercel.app/api/services");
              this.services = result as Service[];
            } catch (error) {
              console.log(error);
            }
          },
    }
  });