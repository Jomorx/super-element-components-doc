<div>
    <se-choose-city @changeCity="changeCity" @changeProvince="changeProvince"/>
</div>

<script setup>

const changeCity = (val)=>{
console.log('城市改变了',val)
}
const changeProvince = (val)=>{
console.log('省份改变了',val)
}
</script>


```vue
<template>
    <div>
        <se-choose-city @changeCity="changeCity" @changeProvince="changeProvince"/>
    </div>
</template>

<script setup lang='ts'>
interface City {
  code: string;
  spell: string;
  name: string;
  label:string
}

const changeCity = (val:City)=>{
console.log('城市改变了',val)
}
const changeProvince = (val:string)=>{
console.log('省份改变了',val)
}
</script>

<style scoped lang='scss'>

</style>

```