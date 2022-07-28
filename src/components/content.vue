<template>
    <div>{{name}}</div>
    <!-- <router-view name="a" class="router-style"></router-view> -->
</template>
<script lang="ts" setup>
const props = defineProps({
    name: String
})

</script>
<style lang="less">
.router-style{
    margin-left: 200px;
}
</style>