<template>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Вход</h2>

            <form class="mx-auto max-w-lg rounded-lg border" @click.prevent="">
                <div class="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Почта</label>
                        <input name="email" v-model="user.email"
                            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#CF881D] transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Пароль</label>
                        <input name="password" v-model="user.password" type="password"
                            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#CF881D] transition duration-100 focus:ring" />
                    </div>

                    <button :disabled="isLoading" @click="login"
                        class="block rounded-lg bg-[#CF881D] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#d39b47] focus-visible:ring active:bg-gray-600 md:text-base">

                        <div v-if="!isLoading">Войти</div>
                        <div v-else class="flex items-center gap-2 justify-center">
                            <Icon name="eos-icons:bubble-loading" size="18" color="white" />
                            Входим
                        </div>
                    </button>

                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Авторизоваться'
});

import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../store/auth';

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
    email: '',
    password: ''
})

const isLoading = ref(false)
const router = useRouter();

const login = async () => {
    isLoading.value = true;
    try {
        await authenticateUser(user.value);
        if (authenticated) {
            router.push('/admin')

        }
        isLoading.value = false;
    } catch (error) {
        console.log(error)
        isLoading.value = false;
    }
}
</script>