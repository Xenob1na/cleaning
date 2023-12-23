<template>
    <MainLayout>
        <section id="Services" class="mb-[150px]">
            <ServicesHead />
            <Services v-for="service in services" :key="service.id" :Service="service" />
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue"
useSeoMeta({
    title: 'Услуги',
    ogTitle: 'Услуги',
    description: 'Услуги нашей компании',
    ogDescription: 'Услуги нашей компании',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

interface Service {
    id: number;
    title: string;
    description: string;
    price: number;
}

const services = ref<Service[]>([])

onBeforeMount(() => {
    services.value = [
        {
            id: 1,
            title: 'Мойка окон',
            description: 'Отполируем стекла, Вымоем подоконники, рамы, откосы, сливы, замки, ручки, Отмоем москитные сетки',
            price: 800,
        },
        {
            id: 2,
            title: 'Химчистка ковров и мебели',
            description: 'Мебель: Стул без тканевой спинки,Кресло не раскладное. Ковры: Короткий ворс, Длинный ворс',
            price: 1000,
        },
        {
            id: 3,
            title: 'Генеральная уборка',
            description: 'Обеспылим все поверхности мебели и предметы интерьера, Пропылесосим ковры и мебель, Вымоем полы и плинтуса, Отмоем розетки, выключатели, кондиционеры, радиаторы',
            price: 1500,
        }
    ]
})

</script>