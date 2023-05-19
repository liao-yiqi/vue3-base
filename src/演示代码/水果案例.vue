<template>
  <div>
    <input type="text" v-model="inputText" />
  </div>
  <button @click="add">添加</button>
  <div>
    <ul>
      <li v-for="item in itemList" :key="item.id" style="border: 1px solid black" @click="removeItem(item)">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const add = () => {
    if (inputText.value !== "") {
      const newItem = { id: Date.now(), text: inputText.value };
      if (!itemList.value.some((item) => item.text === newItem.text)) {
        itemList.value.push(newItem);
      }
      inputText.value = "";
    }
  };
  const removeItem = (item) => {
    const index = itemList.value.findIndex((element) => element === item);
    if (index !== -1) {
      itemList.value.splice(index, 1);
    }
  };
  const inputText = ref("");
  const itemList = ref([]);
</script>
<style lang="scss" scoped></style>
