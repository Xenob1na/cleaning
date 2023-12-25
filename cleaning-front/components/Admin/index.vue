<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100  ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Имя
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Номер телефона
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Дата заявки
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Действия
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b rounded-[10px]  hover:bg-gray-50">
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                        <div class="ps-3">
                            <div class="text-base font-semibold">{{ items.buyers_name }}</div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{ items.buyers_phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ items.created_date }}
                    </td>
                    <td class="px-6 py-4 flex gap-2">
                        <button type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[10px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center gap-2">
                            <Icon name="solar:trash-bin-trash-broken" size="20" />
                            <span>Удалить</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

interface Buyers {
    buyers_id: number;
    buyers_name: string;
    buyers_phone: string;
    created_date: any;
}

const props = defineProps<{
    items: Buyers
}>()
</script>