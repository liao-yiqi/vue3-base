<template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="./assets/logo.png" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
</template>
<script>
  // ref 就是一个组合式API
  import { ref } from "vue";
  export default {
    setup() {
      // 显示隐藏
      const show = ref(true);
      const toggle = () => {
        show.value = !show.value;
      };
      // 计数器
      const count = ref(0);
      const increment = () => {
        count.value++;
      };

      return { show, toggle, count, increment };
    },
  };
</script>
