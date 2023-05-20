<template>
  <h1>这是祖辈</h1>
  <div class="box">
    <ParentCom />
    <div class="box">
      <ChildCom />
    </div>
  </div>
</template>

<script setup>
  import ParentCom from "./components/parentCom.vue";
  import ChildCom from "./components/childCom.vue";
  import { provide, ref } from "vue";
  const count = ref("🐔");
  provide("myCount", count);
</script>
<style lang="scss" scoped>
  .box {
    border: 1px solid mediumaquamarine;
    margin: 20px 20px 20px;
    padding: 10px 10px 10px;
  }
</style>
