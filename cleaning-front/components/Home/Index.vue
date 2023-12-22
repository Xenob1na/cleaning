<template>
    <section id="Hero" class="bg-[url('/clen.jpg')] bg-fixed bg-no-repeat bg-center h-[970px] bg-auto mt-[45px]">
        <div class="w-full max-w-[1100px] mx-auto text-center pt-[248px]">
            <article class="text-[18px] font-normal leading-normal tracking-[3.6px] bg-clip-text text-transparent bg-gradient-to-r from-[#FFF] to-[#CF881D]">СТРЕМЛЕНИЕ К ПРЕДОСТАВЛЕНИЮ УСЛУГ ВЫСОЧАЙШЕГО КАЧЕСТВА</article>
            <h1 class="text-white max-w-[1080px] mx-auto text-[68px] font-bold leading-[120%] mt-[10px]">ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ ПО УБОРКЕ ЖИЛЫХ И КОММЕРЧЕСКИХ ПОМЕЩЕНИЙ</h1>
            <button class="border rounded-[100%] border-[#CF881D] bg-[#CF881D] px-4 py-3  transition duration-100 hover:transform hover:scale-110 mt-[45px]"
                @click="click"
            >
                <Icon name="ri:arrow-up-line" flip="vertical" width="40" height="40" color="#fff"/>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
const click = () => {
    scroll({ top: 1000, behavior: 'smooth' })
}
</script>