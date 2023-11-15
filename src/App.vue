<script setup>
import Navbar from './components/nav_tab/navbar.vue'
import router from './router';
import Footer from './components/nav_tab/Footer.vue'
import dog from './views/dog.vue'
</script>

  <template>
    <div class="common-layout">
      <el-container>
        <el-header><Navbar></Navbar></el-header>
        <el-main><router-view/></el-main>
        <dog></dog>
        <el-footer><Footer class="foot"></Footer></el-footer>
      </el-container>
    </div>
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
