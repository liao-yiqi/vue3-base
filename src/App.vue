<script setup lang="ts">
  import ChannelNav from "./components/ChannelNav.vue";
  import ArticleList from "./components/ArticleList.vue";
  import { ref } from "vue";
  const activeId = ref(0);
</script>

<template>
  <ChannelNav @change-active-id="activeId = $event" :activeId="activeId" />
  <ArticleList :activeId="activeId" />
</template>
<style lang="scss" scoped></style>
