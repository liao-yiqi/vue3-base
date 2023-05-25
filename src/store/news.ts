import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsStore = defineStore("news", () => {
  const activeId = ref(0);
  const changeActiveId = (id: number) => {
    activeId.value = id;
  };
  return {
    activeId,
    changeActiveId,
  };
});
