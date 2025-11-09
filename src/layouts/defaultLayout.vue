<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>
