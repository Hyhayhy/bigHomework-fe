<script setup>
import Navbar from './components/nav_tab/navbar.vue'
import router from './router';
import Footer from './components/nav_tab/Footer.vue'
</script>

  <template>
    <div class="common-layout">
      <el-container>
        <el-header><Navbar></Navbar></el-header>
        <el-main><router-view/></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </div>
  </template>

<style scoped>

</style>
