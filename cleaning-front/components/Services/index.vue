<template>
    <section id="Services">
        <div class="w-full max-w-[1500px] mx-auto">
            <div class="border border-[#CF881D] mt-[50px]">
                <div class="flex justify-between items-center px-[80px] py-8">
                    <div>
                        <h5 class="text-black text-[24px] font-semibold">{{ Service.title }}</h5>
                    </div>
                    <div class="max-w-[350px]">
                        <p class="text-[#5A5A5A] text-[16px] font-normal">{{ Service.description }}</p>
                    </div>
                    <div>
                        <p class="text-black text-[36px] font-medium">
                            {{ Service.price }} руб.
                        </p>
                    </div>
                    <div>
                        <nuxt-link :to="`Services/detail-${Service.id}`">
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
    id: number;
    title: string;
    description: string;
    price: number;
}

const props = defineProps<{
    Service: Service
}>()

</script>