<template>
  
        <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
            <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">About Me</h1>
            <p class="text-fuchsia-800 ">My introduction</p>
        </div>
        <div class="flex justify-center  px-36 mt-7 space-x-8 ">
            <div class="w-72  ">
                <img src="../imgs/IMG_E2029.JPG" alt=""
                    class=" shadow-lg  shadow-emerald-500/40 duration-500 cursor-pointer  hover:shadow-fuchsia-600/30   ">
            </div>
            <div class="w-1/2 space-y-10">
                <p class="text-emerald-500/55">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure
                    reiciendis amet nobis soluta
                    quas?</p>
                <div class="flex space-x-8">
                    <div
                        class="px-4 py-2 w-28 text-center space-y-3 border-emerald-500 border rounded-lg shadow-lg  shadow-emerald-500/40 duration-500  ">
                        <h1 class="text-5xl text-fuchsia-800 font-bold ">0+</h1>
                        <p class="text-emerald-500 font-semibold">Years Experience</p>
                    </div>
                    <div
                        class="px-4 py-2 w-28 text-center space-y-3  border-emerald-500 border rounded-lg shadow-lg  shadow-emerald-500/40 duration-500">
                        <h1 class="text-5xl text-fuchsia-800 font-bold ">2+</h1>
                        <p class="text-emerald-500 font-semibold">Tasks Completed</p>
                    </div>
                    <div
                        class="px-4 py-2 w-28 text-center space-y-3  border-emerald-500 border rounded-lg shadow-lg  shadow-emerald-500/40 duration-500">
                        <h1 class="text-5xl text-fuchsia-800 font-bold ">1+</h1>
                        <p class="text-emerald-500 font-semibold">Satisfied Clients</p>
                    </div>

                </div>
                <Button label="Download CV" icon="pi pi-download" outlined iconPos="right" class="w-[35%]  " />

            </div>


        </div>

   
</template>

<script setup>
import Button from 'primevue/button';

</script>