<template>
  <div ref="myDiv">使用组件</div>
  <Form ref="myForm" title="登录表单" @myEmit="handleMyEmit" />
  <hr />
  <Form ref="myForm" title="注册表单" />
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import Form from "./components/Form.vue";
  onMounted(() => {
    console.log(Form);
    console.log(myDiv.value);
    console.log(myForm.value);
    console.log("获取子组件数据", myForm.value.msg.name);
  });
  const myDiv = ref(null);
  const myForm = ref(null);
  const handleMyEmit = (data) => {
    console.log("子传父数据", data);
  };
</script>
<style lang="scss" scoped></style>
