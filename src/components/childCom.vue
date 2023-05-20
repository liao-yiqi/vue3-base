<template>
  <div>这是子辈{{ count }}</div>
</template>

<script setup>
  import { inject } from "vue";

  const count = inject("myCount");
</script>
<style lang="scss" scoped></style>
