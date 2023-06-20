import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.css'
import './style.css'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:4396'
app.config.globalProperties.$http = axios
  
app.mount('#app')
