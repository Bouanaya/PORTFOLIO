<template>
    <div
        class="w-full h-16 border-b-2 border-green-200 flex hover:border-fuchsia-400 z-50 bg-[#100D1C] duration-700 fixed">
        <div class="container flex justify-between items-center ">
            <div class="">

                <h1
                    class="text-3xl  bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600 bg-clip-text text-transparent font-sans font-bold">
                    SOUFIANE BOUANAYA</h1>
            </div>
            <div class="flex space-x-32">
                <div class="flex items-center ">
                    <ul class="flex space-x-6 text-primary-200 ">
                        <li v-for="(item, index) in Navigation" :key="index"
                            class="hover:text-fuchsia-600 nav font-semibold  duration-500 cursor-pointer text-lg ">
                            <button>{{ item }}</button>
                        </li>

                    </ul>
                </div>
                <button class="py-1 px-2 border rounded-lg hover:bg-fuchsia-700 duration-500 ">
                    <i class="pi pi-sun text-green-200"></i>
                </button>
                <button v-if="condition" class="py-1 px-2 border rounded-lg hover:bg-fuchsia-700 duration-500 ">
                    <i class="pi pi-moon text-green-200"></i>
                </button>

            </div>

        </div>
    </div>
</template>

<script setup>
const Navigation = [
    "Home", "About", "Skills", "Portfolio", "Contact"
]
 
</script>
<style scoped>
.nav {
    font-weight: 500;
}
</style>