<script setup>
import Navbar from './components/nav_tab/navbar.vue'
import router from './router';
import Footer from './components/nav_tab/Footer.vue'
import dog from './views/dog.vue'
</script>

<template>
  <Navbar></Navbar>
  <router-view/>
  <dog></dog>
  <Footer class="foot"></Footer>
</template>

<style scoped>
.foot{
  height: 60px;
  line-height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
