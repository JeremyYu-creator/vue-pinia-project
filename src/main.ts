import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import "@/assets/style/global.less"
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';

const app = createApp(App) //创建全局的app实例

app
    .use(store)
    .use(router)
    .use(Antd)
    .mount('#app')
