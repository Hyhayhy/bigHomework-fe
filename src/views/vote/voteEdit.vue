<script setup>
import axios  from "axios";
import {ref} from "vue";
const title=ref("")
const voteList=ref([])
const newOption = ref('');
const editIndex = ref(-1);

const addVoteOption = () => {
  if (newOption.value.trim()) {
    if (editIndex.value !== -1) {
      // 如果是编辑状态，则更新
      voteList.value[editIndex.value] = newOption.value.trim();
      editIndex.value = -1;
    } else {
      // 否则添加新选项
      voteList.value.push(newOption.value.trim());
    }
    newOption.value = '';
  }
};

const deleteOption = (index) => {
  voteList.value.splice(index, 1);
};

const editOption = (index) => {
  newOption.value = voteList.value[index];
  editIndex.value = index;
};
const editVote=()=>{
  let data = {
    title: title.value,
    choice: voteList.value
  };
  // console.log(data)

  let config = {
    method: 'post',
    url: 'http://localhost:9002/poll/addPoll',
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json'
    },
    data : JSON.parse(JSON.stringify(data))
  };

  axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        window.location.href = '/vote';
      })
      .catch(function (error) {
        console.log(error);
      });
}
</script>

<template>
  <h1>添加投票标题</h1>
  <el-input v-model="title" placeholder="请输入投票题目" style="width: 20%"/><br>
  <div>
    <h1>添加投票选项</h1>
    <el-input v-model="newOption" placeholder="输入选项" style="width: 20%"/>&nbsp&nbsp&nbsp&nbsp
    <el-button @click="addVoteOption">发布选项</el-button>
    <h2>已有选项</h2>
    <ul>
      <div v-for="(option, index) in voteList" :key="index">
        选项{{index+1}}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp选项内容：{{ option }}&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp
        <el-button @click="editOption(index)">编辑</el-button>
        <el-button @click="deleteOption(index)">删除</el-button>
      </div>
    </ul>
  </div>
  <el-button @click="editVote">发布</el-button>
</template>

<style scoped lang="scss">

</style>