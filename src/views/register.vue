<script setup>
import axios from "axios";
import {ref} from "vue";
const userName=ref("")
const password=ref("")
const passwordView=ref("password")


const register=()=>{
  let userList = {
    id:"",
    username: userName.value,
    password:password.value,
  };
  // console.log(userList)
  let config = {
    method: 'post',
    url: 'http://localhost:9002/user/enroll',
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    },
    data : JSON.parse(JSON.stringify(userList))
  };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<template>
  <div>
    <div class="form">
      <p class="form-title">注册你的帐号</p>
      <div class="input-container">
<!--        <input placeholder="用户名" v-model="userName">-->
        <el-input
            v-model="userName"
            class="w-50 m-2"
            size="large"
            placeholder="用户名"
        />
      </div>
      <div class="input-container">
<!--        <input :type="passwordView" placeholder="密码" v-model="password">-->
        <el-input
            v-model="password"
            type="password"
            placeholder="密码"
            show-password
            size="large"
        />
      </div>
      <button class="submit" @click="register">
        注 册
      </button>
      <div class="signup-link">
        已有账户？
        <router-link to="/login"><el-link :underline="false">登陆</el-link></router-link>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.form {
  margin: 10% auto;
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 360px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

</style>