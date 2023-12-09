<script setup>
import { useUserStore } from '../../store/index';
import { computed } from 'vue';

const userStore = useUserStore();
const userId = computed(() => userStore.userId);

const logout = () => {
  userStore.logout();
};
</script>
<template>
  <div>
    用户 ID: {{ userId }}
    <br>
    <button @click="logout">登出</button>
  </div>
</template>
<style scoped lang="scss">

</style>