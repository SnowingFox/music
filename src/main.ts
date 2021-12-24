import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'
import 'mdui'
import 'mdui/dist/css/mdui.min.css'
import loadingDirective from '@/directives/loading/directive'

createApp(App).use(store).use(router).directive('loading', loadingDirective).mount('#app')
