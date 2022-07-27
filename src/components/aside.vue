<template>
    <a-layout style="min-height: 100vh">
        <a-layout-header/>
        <a-layout>
            <!--左侧menulist-->
            <a-layout-sider v-model:collapsed="collapsed" collapsible>
                <a-menu v-model:selectedKeys="selectedKeys" :theme="theme" mode="inline" style="margin-top: -4px">
                    <a-sub-menu v-for="item in MenuList" :key="item.value">
                        <template #title>
                            <span>
                                <pie-chart-outlined />
                                {{item.name}}
                            </span>
                        </template>
                        <a-menu-item 
                            @click="changeRoute(iitem.subName)" 
                            v-for="iitem in item.isChildren" 
                            :key="iitem.subIndex">
                            <pie-chart-outlined />
                            <span>{{iitem.subName}}</span>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <!--右侧content-->
            <a-layout>
                <a-layout-content>
                    <Content :name="currentName"/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import Content from '@/components/content.vue'
import { ref } from 'vue';
import { PieChartOutlined,} from '@ant-design/icons-vue';
components: {
    PieChartOutlined
    Content
}
const selectedKeys = ref(<string[]>['1'])
const theme = ref('dark')
const collapsed = ref(false)
const MenuList = [
    {
        name: '首页',
        value: '1',
        isChildren: [
            {
                subName: '1-1',
                subIndex: '101'
            },
            {
                subName: '1-2',
                subIndex: '102'
            },
        ]
    },
    {
        name: '第二页',
        value: '2',
        isChildren: [
            {
                subName: '2-1',
                subIndex: '201',
            }
        ],
    },
    {
        name: '第三页',
        value: '3',
        isChildren: [
            {
                subName: '3-1',
                subIndex: '301',
            }
        ]
    },
]
const currentName = ref('')
const changeRoute = (name: string) => {
    currentName.value = name
}
</script>