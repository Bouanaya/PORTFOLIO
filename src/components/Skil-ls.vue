<template>

    <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
        <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Skills</h1>
        <p class="text-fuchsia-800 ">My Technical Level</p>
    </div>
    <div class="flex justify-center items-center h-3/4 mt-24 md:mt-0">
        <div class="card h-full md:flex hidden">
            <Chart type="bar" :data="chartData" :options="chartOptions" />
        </div>
        <div class="md:hidden flex justify-center items-center ">
            <div class="card flex justify-center items-center w-screen ">
                <Chart type="pie" :data="chartData" :options="chartOptions" class="w-3/4 md:w-30rem px-2 " />
            </div>
        </div>
    </div>
    <div class="w-full h-9 container  flex justify-center mt-6 md:space-x-8 space-x-2 ">
        <img src="../imgs/javascript-logo-number-symbol-text-label-transparent-png-560960-removebg-preview.png" alt="">
        <img src="../imgs/Tailwind_CSS_Logo.svg.png" alt="">
        <img src="../imgs/R (2).png" alt="">
        <img src="../imgs/R (1).png" alt="">
        <img src="../imgs/nuxt-logo-1CCC5F38FD-seeklogo.com.png" alt="">
        <img src="../imgs/OIP__1_-removebg-preview.png" alt="">

    </div>

</template>
<style>
canvas {
    width: 700px;
    color: wheat;

}
</style>

<script setup>
import { ref, onMounted } from "vue";

import Chart from 'primevue/chart';


onMounted(() => {
    chartData.value = setChartData();
 
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['HTML', 'CSS/TailwiandCss', 'JS/TS', 'Vue/Nuxt ', 'PHP/Mysql'],
        datasets: [
            {
                label: 'learn',
                data: [100, 80, 70, 85, 50],
                backgroundColor: ['rgb(177,43,8)', 'rgb(56,189,248)', 'rgb(245,221,27)', 'rgb(16,108,83)', 'rgb(139, 92, 246)'],
                borderColor: ['rgb(177,43,8)', 'rgb(56,189,248)', 'rgb(245,221,27)', 'rgb(16,108,83)', 'rgb(139, 92, 246)'],

            }
        ]
    };
};
 

    
       
 
</script>
