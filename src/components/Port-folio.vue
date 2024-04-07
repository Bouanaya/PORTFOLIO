<template>
    <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
        <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Projects</h1>
        <p class="text-fuchsia-800 ">Most Rocent Works</p>
    </div>
    <Carousel> <Slide v-for="slide in Project" :key="slide">
            <div class="carousel__item space-x-10 flex  md:h-[400px] justify-center px-10 mt-14  ">
                <div class="md:w-1/2 w-3/4    flex justify-center md:flex-row flex-col  items-center ">

                    <img :src="slide.imgProject" alt="" class="rounded-2xl">
                    <div class="md:hidden flex my-10 space-x-2  ">
                        <img :src="imgtech" alt="" class="w-8 h-8 " v-for="imgtech in slide.imgtechs" :key="imgtech">
                    </div>
                    <a :href="slide.link" class="flex mt-4 md:hidden ">
                        <Boutton label="Show" icon="pi pi-link" outlined iconPos="right" class="px-8" />
                    </a>

                </div>
                <div class="pt-16 md:flex hidden">
                    <div class="">
                        <h1 class="text-5xl text-justify text-fuchsia-500 font-bold w-[250px]">{{ slide.name }}</h1>
                        <p class="text-left text-lg text-emerald-400 dark:text-emerald-900 ">{{ slide.introduction }}
                        </p>
                        <div class="flex space-x-5 mt-10">
                            <img :src="imgtech" alt="" v-for="imgtech in slide.imgtechs" :key="imgtech"
                                class="w-10 h-10">
                            <a :href="slide.link" class=" mt-8 md:hidden flex justify-center items-start  ">
                                <Boutton label="Show" icon="pi pi-link" outlined iconPos="right" class="px-8" />
                            </a>

                        </div>

                        <a :href="slide.link" class="flex mt-8">
                            <Boutton label="Show" icon="pi pi-link" outlined iconPos="right" class="px-8" />
                        </a>

                    </div>


                </div>

            </div>
        </Slide>

        <template #addons>
            <Navigation />

        </template>
    </Carousel>

</template>

<script>
import Boutton from 'primevue/button';

import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'


import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

    components: {
        Carousel,
        Slide,
        Navigation,
        Boutton
    },
    data() {
        return {
            Project: [
                {
                    imgProject: "../../src/imgs/project1.png",
                    name: "Dashbord",
                    imgtechs: {
                        img1: "../../src/imgs/R (1).png",

                        img2: "../../src/imgs/pinia.png",
                        img3: "../../src/imgs/Tailwind_CSS_Logo.svg.png",

                       

                    }


                    ,
                    link: "https://dashbord-gamma.vercel.app/",
                    introduction: "Develop dashboard school using :"


                },
                {
                    imgProject: "../../src/imgs/project2.png",
                    name: "THE-Bag",
                    imgtechs:
                    {
                        img1: "../../src/imgs/R (1).png",
                        img2: "../../src/imgs/pinia.png",
                        img3: "../../src/imgs/Tailwind_CSS_Logo.svg.png",
                        
                    }

                    ,
                    link: "https://the-bags.vercel.app/",
                    introduction: "Develop a professional e-commerce using:"



                },
                {
                    imgProject: "../../src/imgs/project3.png",
                    name: "Fin-Gadi",
                    imgtechs: {
                        img1: "../../src/imgs/R (1).png",
                        img2: "../../src/imgs/pinia.png",
                        img3: "../../src/imgs/ts.png",
                        img4: "../../src/imgs/Tailwind_CSS_Logo.svg.png",

                       

                    },

                    link: "https://fin-ghadi-vue.vercel.app/",
                    introduction: "Develop a professional TAXI using:"


                },
                {
                    imgProject: "../../src/imgs/project4.png",
                    name: "City-GYM",
                    imgtechs:
                    {
                        img1: "../../src/imgs/R (1).png",
                        img4: "../../src/imgs/Tailwind_CSS_Logo.svg.png"
                    }


                    ,
                    link: "https://city-gym.vercel.app/",
                    introduction: "Develop a professional CiTY-GYM using:"


                }

            ]
        }
    },
})

</script>

<style>
.carousel__slide {
    padding: 10px;

}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 2px solid #A7F3D0;
    border-radius: 50%;
    color: #A7F3D0;
}
 
</style>