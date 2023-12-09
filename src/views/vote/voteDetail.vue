<script setup>
import axios from "axios";
import {onMounted, ref,computed} from "vue";
import {useRouter} from "vue-router";
import { useUserStore } from '../../store/index';
const router = useRouter()
const pid = ref(router.currentRoute.value.params.pid)
const title = ref(router.currentRoute.value.params.title)
const choiceList = ref([])
const allVote = ref(0)
const flag = ref()
const voteCid = ref(0)
const num=ref(0)
//获取用户id
const userStore = useUserStore();
const userId = computed(() => userStore.userId);

const upVote=()=>{
  if(voteCid.value===0) alert("请提交选项")
  else addVote()
}
const addVote = () => {
  // console.log(userId.value)
  let config = {
    method: 'post',
    url: 'http://localhost:9002/vote/add?cid='+voteCid.value+'&uid='+userId.value+'&pid='+pid.value,
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    },
  };

  axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        location.reload()
        if(response.data.message==='请勿重复投票!') alert("请勿重复投票")
      })
      .catch(function (error) {
        console.log(error);
      });
}

const changeCid = (data) => {
  // voteCid.value = data
  // console.log(voteCid.value)
  num.value=num.value+1
  if(num.value%2===0) voteCid.value=0
  else voteCid.value=data
  // console.log(voteCid.value)
}

const deleteVote = () => {
  let config = {
    method: 'delete',
    url: 'http://localhost:9002/poll/'+pid.value,
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
    }
  };

  axios(config).then(function (response) {
        // console.log(JSON.stringify(response.data));
        // location.reload()
        window.location.href = '/vote';
      })
      .catch(function (error) {
        console.log(error);
      });
  };


onMounted(() => {
  let config = {
    method: 'post',
    url: 'http://localhost:9002/poll/option?pid=' + pid.value,
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    },
  };

  axios(config).then(function (response) {
    // console.log(response.data.data);
    choiceList.value = response.data.data
    for (let i = 0; i < choiceList.value.length; i++) {
      allVote.value += choiceList.value[i].votecount
    }
  })
      .catch(function (error) {
        console.log(error);
      });
})
</script>

<template>

  {{ title }}<br><el-button type="danger" @click="deleteVote">删除</el-button><br><br><br>
  <el-checkbox-group :max="1" v-model="flag">
    <div v-for="(option, index) in choiceList" :key="option.cid">
      <el-checkbox size="large" border style="margin-bottom: 10px" :label="option.cid" @change="changeCid(option.cid)">
        {{ option.text }}
      </el-checkbox>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="(option.votecount/allVote)*100"
                   style="width: 30%;margin-bottom: 15px">{{ option.votecount }}
      </el-progress>
    </div>
  </el-checkbox-group>
  <el-button @click="upVote">投票</el-button>
</template>

<style scoped lang="scss">

</style>