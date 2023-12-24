<template>
    <MainLayout>
        <section class="max-w-[1300px] mx-auto flex justify-between mt-[150px] mb-[150px] lg:mx-5">
            <div>
                <h3 class="text-black text-[44px] leading-[130%] font-bold">Генеральная уборка</h3>
                <div class="max-w-[600px] mt-8 md:max-w-[900px]">
                    <ul class="list-image-[url(/check1.png)] list-inside">
                        <li class="font-medium text-[18px] leading-7  text-[#5A5A5A] tracking-[0.8px]">Обеспылим все
                            поверхности мебели и
                            предметы интерьера</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">Вымоем
                            межкомнатные
                            двери и дверные
                            ручки</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">Отмоем розетки,
                            выключатели,
                            кондиционеры, радиаторы</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">Вымоем
                            межкомнатные
                            двери и дверные
                            ручки</li>
                        <li class="font-medium text-[18px] leading-7 text-[#5A5A5A] tracking-[0.8px] mt-5">Отмоем розетки,
                            выключатели,
                            кондиционеры, радиаторы</li>
                    </ul>
                    <div>
                        <p class="text-black text-[36px] font-medium mt-[45px]">
                            Ценна за услугу 800 руб.
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

const route = useRoute()
</script>