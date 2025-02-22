import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$filters = {
currency(value) {
    return `$${value.toFixed(2)}`
}
}

createApp(App).use(store).use(router).mount('#app')