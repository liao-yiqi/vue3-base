<script setup lang="ts">
  // 原始 js 写法
  // defineProps({
  //   money: Number,
  //   car: String
  // })

  // ts 当中使用类型注解写 Props 的方式
  // defineProps<{
  //   money: number
  //   car?: string
  // }>()

  // 如果要定义默认值, 就要用以下的写法
  // 比较麻烦的写法 官方写法
  // 如果要设定默认值, 需要用到 withDefaults 函数
  // 里面传入两个参数, 1. defineProps 本身, 2. 默认值对象
  withDefaults(
    defineProps<{
      money: number;
      car?: string;
    }>(),
    {
      car: "没钱买车",
    },
  );

  // 使用vue - macros, 替代的方式
  // const { money, car = '未买车' } = $defineProps<{
  //   money: number
  //   car?: string
  // }>()

  const emit = defineEmits<{
    (e: "changeMoney", money: number): void;
  }>();

  const addMoneyChild = () => {
    emit("changeMoney", 1000);
    // emit('changeMoney')
  };
</script>

<template>
  <div>
    子组件 {{ money }}块 + {{ car }}
    <button @click="addMoneyChild">加钱</button>
  </div>
</template>
<style lang="scss" scoped></style>
