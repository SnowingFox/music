<template>
  <Tab class="Tab" />
  <router-view />
  <router-view v-slot="{ Component }" name="transformInOut">
    <transition name="transform">
      <component :is="Component" />
    </transition>
  </router-view>
  <player></player>
</template>
<script setup lang="ts">
import Tab from '@/components/Tab.vue'
import Player from '@/components/player/Player.vue'
</script>
