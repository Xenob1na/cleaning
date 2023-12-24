<template>
    <section id="Advantages">
        <div class="max-w-[1500px] mx-auto mt-[150px] lg2:mx-5">
            <div class="text-center">
                <article class="bg-clip-text text-transparent bg-gradient-to-br  from-[#737373] to-[#CF881D] text-[18px] uppercase">УСЛУГИ СЕЙЧАС</article>
                <h3 class="text-black text-[48px] leading-[110%] font-bold mt-[10px]">Какие услуги мы предлагаем</h3>
            </div>
            <div class="max-w-[1500px] w-full mx-auto flex justify-between mt-[60px] lg2:grid lg2:grid-cols-2 lg2:gap-4 sm2:grid sm2:grid-cols-1">
                <div v-for="Advantage in Advantages" :key="Advantage.title" class="max-w-[300px] mx-auto">
                    <img :src="Advantage.img" :alt="Advantage.alt" class="mx-auto">
                    <h5 class="text-black text-[24px] font-semibold mt-10 text-center">{{ Advantage.title }}</h5>
                    <p class="text-[#5A5A5A] text-[18px] font-normal leading-[180%] mt-4 text-center">{{ Advantage.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const Advantages = ref([
    {
        img: '/clen3.png',
        alt: 'Чистка ковров',
        title: 'Чистка ковров',
        body: 'Химчистка ковров и мебели'
    },
    {
        img: '/clen4.png',
        alt: 'Уборка спальни',
        title: 'Уборка спальни',
        body: 'Экспресс-уборка ваших спальных мест'
    },
    {
        img: '/clen5.png',
        alt: 'Чистка дивана',
        title: 'Чистка дивана',
        body: 'Химчистка дивана, евро-чистка дивана'
    },
    {
        img: '/clen6.png',
        alt: 'Чистка туалета',
        title: 'Чистка туалета',
        body: 'Чистка туалета до бела'
    }
])

</script>
