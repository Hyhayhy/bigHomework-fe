<script lang="ts" setup>
import { ref } from "vue";
import changeDark from "./changeDark.vue";
import Avtar from './Avtar.vue'
const value1 = ref(true);
const activeIndex = ref("1");
const hasLogin =ref(false)
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};

</script>
<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      popper-effect="dark"
      :router="true"
      style="--el-menu-hover-bg-color: rgb(255,255,255);width: 100%;margin: 0 auto"
      background-color="#fff"
  >
    <el-menu-item index="/">
      <img
          style="width: 60px; height: 65px"
          src="/src/image/H-01.png"
          alt="HWX logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/" icon='el-icon-caret-top'>主页</el-menu-item>
<!--    <el-sub-menu index="2">-->
<!--      <template #title>创意工坊</template>-->
<!--      <el-menu-item index="/music">音乐</el-menu-item>-->
<!--    </el-sub-menu>-->
    <el-menu-item index="/music">音乐</el-menu-item>
    <el-menu-item v-if="hasLogin" index="/login">登陆</el-menu-item>
<!--    <el-sub-menu index="/users" :collapse-transition="false">-->
<!--      <template #title><Avtar></Avtar></template>-->
<!--      <el-menu-item index="2-1">item one</el-menu-item>-->
<!--      <el-menu-item index="2-2">item two</el-menu-item>-->
<!--      <el-menu-item index="2-3">item three</el-menu-item>-->
<!--    </el-sub-menu>-->
    <el-menu-item index="/vote">投票</el-menu-item>
    <el-menu-item index="/bookMain">书籍</el-menu-item>
    <el-menu-item index="/users"><Avtar></Avtar></el-menu-item>
    <el-menu-item >
      <changeDark></changeDark>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}

/* 水平时，去除底部白边。 */
.el-menu.el-menu--horizontal {
  border-bottom: 0;
  // width: 100%;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom:none;
  text-decoration: none;
}
.el-menu {
  .el-menu-item.is-active {
    background-color: #fff !important;
    border-bottom: #fff !important;
  }
}

</style>
