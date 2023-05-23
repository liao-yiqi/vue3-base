<script setup lang="ts">
  import axios from "axios";
  import { onMounted, ref } from "vue";
  import { ResChannels, ChannelItem } from "../types/data";
  const props = defineProps<{
    activeId: number;
  }>();
  const emit = defineEmits<{
    (e: "changeActiveId", id: number): void;
  }>();
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
        @click="emit('changeActiveId', item.id)"
        class="item"
        :class="{ active: props.activeId === item.id }"
        href="javascript:;"
        v-for="item in list"
        :key="item.id"
      >
        推荐{{ item.name }}
      </a>
    </nav>
  </div>
</template>
