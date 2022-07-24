import { defineStore } from 'pinia'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'


interface GlobalState {
    token: string,
    userName: string,
}

export const GlobalStore = defineStore(
    // 两种使用方式：将模块的名字和state等属性放在一起；另一种是将分开写
        // { // 命名一个和全局的如何进行模块化处理？
        //     id: 'GlobalStore',
        //     state:(): GlobalState => ({
        //         token: '',
        //         userName: '',
        //     }),
        //     getters: {

        //     },
        //     actions: {
        //         setToken(token: string) {
        //             this.token = token // 这个地方现在还没弄太明白，理论上应该是state里的数据进行赋值，但是这里是调用了this
        //         },
        //         setUserName(userName: string) {
        //             this.userName = userName
        //         }
        //     },
        //     persist:{
        //         enabled: true,
        //         strategies: [
        //             {
        //                 key: 'GlobalStore',
        //                 storage: localStorage
        //             }
        //         ]
        //     }
        // }
        'GlobalStore',  {
            state:(): GlobalState => ({
                token: '',
                userName: '',
            }),
            getters: {
    
            },
            actions: {
                setToken(token: string) {
                    this.token = token // 这个地方现在还没弄太明白，理论上应该是state里的数据进行赋值，但是这里是调用了this
                },
                setUserName(userName: string) {
                    this.userName = userName
                }
            },
            persist:{
                enabled: true,
                strategies: [
                    {
                        key: 'GlobalStore',
                        storage: localStorage
                    }
                ]
            }
        }
)
const pinia = createPinia()
pinia.use(piniaPersist)
export default pinia