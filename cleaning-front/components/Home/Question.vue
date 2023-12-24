<template>
    <section id="Question">
        <div class="flex justify-between max-w-[1500px] mx-auto mt-[150px] mb-[150px] lg:mx-5">
            <div>
                <div class="max-w-[700px]">
                    <article
                        class="bg-clip-text text-transparent bg-gradient-to-br  from-[#737373] to-[#CF881D] text-[18px] uppercase">
                        ЧАСТО ЗАДАВАЕМЫЙ ВОПРОС</article>
                    <h3 class="text-black text-[44px] leading-[130%] font-bold mt-[10px] sm2:text-[40px]">Получите ответы на распространенные вопросы о нашем приложении</h3>
                </div>
                <div class="mt-[50px]">
                    <Accordion title="Что вы не убираете?" class="mb-5">Частные дома</Accordion>
                    <Accordion title="Как будут строиться наши отношения?" class="mb-5">Позвоните по телефону или заполните заявку через форму на сайте.</Accordion>
                    <Accordion title="Во сколько прибывает ваша команда?">В течение 1 часа после предварительного звонка</Accordion>
                </div>
            </div>
            <div>
                <img src="/clen7.png" alt="Уборка помещений" class="h-[600px] lg:h-[480px] lg:ml-2 lg2:hidden" >
            </div>
        </div>
    </section>
</template>