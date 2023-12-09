<script setup>
import Navbar from './components/nav_tab/navbar.vue'
import router from './router';
import Footer from './components/nav_tab/Footer.vue'
import loading from './components/loading.vue'
</script>

  <template>
    <div class="common-layout">
      <el-container>
        <el-header><Navbar></Navbar></el-header>
        <el-main><router-view/></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </div>
<!--    <div class="load"><loading></loading></div>-->

  </template>

<style scoped>
.load {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
