<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// TODO: Use a ref to track if mobile menu is open
const isMobileMenuOpen = ref(false);

const route = useRoute();

// TODO: Create a function to toggle the mobile menu
// function toggleMobileMenu() { ... }

// TODO: Use a computed property to check if a route is active
// This should return true if the current route matches the given path
// const isActive = computed(() => (path: string) => { ... });
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
          
          <!-- TODO: Add a RouterLink to the Statistics page (/statistics) -->
          <!-- It should have the same styling as the Tasks link above -->
          <!-- Use v-bind to dynamically apply classes based on route.path -->
          
        </div>

        <!-- TODO: Add @click directive to toggle mobile menu -->
        <div class="md:hidden">
          <button 
            class="text-gray-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- TODO: Use v-show directive to toggle visibility based on isMobileMenuOpen -->
      <div class="md:hidden pb-4">
        <RouterLink 
          to="/" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
        >
          Tasks
        </RouterLink>
        <!-- TODO: Add mobile link for Statistics page -->
      </div>
    </div>
  </nav>
</template>
