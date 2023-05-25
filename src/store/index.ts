import { defineStore } from "pinia";
import { computed, ref } from "vue";
// defineStore 的传参, 第一个参数是当前仓库名, 第二个可以是对象也可以是函数
// 如果是对象, 用的就是选项式语法, 定义 state, action
// 如果是函数, 就是组合式语法
// defineStore 这个函数不是返回仓库示例, 而是返回一个可以返回仓库示例的函数
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const setCount = () => {
    count.value++;
  };
  // actions
  const asyncSetCount = () => {
    setTimeout(() => {
      count.value++;
    }, 1000);
  };
  return { count, doubleCount, setCount, asyncSetCount };
});
