<template>
  {{ student.name }}的薪资{{ student.salary }}
  <button @click="add">增加</button>
</template>

<script setup>
  // ref 就是一个组合式API
  import { ref } from "vue";
  const student = ref({ name: "李哥", salary: 15000 });
  const add = () => {
    student.value.salary++;
  };
</script>
