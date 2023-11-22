<script setup>
import axios from "axios";
import {ref, onMounted} from "vue";

const str = ref("");
const flag = ref(true)
const str2 = ref("")
const getJinJu = () => {
  axios.get("https://v1.hitokoto.cn/").then((data) => {
    // console.log(data.data.hitokoto);
    str.value = data.data.hitokoto;
    flag.value = false;
    setTimeout(() => {
      flag.value = true;
    }, 60000)
  });
}
onMounted(() => {
  // axios.get('http://localhost:9088/hello').then((data) => {
  //   str2.value = data.data
  //   // console.log(data.data)
  // })
})
</script>
<template>
  <div>
    <h1>我是home</h1>
    <h1>{{ str }}</h1>
    <el-row class="mb-4">
      <el-button v-if="flag" type="success" @click="getJinJu">获取金句</el-button>
      <el-button v-else type="danger" disabled>获取金句</el-button>
    </el-row>
    <h1>{{ str2 }}</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>

  </div>
</template>
<style scoped lang="scss">

</style>
