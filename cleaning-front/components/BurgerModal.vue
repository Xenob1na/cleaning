<template>
    <div class="z-[1000]">
        <nav
            class="z-[1000] fixed left-0 top-0 right-0  items-center justify-center bg-[#1f1f1f] h-[100%] max-w-[400px] pl-7">
            <span class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold mr-[30px]"
                @click="$emit('close')">&times;</span>
            <ul
                class="flex flex-col items-center gap-7 mt-10  mr-10 cursor-pointer font-lato text-white font-medium text-[20px] py-3">
                <li class="hover:underline decoration-2" v-for="(navs, index) in nav">
                    <nuxt-link :to="navs.path">
                        {{ navs.name }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

const nav = ref([
    {
        name: "Главная",
        path: '/',
    },
    {
        name: "О нас",
        path: '/About',
    },
    {
        name: "Услуги",
        path: '/Services',
    },
])
</script>