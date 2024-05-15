<script setup>
import { RouterView } from 'vue-router';
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<template>
  <header class="max-w-[1456px] mx-auto">
    <AppNavbar />
  </header>

  <RouterView />
</template>
