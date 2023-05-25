<script setup lang="ts">
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { ResChannels, ChannelItem } from "../types/data";
  import { useNewsStore } from "../store/news";
  import { storeToRefs } from "pinia";
  const store = useNewsStore();
  const { activeId } = storeToRefs(store);
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
        :class="{ active: activeId === item.id }"
        href="javascript:;"
        v-for="item in list"
        :key="item.id"
        @click="store.changeActiveId(item.id)"
      >
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>
