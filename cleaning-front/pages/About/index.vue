<template>
    <MainLayout>
        <section id="About">
            <About />
            <HomeQuestion />
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "../../layouts/MainLayout.vue"
useSeoMeta({
  title: 'О нас',
  ogTitle: 'О нас',
  description: 'Мы - команда профессиональных специалистов в уборка помещений',
  ogDescription: 'Мы - команда профессиональных специалистов в уборка помещений',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>