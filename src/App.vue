<template>
    <div class=" bg-[#100D1C] dark:bg-white">
        <HeaderHome @scrollto="goto"></HeaderHome>

        <section ref="Home" class="container md:h-screen w-full py-16">
            <Home @scrollto="goto"></Home>
        </section>

        <section ref="About" class="container md:h-screen w-full py-16 relative">
            <About />
        </section>

        <section ref="Skills" class="container md:h-screen w-full py-16">
            <Skills></Skills>
        </section>
        <section ref="Service" class="container md:h-screen w-full py-16">
            <Service></Service>
        </section>
        <section ref="Portfolio" class="container md:h-screen w-full py-16">
            <Portfolio></Portfolio>
        </section>
        <section ref="Contact" class="container md:h-screen w-full py-16">
            <Contact></Contact>
        </section>
        <section class="h-full border-t-2 border-fuchsia-600 w-full py-10 mt-4">
            <Fotter></Fotter>
        </section>






    </div>
</template>

<script>
import HeaderHome from './components/Hea-der.vue'
import Home from './components/Ho-me.vue'
import About from './components/Abo-ut.vue';
import Skills from './components/Skil-ls.vue';
import Service from './components/Ser-vice.vue';
import Portfolio from './components/Port-folio.vue';
import Contact from './components/Cont-act.vue';
import Fotter from './components/Fot-ter.vue';

 

 


export default {
    components: {
        HeaderHome,
        About,
        Home,
        Service,
        Skills,
        Portfolio,
        Contact,
        Fotter

    },
    data() {
        return {
           
        }
    },
   
    methods: {
        goto(refName) {
            const element = this.$refs[refName];
            console.log(refName);
            const top = element.offsetTop;
            window.scrollTo(0, top);
           

        },
    },
    
};

</script>
<style scoped>
.poppins-thin {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
}

.poppins-extralight {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
}

.poppins-light {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.poppins-regular {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.poppins-medium {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
}

.poppins-semibold {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}

.poppins-bold {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.poppins-extrabold {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
}

.poppins-black {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-style: normal;
}

.poppins-thin-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: italic;
}

.poppins-extralight-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: italic;
}

.poppins-light-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: italic;
}

.poppins-regular-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: italic;
}

.poppins-medium-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: italic;
}

.poppins-semibold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: italic;
}

.poppins-bold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: italic;
}

.poppins-extrabold-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: italic;
}

.poppins-black-italic {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-style: italic;
}
</style>