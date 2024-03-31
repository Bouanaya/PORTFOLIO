<template>
    <div
        class="w-full h-16 border-b-2 border-green-200 flex hover:border-fuchsia-400 z-50 bg-[#100D1C]  duration-700 fixed">
        <div class="container flex justify-between items-center ">
            <div class="">

                <h1 class="text-3xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600 bg-clip-text
                text-transparent font-sans font-bold">SOUFIANE BOUANAYA</h1>

            </div>
            <div class="flex space-x-32">
                <div class="flex items-center ">
                    <ul class="flex space-x-6 text-primary-200 ">
                        <li class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <router-link to="/" active-class="active"
                                @click="$emit('scrollto', 'Home')">Home</router-link>
                        </li>
                        <li class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">

                            <router-link active-class="active" to="/About" @click=" $emit('scrollto', 'About')">
                                About
                            </router-link>
                        </li>
                        <li class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <router-link to="/Skills" active-class="active"
                                @click="$emit('scrollto', 'Skills')">Skills</router-link>


                        </li>
                        <li class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <router-link to="/Service" active-class="active"
                                @click="$emit('scrollto', 'Service')">Service</router-link>

                        </li>
                        <li @click="$emit('scrollto', 'Portfolio')"
                            class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <router-link to="/PortFolio" active-class="active"
                                @click="$emit('scrollto', 'Portfolio')">PortFolio</router-link>

                        </li>
                        <li @click="$emit('scrollto', 'Contact')"
                            class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <router-link to="/Contact" active-class="active"
                                @click="$emit('scrollto', 'Contact')">Contact</router-link>

                        </li>

                    </ul>
                </div>
                <div class="">
                    <button v-if="light" @click="Darkmode"
                        class="py-1 px-2 border rounded-lg hover:bg-fuchsia-700 duration-500 ">
                        <i class="pi pi-sun text-green-200"></i>
                    </button>
                    <button v-if="Dark" class=" py-1 px-2 border rounded-lg hover:bg-fuchsia-700 duration-500" @click="Darkmode" >
                        <i class=" pi pi-moon text-green-200"></i>
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

    <script setup>
    import {ref} from 'vue'
    import { useDark, useToggle } from '@vueuse/core'

    const Dark = ref(true)
    const light = ref(false)
    const isDark =useDark()
    const Toggle = useToggle(isDark)
    const Darkmode =() =>{
        Toggle()
        Dark.value = !Dark.value ;
        light.value = !light.value
       
    }
 


</script>
<style scoped>
 

.active {
    color: #86198F;
    font-size: 20px;
  

}
</style>