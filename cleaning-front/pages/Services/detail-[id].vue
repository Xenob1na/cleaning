<template>
    <MainLayout>
        <ClientOnly>

            <template #fallback>

                <div class="text-black mx-auto flex flex-col items-center justify-center">
                    <Icon name="line-md:downloading-loop" size="50" color="black" />
                    <div class="text-black">Загрузка данных...</div>
                </div>
            </template>
        </ClientOnly>

        <div v-if="isLoading">
            <div class="text-black mx-auto flex flex-col items-center justify-center">
                <Icon name="line-md:downloading-loop" size="50" color="black" />
                <div class="text-black">Загрузка данных...</div>
            </div>
        </div>
        <section class="max-w-[1300px] mx-auto flex justify-between mt-[150px] mb-[150px] lg:mx-5">
            <div>
                <h3 class="text-black text-[44px] leading-[130%] font-bold">{{ form.services_title }}</h3>
                <div class="max-w-[600px] mt-8 md:max-w-[900px]">
                    <ul class="list-image-[url(/check1.png)] list-inside">
                        <li class="font-medium text-[18px] leading-7  text-[#5A5A5A] tracking-[0.8px]">{{ form.services_desc1 }}</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">{{ form.services_desc2 }}</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">{{ form.services_desc3 }}</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">{{ form.services_desc4 }}</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">{{ form.services_desc5 }}</li>
                    </ul>
                    <div>
                        <p class="text-black text-[36px] font-medium mt-[45px]">
                            Ценна за услугу {{ form.services_price }} руб.
                        </p>
                    </div>
                    <button @click="isCloseOverlay = true"
                        class="px-6 py-4 mt-[45px] border rounded-[50px] border-[#CF881D] hover:bg-[#ffe9c8] transition duration-100 hover:transform hover:scale-105">
                        <div class="flex items-center">
                            <Icon name="ic:round-expand-more" rotate="90deg" flip="horizontal" color="#CF881D" width="24"
                                height="24" />
                            <span class="text-[#CF881D] text-[18px] font-medium leading-[180%]">Заказать</span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="md:hidden">
                <img src="/clen8.png" alt="Уборка помещений, мойка, уборка оконо, чистка окон, чистка диванов"
                    class="h-[600px]">
            </div>
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../../layouts/MainLayout.vue'
import { useServicesStore } from "../../store/services"
import { storeToRefs } from "pinia";

const { isCloseOverlay } = storeToRefs(useServicesStore())

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


const isLoading = ref(false);
const route = useRoute();

const form = reactive({
    services_title: '',
    services_desc1: '',
    services_desc2: '',
    services_desc3: '',
    services_desc4: '',
    services_desc5: '',
    services_price: 0
})


const fetchData = async () => {
    try {
        const result = await $fetch('https://backend-cleaning.vercel.app/api/services/' + route.params.id);
        const data = result as Service;

        form.services_title = data.services_title;
        form.services_desc1 = data.services_desc1;
        form.services_desc2 = data.services_desc2;
        form.services_desc3 = data.services_desc3;
        form.services_desc4 = data.services_desc4;
        form.services_desc5 = data.services_desc5;
        form.services_price = data.services_price;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => fetchData())
</script>