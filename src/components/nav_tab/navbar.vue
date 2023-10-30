<script lang="ts" setup>
import { ref } from "vue";
import changeDark from "./changeDark.vue";
const value1 = ref(true);
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    bg-color="#000000"
    popper-effect="dark"
    :router="true"
  >
    <el-menu-item index="/">
      <img
        style="width: 100px;height: 65px;"
        src="/src/image/hwx.svg"
        alt="HWX logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">主页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>创意工坊</template>
      <el-menu-item index="/music">音乐</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="users">用户</el-menu-item>
    <el-menu-item index="4">
      <changeDark></changeDark>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}
</style>
