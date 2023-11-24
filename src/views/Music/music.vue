<script setup>
import musicInfo from './musicInfo.vue'
import {onMounted, ref} from "vue";

const information=ref(null)
const mUrl=ref("")
const iUrl=ref("")
const lyric=ref("")
const search=()=>{
  information.value.searchMusic()
}
function getAudioInfo(){
  mUrl.value=information.value.musicUrl
  iUrl.value=information.value.musicImg
  lyric.value=information.value.musicLyc
  // console.log(lyric.value)
}
onMounted(()=>{
  // console.log(information.value.musicUrl)
})
</script>
<template>
  <div>
    <music-info ref="information" @getAudioInfo="getAudioInfo"></music-info>
    <el-button @click="search" >搜索</el-button>
    <!-- audio标签 -->
    <br>
    <audio ref="audio" :src="mUrl" loop="loop"  controls></audio>
    <br>
    <el-image :src="iUrl" style="height: 300px;width: 300px"></el-image>
    <br>
    {{lyric}}
  </div>
</template>
<style scoped lang="scss">

</style>