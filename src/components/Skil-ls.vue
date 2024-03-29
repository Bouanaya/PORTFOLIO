<template>
    <section class="container h-screen w-full py-16">
        <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
            <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Skills</h1>
            <p class="text-fuchsia-800 ">My Technical Level</p>
        </div>
        <div class="flex justify-center items-center h-3/4 ">
            <div class="card h-full">
                <Chart type="bar" :data="chartData" :options="chartOptions" />
            </div>
        </div>
        <div class="w-full h-9 container  flex justify-center space-x-8">
            <img src="../imgs/javascript-logo-number-symbol-text-label-transparent-png-560960-removebg-preview.png"
                alt="">
            <img src="../imgs/Tailwind_CSS_Logo.svg.png" alt="">
            <img src="../imgs/R (2).png" alt="">
            <img src="../imgs/R (1).png" alt="">
            <img src="../imgs/nuxt-logo-1CCC5F38FD-seeklogo.com.png" alt="">

        </div>
    </section>
</template>
<style >
canvas{
    width: 700px;
    color: wheat;

}

</style>

<script setup>
import { ref, onMounted } from "vue";

import Chart from 'primevue/chart';


onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['HTML', 'CSS/TailwiandCss', 'JS/TS', 'Vue/Nuxt ','PHP/Mysql'],
        datasets: [
            {
                label: 'learn',
                data: [100,80,70,85,50],
                backgroundColor: ['rgb(177,43,8)', 'rgb(56,189,248)', 'rgb(245,221,27)', 'rgb(16,108,83)','rgb(139, 92, 246)'],
                borderColor: ['rgb(177,43,8)', 'rgb(56,189,248)', 'rgb(245,221,27)', 'rgb(16,108,83)','rgb(139, 92, 246)'],
               
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                labels: {
                    color: "rgb(134, 25, 112)"
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "rgb(110,231,183)"
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "rgb(134, 25, 143)"
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
 
</script>
