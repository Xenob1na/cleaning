<template>
    <div id="Modal"
        class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-white w-full max-w-[500px] rounded-lg text-white border border-gray-500 p-2">
            <button class="flex justify-between bg-white w-full p-3" @click="isCloseOverlay = false">
                <p class="text-[#030229] font-bold text-[16px]">Отправить заявку</p>
                <Icon name="mdi:close" size="25" color="black" />
            </button>
            <div class="w-full p-3 max-w-[400px] mx-auto text-center">
                <p class="text-[#5A5A5A] font-medium text-[16px]">Оставьте ваши контакты и наш менеджер свяжется с вами</p>
            </div>

            <form class="mx-auto  rounded-lg" @click.prevent="">
                <div class="flex flex-col gap-4 p-4 md:p-8">

                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ваше имя</label>
                        <input name="task_title"
                            v-model="form.buyers_name"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#CF881D] transition duration-100 focus:ring" />
                    </div>
                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер телефона</label>
                        <input name="task_title"
                            v-model="form.buyers_phone"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-[#CF881D] transition duration-100 focus:ring" />
                    </div>
                    <button
                        @click="submitCustomer"
                        class="block rounded-lg bg-[#CF881D] mt-5 px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-[#CF881D] transition duration-100 md:text-base"
                        >Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useServicesStore } from "../store/services"
import { storeToRefs } from "pinia";

const { isCloseOverlay } = storeToRefs(useServicesStore())



const form = reactive({
    buyers_name: '',
    buyers_phone: '',
})

const submitCustomer = async () => {
    try {
        await $fetch("https://backend-cleaning.vercel.app/api/buyers", {
            method: "POST",
            body: form,
        });

        isCloseOverlay.value = false
    } catch (error) {
        console.log(error);
    }
}
</script>