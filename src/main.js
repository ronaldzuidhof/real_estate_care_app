// SCRIPT---------------------------------------------------------------------------------------------//

// import createApp
import { createApp } from 'vue'
import App from './App.vue'

// import vue3-touch events and use with vue app
import Vue3TouchEvents from "vue3-touch-events";

// import vuetify 
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// create instance with createApp
const app = createApp(App);
// Attach Vue3TouchEvents and vuetify to app instance
app.use(Vue3TouchEvents);
app.use(vuetify);

// mount the create app to id=#app
app.mount("#app");