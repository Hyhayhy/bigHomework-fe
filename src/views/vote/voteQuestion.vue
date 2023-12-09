<script setup >
import voteDetail from './voteDetail.vue'
import {ref,onMounted} from "vue";
import axios  from "axios";
let questionList=ref({})
const getQuestionList=(data)=>{
  // console.log(data)
  questionList.value=data
}

onMounted(()=>{
  let config = {
    method: 'get',
    url: 'http://localhost:9002/poll/topics',
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    },
  };

  axios(config).then(async function (response) {
        // console.log(response.data);
        // questionList=response.data.data;
        // console.log(questionList)
        await getQuestionList(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
})
</script>

<template>
  <router-link to="/vote/voteEdit"><el-button type="primary">创建你的投票</el-button></router-link>
  <div v-for="question in questionList" :key="question.pid">
    <router-link :to="{name: 'voteDetail', params: {pid: question.pid,title: question.title}}">
      <el-link :underline="false">{{question.title}}</el-link>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>