<script setup lang="ts">
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { ResChannels, ChannelItem } from "../types/data";
  const list = ref<ChannelItem[]>([]);
  onMounted(async () => {
    const { data } = await axios<ResChannels>({
      url: "http://geek.itheima.net/v1_0/channels",
    });
    list.value = data.data.channels;
  });
</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a
        class="item"
        :class="{ active: i === 0 }"
        href="javascript:;"
        v-for="(item, i) in list"
        :key="item.id"
      >
        推荐{{ item.name }}
      </a>
    </nav>
  </div>
</template>
