import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// plugins
app.use(Quasar, {
  plugins: {},
}).use(createPinia())

// directive

app.mount('#app')
