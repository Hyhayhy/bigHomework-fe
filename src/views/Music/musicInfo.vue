<script setup lang="ts">
import axios from "axios";
import {ref, defineExpose,onMounted} from "vue";
import { Search } from '@element-plus/icons-vue'
import {cloudSearch} from '@/api/api'
const musicUrl=ref("")
const musicId=ref("")
const musicName=ref("起风了")
const musicImg=ref("")
const musicLyc=ref("")
const emit = defineEmits([ "getAudioInfo" ]);
const getAudioInfo = () => {
  emit('getAudioInfo');
}
const searchMusic= async ()=>{
   await axios.get(`http://hexpect.cn:3000/cloudsearch?keywords=${musicName.value}`).then((data)=>{
    // console.log(data.data.result.songs[0])
    musicId.value=data.data.result.songs[0].id
    musicImg.value=data.data.result.songs[0].al.picUrl
  })
  // console.log(3)
  await getMusicUrl()
  await getMusicLyc()
  getAudioInfo()
}

async function getMusicLyc(){
  // console.log(3)
    await axios.get(`http://hexpect.cn:3000/lyric?id=${musicId.value}`).then((data)=>{
    // console.log(data.data.lrc.lyric)
    //  console.log(4)
    musicLyc.value=data.data.lrc.lyric
    // musicUrl.value=data.data.data[0].url;
  })
}

async function getMusicUrl(){
  // console.log(1)
  // console.log("#####")
  await axios.get(`http://hexpect.cn:3000/song/url/v1?id=${musicId.value}&level=standard`).then((data)=>{
    console.log(data.data.data[0].url)
    // console.log(2)
    musicUrl.value=data.data.data[0].url;
    // console.log("1")
  })
}

defineExpose({
  searchMusic,
  musicUrl,
  musicImg,
  musicLyc
})



interface LinkItem {
  value: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    { value: 'vue' },
    { value: 'element' },
    { value: 'cooking' },
    { value: 'mint-ui' },
    { value: 'vuex' },
    { value: 'vue-router' },
    { value: 'babel' },
  ]
}

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 1000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: Record<string, any>) => {
  // console.log(item)
}

onMounted(() => {
  links.value = loadAll()
  searchMusic()
})
</script>

<template>
  <el-autocomplete
      v-model="musicName"
      :fetch-suggestions="querySearchAsync"
      :placeholder="musicName"
      @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon">
        <Search />
      </el-icon>
    </template>
  </el-autocomplete>
</template>

<style scoped lang="scss">

</style>