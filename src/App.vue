<script setup lang="ts">
  import { computed, ref } from "vue";
  import Child from "./components/Child.vue";
  const money = ref(100);
  const counts = ref(2);
  // setTimeout(() => {
  //   money.value++
  // }, 2000);
  const doubleNum = computed(() => counts.value * 2);
  console.log("doubleNum", doubleNum.value);
  const doubleMoney = computed<string>(() => (money.value * 140).toFixed(2));
  console.log("李总工资", doubleMoney.value);

  const list = ref<string[]>([]);
  // let list: string[] = [];
  const inputChange = (event: Event) => {
    const dom = event.target as HTMLInputElement;
    console.log(dom.value);
    list.value.push(dom.value);
    console.log(list);
  };
  const inputValue = ref("");
</script>

<template>
  <div>
    <Child :money="money" car="宝马" />
    <Child :money="money" @change-money="money = $event" />
    <input type="text" @change="inputChange" v-model="inputValue" />
  </div>
  <div>李总的工资{{ doubleMoney }}</div>
  <ul style="border: 1px solid salmon width: 100px; height: 100px;">
    <li style="border: 1px solid blue" v-for="item in list" :key="item">{{ item }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
