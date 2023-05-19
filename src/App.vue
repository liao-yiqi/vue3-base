<template>
  {{ student.name }}的薪资{{ student.salary }}
  <button @click="add">增加</button>
</template>

<script>
  // ref 就是一个组合式API
  import { ref } from "vue";
  export default {
    setup() {
      const student = ref({ name: "李哥", salary: 15000 });
      const add = () => {
        student.value.salary++;
      };
      return { student, add };
    },
  };
</script>
