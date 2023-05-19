<template>
  <div>计数器: {{ count }}</div>
  <button @click="handleClick">+1</button>
  <div>{{ user.name }}今年{{ user.age }}岁了</div>
  <button @click="passYear">+1</button>
  <div>{{ msg }}</div>
  <button @click="translate">🐔</button>
</template>

<script setup>
  import { ref, watch } from "vue";
  //计数器
  const count = ref(0);
  const handleClick = () => {
    count.value++;
  };
  //监听一个响应式数据
  watch(count, () => {
    //监听后干什么取决于业务需求
    console.log(count.value);
  });
  //用户数据
  const user = ref({ name: "李某", age: 20 });
  const passYear = () => {
    user.value.age++;
  };
  //文字消息
  const msg = ref("你好世界");
  const translate = () => {
    msg.value = "good";
  };
  //监听多个需要用数组
  watch([count, msg], () => {
    console.log(count.value, msg.value);
  });
</script>
<style scoped lang="less"></style>
