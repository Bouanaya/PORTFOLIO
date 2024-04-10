<template>

    <div class="md:container  flex md:space-x-20 px-2 md:h-screen md:py-16 pt-20 pb-2">
        <iconHome />
        <div class="h-full md:flex  space-y-4">
            <div class="flex flex-col justify-center space-y-5">
                <h1 class=" text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Hi! <span class="text-yellow-300">👋</span>
                    I'm BOUANAYA SOUFIANE
                </h1>
                <h3 class="text-fuchsia-600/100 ">Front-end Vue</h3>
                <p class="text-emerald-500/55 dark:text-emerald-950 md:w-3/4   text-justify  ">Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Cum labore
                    minus
                    nostrum, alias debitis
                    velit suscipit sunt aut atque vitae optio quia laudantium exercitationem .</p>

                <Button label="Contatct" icon="pi pi-arrow-right" outlined iconPos="right" class="md:w-[20%] w-1/2"
                    @click="$emit('scrollto', 'Contact')" />

            </div>
            <div class="flex justify-center items-center ">

                <img src="/imgs/WhatsApp Image 2024-03-24 at 5.09.48 PM.jpeg" alt=""
                    class=" shadow-lg  shadow-emerald-500/30 duration-500 cursor-pointer  hover:shadow-fuchsia-600/30  w-3/4  ">


            </div>
        </div>


    </div>



</template>

<script setup>

import iconHome from '../components/icons-Home.vue'
import Button from 'primevue/button';




</script>