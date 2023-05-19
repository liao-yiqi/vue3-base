<template>
  <h2>{{ title }}</h2>
  <div>
    账号 {{ msg.name }}
    <input type="text" />
    密码
    <input type="text" />
    <button @click="handleClick">提交</button>
  </div>
</template>

<script setup>
  const msg = { name: "🐔" };
  defineExpose({ msg });
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
  const emit = defineEmits(["myEmit"]);
  const handleClick = () => {
    emit("myEmit", "🏀");
  };
</script>
<style lang="scss" scoped></style>
