<div>
    <se-choose-icon  title="选择图标" v-model:visible="visible">
        选择图标
    </se-choose-icon>
</div>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```vue
<template>
    <div>
        <se-choose-icon title="选择图标" v-model:visible="visible">
            选择图标
        </se-choose-icon>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

let visible = ref<boolean>(false)
</script>
```