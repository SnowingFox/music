<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { getBanner } from '@/service/api/recommend'

const { state } = useAsyncState(getBanner, {})
console.log(state)
</script>

<template>
  <div class="w-full p-32 bg-black rounded-lg" />
</template>
