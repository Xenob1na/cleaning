<template>
    <AdminLayout>
        <div class="mt-5">
            <h4 class="font-medium text-[20px] leading-7 text-black">Все заказы от клиентов</h4>
            <Admin v-for="item in items" :key="item.id" :items="item"/>
        </div>
    </AdminLayout>
</template>

<script setup lang="ts">
import AdminLayout from '../../layouts/AdminLayout.vue'


interface User {
    id: number;
    name: string;
    phone: string;
}


const items = ref<User[]>([])

onBeforeMount(() => {
    items.value = [
        {
            id: 1,
            name: 'John Doe',
            phone: '+33757005467',
        },
        {
            id: 2,
            name: 'Stiven Doe',
            phone: '+33757005467',
        },
        {
            id: 3,
            name: 'Stiven Doe',
            phone: '+33757005467',
        }
    ]
})
</script>