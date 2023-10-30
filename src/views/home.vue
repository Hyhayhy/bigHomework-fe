<script setup>
import axios from "axios";
import { ref } from "vue";
const str = ref("");
const flag=ref(true)
const getJinJu=()=>{
  axios.get("https://v1.hitokoto.cn/").then((data) => {
  // console.log(data.data.hitokoto);
  str.value = data.data.hitokoto;
  flag.value=false;
  setTimeout(()=>{
    flag.value=true;
  },60000)
});
}
</script>
<template>
  <div>
    <h1>我是home</h1>
    <h1>{{ str }}</h1>
    <el-row class="mb-4">
    <el-button v-if="flag" type="success" @click="getJinJu">获取金句</el-button>
    <el-button v-else type="danger" disabled >获取金句</el-button>
  </el-row>
  </div>
</template>
<style scoped lang="scss"></style>
