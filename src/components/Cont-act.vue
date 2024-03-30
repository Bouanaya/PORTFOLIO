<template>
    <div class="w-full h-[25%] flex flex-col justify-center items-center space-y-2">
        <h1 class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">Contact Me</h1>
        <p class="text-fuchsia-800 ">Get in Touch</p>
    </div>
    <div class="grid grid-cols-2 space-x-10  h-3/4 px-4  container ">
        <div class="pl-60 pt-12 space-y-8 ">
            <div class="flex  items-center space-x-4   ">
                <WhatsApp></WhatsApp>
                <div class="">
                    <h1 class="font-semibold text-emerald-500">WhatsApp</h1>
                    <h3 class="text-sm text-fuchsia-600">+212673731912</h3>
                </div>
            </div>
            <div class=" flex space-x-4 1/2 ">
                <Email></Email>
                <div class="">
                    <h1 class="font-semibold text-emerald-500">E-mail</h1>
                    <h3 class="text-sm text-fuchsia-600">BouanayaSoufiane@gmail.com</h3>
                </div>
            </div>
        </div>
        <div class=" border border-emerald-700 rounded-lg p-4">
            <form action="">
                <div class="flex flex-col gap-8">
                    <div class="flex space-x-4">
                        <span class="relative  ">
                            <i
                                class="pi pi-user absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value1" placeholder="UserName" class="pl-10 w-60 " />
                        </span>
                        <span class="relative ">
                            <i
                                class="pi pi-whatsapp  absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value2" placeholder="Number" class="pl-10 w-full " />
                        </span>
                    </div>
                    <span class="relative ">
                        <i class="pi pi-at absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="value2" placeholder="Email" class="pl-10 w-full" />
                    </span>
                    <span>
                        <InputText v-model="value3" placeholder="Subject" class=" w-full" />
                    </span>
                    <span>
                        <Textarea v-model="value" rows="5" cols="30" placeholder="Messages" class="w-full" />

                    </span>
                    <span>
                        <Button icon="pi pi-arrow-right" label="Send"  type="submit" />
                    </span>
                </div>

            </form>

        </div>

    </div>
</template>

<script setup>
import WhatsApp from '../icons/Whats-App.vue'
import Email from '../icons/Ema-il.vue'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
 


</script>