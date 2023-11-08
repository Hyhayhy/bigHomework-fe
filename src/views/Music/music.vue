<script setup>
import musicInfo from './musicInfo.vue'
import {onMounted, ref} from "vue";

const information=ref(null)
const mUrl=ref("")

const search=()=>{
  information.value.searchMusic()
}
function getAudioUrl(){
  mUrl.value=information.value.musicUrl
  // console.log(mUrl.value)
}
onMounted(()=>{
  // console.log(information.value.musicUrl)
})
</script>
<template>
  <div>
    <h1>我是music</h1>
    <br>
    <music-info ref="information" @getAudioUrl="getAudioUrl"></music-info>
    <!-- audio标签 -->
    <audio ref="audio" :src="mUrl" loop="loop" controls></audio>
    <br>
    <el-button @click="search">搜索</el-button>
  </div>
</template>
<style scoped lang="scss">

</style>