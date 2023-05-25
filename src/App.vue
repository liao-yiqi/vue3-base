<script setup lang="ts">
  import ChannelNav from "./components/ChannelNav.vue";
  import ArticleList from "./components/ArticleList.vue";
  import { ref } from "vue";
  const activeId = ref(0);
  import { useCounterStore } from "./store";
  const store = useCounterStore();
</script>

<template>
  <!-- 显示state数据 -->
  {{ store.count }}
  <!-- 显示getter数据 -->
  {{ store.doubleCount }}
  <!-- 调用同步函数 -->
  <button @click="store.setCount">改数据</button>
  <!-- 调用异步函数 -->
  <button @click="store.asyncSetCount">异步改数据</button>
  <ChannelNav @change-active-id="activeId = $event" :activeId="activeId" />
  <ArticleList :activeId="activeId" />
</template>
<style lang="scss" scoped></style>
