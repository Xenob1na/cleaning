<template>
    <transition name="fade">
    <div v-if="buttonShow" @click="click" class="button fixed right-[25px] bottom-[25px] cursor-pointer py-[10px] px-[10px] bg-[#CF881D] rounded-[50%]">
        <Icon name="ri:arrow-up-line" flip="horizontal" width="40" height="40" color="#fff"/>
    </div>
  </transition>
</template>

<script setup>


const buttonShow = ref(false)


onMounted(() => {
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);  
})

function checkScrollPosition() {
    buttonShow.value = window.pageYOffset > 10;
}

function click() {
      scroll({
        top: 0,
        behavior: "smooth"
      });
    }
</script>