<script lang="ts" setup>
import { ref } from 'vue'

const circleUrl = ref('/src/image/hwx3.jpg',)
</script>

<template>
  <el-avatar :size="40" :src="circleUrl" />
</template>

<style scoped>
</style>
