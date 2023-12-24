<template>
    <section class="max-w-[1500px] mx-auto mt-[150px] lg:mx-5" id="About">
        <div class="flex justify-between gap-2">
            <div class="lg2:hidden">
                <img src="/clen2.png" alt="Услуга по уборке помещений" class="h-[600px] lg:h-[480px]">
            </div>
            <div class="max-w-[700px]">
                <article
                    class="bg-clip-text text-transparent bg-gradient-to-br  from-[#737373] to-[#CF881D] text-[18px] uppercase">
                    О нашей семье</article>
                <h2 class="text-black text-[48px] leading-[130%] font-bold mt-[10px]">Наш путь в уборке жилых помещений</h2>
                <p class="text-[#5A5A5A] text-[18px] font-medium leading-[180%] mt-[45px]">
                    Компания «Ocean» - команда профессиональных клинеров по уборке жилых и нежилых помещений в
                    Нижневартовске.
                </p>
                <p class="text-[#5A5A5A] text-[18px] font-medium leading-[180%] mt-5">Работаем с 2017 года. За это время мы
                    обслужили 17 000 м2 и провели 600 уборок разного уровня сложности.</p>
                <p class="text-[#5A5A5A] text-[18px] font-medium leading-[180%] mt-5">Наши мастера клининга умеют работать с
                    дорогой мебелью, хрупкими предметами интерьера, требовательными к
                    уходу тканями и знают, как удалять застарелые трудновыводимые пятна.</p>
                <nuxt-link to="/About">
                    <button
                        class="px-6 py-4 mt-[45px] border rounded-[50px] border-[#CF881D] hover:bg-[#ffe9c8] transition duration-100 hover:transform hover:scale-105">
                        <div class="flex items-center">
                            <Icon name="ic:round-expand-more" rotate="90deg" flip="horizontal" color="#CF881D" width="24"
                                height="24" />
                            <span class="text-[#CF881D] text-[18px] font-medium leading-[180%]">Подробнее</span>
                        </div>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>