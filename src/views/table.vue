<template>
    <div>
        <a-button type="primary" :loading="buttonStatus" @click="submit">点击</a-button>
        <a-button type="primary" danger>禁止点击</a-button>
        <a-button type="primary" shape="circle" size="large">点击</a-button>
        <a-button type="primary" class="basic_button">
            <template #icon>
                <SearchOutlined />
                Search
            </template>
        </a-button>
        <a-tooltip title="search">
            <a-button type="primary" shape="circle" size="large">
                <template #icon><SearchOutlined />
                </template>
            </a-button>
        </a-tooltip>
        <a-radio-group v-for="item in radioList" :key="item.value" @change="changeRadio(item.name)" v-model:value="checkValue">
            <a-radio :value="item.value">{{item.name}}</a-radio>
        </a-radio-group>
         <span>{{checkedText}}</span>
    </div>
</template>
<script lang="ts" setup>
// import { Button,  } from 'ant-design-vue';
import { ref } from 'vue';
import {SearchOutlined} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue';
Components:{
    SearchOutlined
}
const buttonStatus = ref(false)
const submit = () => { // 模拟提交事件
    buttonStatus.value = true
    setTimeout(() => {
        buttonStatus.value = false
    },3000)
}
const radioList = [
    {
        name: '文本',
        value: '1',
    },
    {
        name: '数字',
        value: '2',
    },
    {
        name: '字母',
        value: '3',
    },
]
const checkValue = ref('1')
const checkedText = ref('文本')
const radioMap = ['文本', '数字', '字母']
const changeRadio = (name: string) => {
    let valuePlace = radioMap.indexOf(name)
    if (valuePlace !== -1) {
        checkedText.value = radioMap[valuePlace]
    } else {
        message.error('当前信息有误额')
    }
}

</script>
<style lang="less">
.basic_button {
    width: @basic-button-width;
    height: @basic-button-height;
    display: flex;
    justify-content: space-around;
    align-items: center
}
</style>