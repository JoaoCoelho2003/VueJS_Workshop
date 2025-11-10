<script setup lang="ts">
import DefaultLayout from '../layouts/defaultLayout.vue';

// HINTS:
// 1. Import necessary functions from Vue (ref, computed, onMounted, etc.)
// 2. Import the Task type from '../types/task'
// 3. Load tasks from localStorage (similar to Home.vue)
// 4. Create computed properties for statistics:
//    - Total tasks
//    - Completed tasks
//    - Active tasks
//    - Completion rate (percentage)
//    - Tasks by priority (count for each priority level)
//    - Tasks by category (count for each unique category)
// 5. Use Tailwind CSS for styling (cards, grids, colors)

</script>

<template>
  <DefaultLayout>
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Task Statistics</h1>
        <p class="text-gray-600">Overview of your task management performance</p>
      </div>

      <!-- TODO: Implement the statistics page here -->
      <div class="bg-white rounded-lg shadow-md p-8 text-center">
        <p class="text-gray-500 text-lg">
          This page is part of the bonus challenge!
        </p>
        <p class="text-gray-600 mt-2">
          Create a statistics dashboard that displays insights about your tasks.
        </p>
      </div>
    </div>
  </DefaultLayout>
</template>
