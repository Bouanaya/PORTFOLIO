 import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Panel from "primevue/panel";
import Lara from "./presets/lara";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(PrimeVue, { unstyled: true, pt: Lara }); 
app.use("Panel", Panel);




app.use(createPinia());
app.use(router);
 
app.mount("#app");


