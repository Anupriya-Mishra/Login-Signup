import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './axios'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).use(router).mount('#app')
