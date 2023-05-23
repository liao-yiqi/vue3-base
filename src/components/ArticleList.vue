<script setup lang="ts">
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { ArticleItem, ResArticles } from "../types/data";
  const list = ref<ArticleItem[]>([]);
  onMounted(async () => {
    const { data } = await axios<ResArticles>({
      url: `http://geek.itheima.net/v1_0/articles`,
      params: {
        channel_id: 0,
        timestamp: Date.now(),
      },
    });
    list.value = data.data.results;
  });
</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="item in list" :key="item.art_id">
      <p class="title">{{ item.title }}</p>
      <img class="img" v-for="img in item.cover.images" :src="img" alt="" />
      <div class="info">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
