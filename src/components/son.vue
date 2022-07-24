<script setup lang="ts">
import {Button} from 'ant-design-vue'
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
    <div>
      <a-button>Add</a-button>
    </div>    
</template>
