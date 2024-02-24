// SCRIPT---------------------------------------------------------------------------------------------//

// import createApp
import { createApp } from 'vue'

// import vue3-touch events and use with vue app
import Vue3TouchEvents from "vue3-touch-events";
import App from './App.vue'

// create instance with createApp
const app = createApp(App);
// Attach Vue3TouchEvents to app instance
app.use(Vue3TouchEvents);

// mount the create app to id=#app
app.mount("#app");