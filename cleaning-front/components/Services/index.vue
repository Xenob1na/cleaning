<template>
    <section id="Services">
        <div class="max-w-[1500px] mx-auto lg:mx-5">
            <div class="border border-[#CF881D] mt-[50px]">
                <div class="flex justify-between items-center px-[80px] lg:px-5 lg:gap-2 py-8 lg2:grid lg2:grid-cols-1 lg2:gap-6">
                    <div>
                        <h5 class="text-black text-[24px] font-semibold">{{ Service.services_title }}</h5>
                    </div>
                    <div class="max-w-[350px] lg2:max-w-[900px]">
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.services_desc1 }}</p>
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.services_desc2 }}</p>
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.services_desc3 }}</p>
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.services_desc4 }}</p>
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.services_desc5 }}</p>
                    </div>
                    <div>
                        <p class="text-black text-[36px] lg2:text-[26px] font-medium">
                            {{ Service.services_price }} руб.
                        </p>
                    </div>
                    <div>
                        <nuxt-link :to="`Services/detail-${Service.services_id}`">
                            <button
                                class="px-6 py-4 border rounded-[50px] border-[#CF881D] hover:bg-[#ffe9c8] transition duration-100 hover:transform hover:scale-105">
                                <div class="flex items-center">
                                    <Icon name="ic:round-expand-more" rotate="90deg" flip="horizontal" color="#CF881D"
                                        width="24" height="24" />
                                    <span class="text-[#CF881D] text-[18px] font-medium leading-[180%]">Подробнее</span>
                                </div>
                            </button></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
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

const props = defineProps<{
    Service: Service
}>()

</script>