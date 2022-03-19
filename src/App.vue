<script setup lang="ts">

import Header from '@/components/Header/Header.vue'
</script>

<template>
  <div class="w-screen h-screen relative overflow-hidden bg-slate-100">
    <Header />
    <RouterView />
  </div>
</template>
