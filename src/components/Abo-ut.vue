<template>
    <div class=" h-screen relative ">
        <div class="" v-show="ShowQR">
            <div class="absolute z-10 top-0 left-0 w-full h-full bg-[#100D1C] opacity-90 blur-3xl">
            </div>
            <div @click="ShowQR = false"
                class="absolute flex justify-center items-center w-full h-full z-30 flex-col space-y-4">
                <img src="../imgs/QRcv.png" alt="" class="w-60 h-60">
                <h1 class="text-4xl text-emerald-500">QR</h1>

            </div>
        </div>

        <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2 ">
            <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">About Me</h1>
            <p class="text-fuchsia-800 ">My introduction</p>
        </div>
        <div class="flex justify-center  px-36 mt-7 space-x-8 ">
            <div class="w-72 relative  ">
                <img src="../imgs/IMG_E2029.JPG" alt=""
                    class=" shadow-lg  shadow-emerald-500/40 duration-500 cursor-pointer  hover:shadow-fuchsia-600/30 relative  z-10  rounded-3xl  ">
                <div class="absolute bg-emerald-700 dark:bg-fuchsia-900 rounded-3xl w-full h-full -left-6 z-0 -bottom-6 blur-sm"></div>

            </div>
            <div class="md:w-1/2 space-y-10">
                <p class="text-emerald-500/55 dark:text-emerald-950">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Delectus iure
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
                <div class="flex space-x-6 ">

                    <Button label="Download CV" icon="pi pi-download" outlined iconPos="right" class="w-[35%]"
                        @click="Download" />

                    <button @click="ShowQR = true">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-14 h-14 text-emerald-500 dark:text-fuchsia-800 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                        </svg>

                    </button>
                </div>

            </div>



        </div>
    </div>


</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import Button from 'primevue/button';
const ShowQR = ref(false)
const Download = ()=> {
    axios({
        url: 'https://indigo-persis-17.tiiny.site/',
        method: 'GET',
        responseType: 'blob'
    })
        .then((response) => {
            const url = window.URL
                .createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'CV.pdf');
            document.body.appendChild(link);
            link.click();
        })
}

</script>