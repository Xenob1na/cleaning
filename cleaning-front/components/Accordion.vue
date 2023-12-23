<template>
    <Transition>
        <div @click="toggleAcc"
            class="max-w-[970px]  bg-white py-5 px-[35px] border-[2px] border-[#EEE] cursor-pointer">
            <div class="flex justify-between">
                <span class="text-[18px] font-medium text-black">{{ title
                }}</span>
                <span v-if="!openAcc">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_1562)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.17036 12.5973L2.03167 6.08659C1.43941 5.54643 1.42982 4.66173 2.01027 4.11057C2.5907 3.5594 3.54136 3.55048 4.13361 4.09064L9.12754 8.64527L14.0218 3.99787C14.6022 3.44671 15.5529 3.43779 16.1451 3.97795C16.7374 4.51811 16.747 5.40281 16.1665 5.95397L9.17036 12.5973Z"
                                fill="#CF881D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1562">
                                <rect width="16.5165" height="15.3707" fill="white"
                                    transform="matrix(-0.999956 0.00938187 0.0108329 0.999941 16.5524 0.769897)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span v-else>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_1562)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.55151 4.45991L14.6288 11.0373C15.216 11.583 15.2173 12.4678 14.6317 13.0135C14.0461 13.5592 13.0954 13.5592 12.5082 13.0135L7.55725 8.41218L2.61964 13.0135C2.03406 13.5592 1.08336 13.5592 0.496193 13.0135C-0.0909723 12.4678 -0.0922562 11.583 0.493325 11.0373L7.55151 4.45991Z"
                                fill="#CF881D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1562">
                                <rect width="16.5165" height="15.3707" fill="white"
                                    transform="matrix(1 0 -0.00145112 -0.999999 0.0588379 16.2175)" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </div>
            <div v-if="openAcc">
                <div class="text-black text-[16px] font-normal mt-5">
                    <span>
                        <slot />
                    </span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const openAcc = ref(false)

const toggleAcc = () => {
    openAcc.value = !openAcc.value
}

const props = defineProps<{
    title: string
}>()
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}</style>