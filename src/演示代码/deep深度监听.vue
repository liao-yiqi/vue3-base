<template>
  <div>{{ user.name }}今年{{ user.info.age }}岁了.是个{{ user.info.gender }}</div>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script setup>
  import { ref, watch } from "vue";
  const user = ref({
    name: "李某",
    info: {
      age: 18,
      gender: "男生",
    },
  });
  const changeName = () => {
    user.value.name = "🐔";
  };
  const changeAge = () => {
    user.value.info.age++;
  };
  watch(
    () => user,
    () => {
      console.log(user.value.info.age, user.value.name);
    },
    {
      deep: true,
      //页面进来就监听
      immediate: true,
    }
  );
</script>
<style scoped lang="less"></style>
