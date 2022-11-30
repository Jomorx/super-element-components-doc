<se-choose-date :disabledToday="false" @startChange="startChange" @endChange="endChange" :startOptions="startOptions" :endOptions="endOptions">
</se-choose-date>

<script setup>
const startChange= (val)=>{
    console.log(val)
}

const endChange= (val)=>{
    console.log(val.startDate,val.endDate)
}
//开始结束配置项
const startOptions={}
const endOptions={}
</script>