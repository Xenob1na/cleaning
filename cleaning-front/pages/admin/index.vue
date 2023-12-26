<template>
    <AdminLayout>
        <div class="mt-5">
            <h4 class="font-medium text-[20px] leading-7 text-black">Все заказы от клиентов</h4>

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

                <Admin v-for="item in items" :key="item.buyers_id" :items="item" />
            </div>
        </div>
    </AdminLayout>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth' 
})

import AdminLayout from '../../layouts/AdminLayout.vue'


import { storeToRefs } from 'pinia';
import { useBuyersStore } from '../../store/buyers'

const { getBuyers } = useBuyersStore()
const { buyers } = storeToRefs(useBuyersStore())

interface Buyers {
    buyers_id: number;
    buyers_name: string;
    buyers_phone: string;
    created_date: any;
}

const isServices = ref(false)
const isLoading = ref(false)
const items = ref<Buyers[]>([])

onMounted(async () => {
    isLoading.value = true
    try {
        await getBuyers()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        items.value = buyers.value
        if (buyers && buyers.value.length >= 1) {
            isServices.value = true
        } else {
            isServices.value = false
        }
    })
})

watch(() => items.value, () => {
    items.value = buyers.value
    if (buyers && buyers.value.length >= 1) {
        isServices.value = true
    } else {
        isServices.value = false
    }
}, { deep: true })
</script>