<template>
    <div>
        <Son :title="title" ref="son"></Son>
        <div>
            <span>{{global.userName}}pppp</span>
            <span>123</span>
        </div>
        <input type="text" v-model="textValue">
        <button @click="change">点击更改输入值</button>
    </div>
</template>
<script lang="ts" setup>
import Son from './son.vue';
import { GlobalStore } from '@/store';
import { ref } from 'vue';
const global = GlobalStore()
const textValue = ref('') 
const change = () => {
    /**
     * 修改state值的三种方式
     * 1、直接修改
     * 2、使用store里定义的methods修改
     * 3、利用$patch方法进行修改
     */
    // global.userName = textValue.value
    // global.setUserName(textValue.value)
    global.$patch({
        userName: textValue.value
    })
    console.log(textValue.value)
    title.value = textValue.value
}
const title = ref('')
const son = ref()


</script>>