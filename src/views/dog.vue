<template>
  <div class="demo-image__preview">
    <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>

import pubUse from '@/utils/pubUse';
import {ref} from "vue";
const url = ref(pubUse.getAssetsFile('hwx5.jpg'))
const srcList = [
  pubUse.getAssetsFile('hwx5.jpg'),
]
</script>

<style scoped>
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
