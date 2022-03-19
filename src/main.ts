import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from '@/router'
import '@/assets/scss/index.scss'

const app = createApp(App)

// plugins
app.use(router).use(Quasar, {
  plugins: {},
}).use(createPinia())

// directive

app.mount('#app')
