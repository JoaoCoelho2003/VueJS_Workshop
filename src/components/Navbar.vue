<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// ===== SOLUTION =====
const isMobileMenuOpen = ref(false);

const route = useRoute();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const isActive = computed(() => (path: string) => {
  return route.path === path;
});
// ===== END SOLUTION =====
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold text-indigo-600">Task Manager</h1>
        </div>

        <div class="hidden md:flex space-x-4">
          <RouterLink 
            to="/" 
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              route.path === '/' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-700 hover:bg-indigo-100'
            ]"
          >
            Tasks
          </RouterLink>
          
          <!-- ===== SOLUTION ===== -->
          <RouterLink 
            to="/statistics" 
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              route.path === '/statistics' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-700 hover:bg-indigo-100'
            ]"
          >
            Statistics
          </RouterLink>
          <!-- ===== END SOLUTION ===== -->
        </div>

        <!-- ===== SOLUTION ===== -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
          <!-- ===== END SOLUTION ===== -->
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- ===== SOLUTION ===== -->
      <div v-show="isMobileMenuOpen" class="md:hidden pb-4">
        <RouterLink 
          to="/" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
          @click="isMobileMenuOpen = false"
        >
          Tasks
        </RouterLink>
        <RouterLink 
          to="/statistics" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
          @click="isMobileMenuOpen = false"
        >
          Statistics
        </RouterLink>
      </div>
      <!-- ===== END SOLUTION ===== -->
    </div>
  </nav>
</template>
