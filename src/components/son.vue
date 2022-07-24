<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  person: {
    type: Object,
    default() {
        return {}
    }
  }
})  
const emitEvent = defineEmits(['update:person'])
// const changeName = () => {
//     props
// }
</script>

<template>
    <div>
        uoi{{props.title}}
    </div>    
</template>
