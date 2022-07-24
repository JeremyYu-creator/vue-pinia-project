import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import "@/assets/style/global.less"
import router from './router'

const app = createApp(App) //创建全局的app实例

app
    .use(store)
    .use(router)
    .mount('#app')
