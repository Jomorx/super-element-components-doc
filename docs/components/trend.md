<div>
    <div className="flex">
        <div>
            <se-trend text="营业额"></se-trend>
            <se-trend text="销售额" type="down"></se-trend>
        </div>
        <hr>
        <div>
            <se-trend reverseColor text="营业额"></se-trend>
            <se-trend reverseColor text="销售额" type="down"></se-trend>
        </div>
        <hr>
        <div>
            <se-trend text="营业额" upTextColor="red"  upIconColor="blue"></se-trend>
            <se-trend text="销售额" downTextColor="blue" type="down" downIconColor="blue"></se-trend>
            </div>
        <div>
            <se-trend text="营业额"  reverseColor upIcon="CaretTop"></se-trend>
            <se-trend text="销售额" type="down" reverseColor downIcon="CaretBottom"></se-trend>
        </div>
    </div>
</div>

<script setup>

</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        font-size: 20px;
        margin-right: 10px;
    }
}
</style>

```vue
<template>
    <div>
        <div className="flex">
            <div>
                <se-trend text="营业额"></se-trend>
                <se-trend text="销售额" type="down"></se-trend>
            </div>
            <hr>
            <div>
                <se-trend reverseColor text="营业额"></se-trend>
                <se-trend reverseColor text="销售额" type="down"></se-trend>
            </div>
            <hr>
            <div>
                <se-trend text="营业额" upTextColor="red"  upIconColor="blue"></se-trend>
                <se-trend text="销售额" downTextColor="blue" type="down" downIconColor="blue"></se-trend>
            </div>
            <div>
                <se-trend text="营业额"  reverseColor upIcon="CaretTop"></se-trend>
                <se-trend text="销售额" type="down" reverseColor downIcon="CaretBottom"></se-trend>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.flex {
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        font-size: 20px;
        margin-right: 10px;
    }
}
</style>

```
