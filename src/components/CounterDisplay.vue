<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter.ts'

const counterStore = useCounterStore()
</script>

<template>
  <p>{{ counterStore.counter }}</p>
</template>
