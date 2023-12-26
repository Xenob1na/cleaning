<template>
    <div class="max-w-[1170px] mx-auto mt-10">
        <header class="flex justify-between items-center">
            <h1 class="text-center text-black text-[44px] leading-[130%] font-bold">Панель администратора</h1>
            <button class="px-6 py-4 border rounded-[50px] border-[#CF881D] hover:bg-[#ffe9c8] transition duration-100 hover:transform hover:scale-105" @click="logout">
                <span class="text-[#CF881D] text-[18px] font-medium mr-2">Выход</span>
                <Icon name="ic:round-exit-to-app" color="#CF881D" />
            </button>
        </header>
        <slot />
    </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth"

const { logUserOut } = useAuthStore();

const logout = () => {
    logUserOut();
    router.push('/login');

}
const router = useRouter();
</script>