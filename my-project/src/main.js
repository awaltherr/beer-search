import {
    createApp
} from 'vue'

import router from './router.js'

import {
    registerSW
} from 'virtual:pwa-register'
registerSW()

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')