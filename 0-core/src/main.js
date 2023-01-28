import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './bootstrap.min.css'
import './style.css'

createApp(App).use(router,store).use(store).mount('#app')
