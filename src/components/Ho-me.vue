<template>
    <section class="" ref="SkillsSection">
        <div class="container  flex space-x-20  h-screen py-16 ">
            <iconHome />
            <ContentHome />
            
            </div>
      

    </section>
</template>

<script setup>
import { ref } from 'vue';
import iconHome from '../components/icons-Home.vue'
import ContentHome from '../components/Content-home.vue'
const SkillsSection = ref(null);
 

</script>
 

 