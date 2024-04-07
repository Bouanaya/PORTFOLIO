<template>
    <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
        <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Contact Me</h1>
        <p class="text-fuchsia-800  ">Get in Touch</p>
    </div>
    <div class="md:grid grid-cols-2 space-y-4 md:space-x-10  h-3/4 px-4  container ">
        <div class="md:pl-60 pt-12 space-y-8 ">
            <div class="flex  items-center space-x-4   ">
                <WhatsApp></WhatsApp>
                <div class="">
                    <h1 class="font-semibold text-emerald-500">WhatsApp</h1>
                    <h3 class="text-sm text-fuchsia-600">+212673731912</h3>
                </div>
            </div>
            <div class=" flex space-x-4  ">
                <Email></Email>
                <div class="">
                    <h1 class="font-semibold text-emerald-500">E-mail</h1>
                    <h3 class="text-sm text-fuchsia-600">BouanayaSoufiane@gmail.com</h3>
                </div>
            </div>
        </div>
        <div class=" border border-emerald-700 rounded-lg p-4">
            <form action="" ref="form" @submit.prevent="sendEmail">
                <div class="flex flex-col gap-8">
                    <div class="flex space-x-4">
                        <span class="relative  ">
                            <i
                                class="pi pi-user absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value1" placeholder="UserName" name="userName"
                                class="pl-10 md:w-60 w-full  " />
                        </span>
                        <span class="relative ">
                            <i
                                class="pi pi-whatsapp  absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value2" placeholder="Number" name="Number" class="pl-10 w-full " />
                        </span>
                    </div>
                    <span class="relative ">
                        <i class="pi pi-at absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="value3" placeholder="Email" name="to" class=" pl-10 w-full " />
                    </span>
                    <span>
                        <InputText v-model="value4" placeholder="Subject" name="Subject" class=" w-full" />
                    </span>
                    <span>
                        <Textareas v-model="value5" rows="5" cols="30" name="message" placeholder="message"
                            class="w-full" />

                    </span>
                    <span>
                        <Toast />
                        <Buttons icon="pi pi-arrow-right" label="Send" type="submit" severity="success" />
                    </span>

                </div>

            </form>

        </div>

    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import WhatsApp from '../icons/Whats-App.vue'
import Email from '../icons/Ema-il.vue'
import InputText from 'primevue/inputtext';
import Textareas from 'primevue/textarea';
import Buttons from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
export default {
    components: {
        WhatsApp,
        InputText,
        Email,
        Textareas,
        Buttons,
        Toast
    },
    data() {
        return {

            toast: useToast(), value1: "", value2: "", value3: "", value4:"",value5:""
             

        }
    },
    methods: {
        removeContent(){
            this.value1 = ""
            this.value2 = ""
            this.value3 = ""
            this.value4 = ""
            this.value5 = ""
            
        },
        showSuccess() {
            this.toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
        },
         showError (){
            this.toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        },
        sendEmail() {
            emailjs
                .sendForm('service_4d0ljtz', 'template_fcnom08', this.$refs.form, {
                    publicKey: 'tGHxG-tBZcZz4LASv',
                
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        this.removeContent()
                        this.showSuccess()

                       
                    },
                    (error) => {
                        this.removeContent()
                        this.showError()

                        console.log('FAILED...', error.text);

                    },
                );
        },

        
    },
};
 


</script>