import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'primeicons/primeicons.css'

// API configuration
window.API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.mount('#app')

