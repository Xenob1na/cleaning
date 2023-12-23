<template>
    <MainLayout>
        <section id="Home">
            <Home />
            <HomeAbout />
            <HomeAdvantages />
            <HomeQuestion />
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../layouts/MainLayout.vue"
useSeoMeta({
  title: 'Главная',
  ogTitle: 'Главная',
  description: 'Профессиональная уборка помещений',
  ogDescription: 'Профессиональная уборка помещений',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>