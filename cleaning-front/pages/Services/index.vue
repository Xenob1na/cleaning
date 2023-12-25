<template>
    <MainLayout>
        <section id="Services" class="mb-[150px]">
            <ServicesHead />
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
            <div v-else-if="isServices">
                <Services v-for="Service in service" :key="Service.services_title" :Service="Service" />
            </div>
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue"

import { storeToRefs } from 'pinia';
import { useServicesStore } from '../../store/services'

const { getTask } = useServicesStore()
const { services } = storeToRefs(useServicesStore())

useSeoMeta({
    title: 'Услуги',
    ogTitle: 'Услуги',
    description: 'Услуги нашей компании',
    ogDescription: 'Услуги нашей компании',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

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

const service = ref<Service[]>([])
const isServices = ref(false)
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
        await getTask()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        service.value = services.value
        if (services && services.value.length >= 1) {
            isServices.value = true
        } else {
            isServices.value = false
        }
    })
})

watch(() => service.value, () => {
    service.value = services.value
    if (services && services.value.length >= 1) {
        isServices.value = true
    } else {
        isServices.value = false
    }
}, { deep: true })
</script>