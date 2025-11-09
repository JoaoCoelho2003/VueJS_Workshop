<script setup lang="ts">
import type { TaskFilter } from '../types/task';

interface Props {
  currentFilter: TaskFilter;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

defineProps<Props>();

// ===== SOLUTION =====
const emit = defineEmits<{
  'changeFilter': [filter: TaskFilter]
}>();

function handleFilterChange(filter: TaskFilter) {
  emit('changeFilter', filter);
}
// ===== END SOLUTION =====
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Filter Tasks</h3>
    
    <div class="space-y-2">
      <!-- ===== SOLUTION ===== -->
      <button 
        @click="handleFilterChange('all')"
        class="w-full text-left px-4 py-2 rounded-md transition-colors"
        :class="currentFilter === 'all' 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
      >
        <span class="flex justify-between items-center">
          <span>All Tasks</span>
          <span class="text-sm font-semibold">{{ taskCounts.all }}</span>
        </span>
      </button>

      <button 
        @click="handleFilterChange('active')"
        class="w-full text-left px-4 py-2 rounded-md transition-colors"
        :class="currentFilter === 'active' 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
      >
        <span class="flex justify-between items-center">
          <span>Active</span>
          <span class="text-sm font-semibold">{{ taskCounts.active }}</span>
        </span>
      </button>

      <button 
        @click="handleFilterChange('completed')"
        class="w-full text-left px-4 py-2 rounded-md transition-colors"
        :class="currentFilter === 'completed' 
          ? 'bg-indigo-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
      >
        <span class="flex justify-between items-center">
          <span>Completed</span>
          <span class="text-sm font-semibold">{{ taskCounts.completed }}</span>
        </span>
      </button>
      <!-- ===== END SOLUTION ===== -->
    </div>
  </div>
</template>
