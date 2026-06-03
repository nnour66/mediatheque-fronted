<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter.ts'
import CBtn from '@/components/CBtn.vue'

const counterStore = useCounterStore()
</script>

<template>
  <CBtn @click="counterStore.increment()">Clique ici pour +</CBtn>
  <CBtn @click="counterStore.decrement()">Clique ici pour -</CBtn>
</template>
