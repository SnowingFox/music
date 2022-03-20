import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

// styles
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './index.css'
import '@/assets/scss/index.scss'
import 'swiper/css'
import 'swiper/css/pagination'

const app = createApp(App)

// plugins
app.use(router).use(Quasar, {
  plugins: {},
}).use(createPinia())

// directive

app.mount('#app')
