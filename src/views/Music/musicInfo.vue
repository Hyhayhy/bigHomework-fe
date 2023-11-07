<script setup lang="ts">
import axios from "axios";
import {ref, defineExpose,onMounted} from "vue";
const musicUrl=ref("")
const musicId=ref("")
const musicName=ref("小苹果")
const emit = defineEmits([ "getAudioUrl" ]);
const getAudioUrl = () => {
  emit('getAudioUrl');
}
const searchMusic=()=>{
  axios.get(`http://localhost:3000/search?keywords=${musicName.value}`).then((data)=>{
    // console.log(data.data.result.songs[0].id)
    musicId.value=data.data.result.songs[0].id;
    getMusicUrl()
  })
}
function getMusicUrl(){
  // console.log("#####")
  axios.get(`http://localhost:3000/song/url/v1?id=${musicId.value}&level=standard`).then((data)=>{
    // console.log(data.data.data[0].url)
    musicUrl.value=data.data.data[0].url;
    // console.log("12")
    getAudioUrl()
  })
}

defineExpose({
  searchMusic,
  musicUrl,
})



interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
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
  }, 3000 * Math.random())
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
})
</script>

<template>
  <el-autocomplete
      v-model="musicName"
      :fetch-suggestions="querySearchAsync"
      :placeholder="musicName"
      @select="handleSelect"
  />
</template>

<style scoped lang="scss">

</style>