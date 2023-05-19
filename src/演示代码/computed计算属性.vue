<template>
  <div>全部成绩{{ scoreList }}</div>
  <div>优秀成绩{{ list }}</div>
</template>

<script setup>
  import { ref, computed } from "vue";
  const scoreList = ref([70, 80, 90, 100]);
  const list = computed(() => scoreList.value.filter((item) => item >= 90));
</script>
<style scoped lang="less"></style>
