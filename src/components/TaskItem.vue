<script setup lang="ts">
import { computed } from 'vue';
import type { Task } from '../types/task';

interface Props {
  task: Task;
}

const props = defineProps<Props>();

// ===== SOLUTION =====
const emit = defineEmits<{
  'toggle': [id: number]
  'delete': [id: number]
}>();

const priorityColor = computed(() => {
  switch (props.task.priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
});

function handleToggle() {
  emit('toggle', props.task.id);
}

function handleDelete() {
  emit('delete', props.task.id);
}
// ===== END SOLUTION =====
</script>

<template>
  <div 
    class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4"
    :class="{
      'border-red-500': task.priority === 'high',
      'border-yellow-500': task.priority === 'medium',
      'border-green-500': task.priority === 'low',
      'opacity-60': task.completed
    }"
  >
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-3 flex-1">
        <!-- ===== SOLUTION ===== -->
        <input 
          type="checkbox"
          :checked="task.completed"
          @click="handleToggle"
          class="mt-1 h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
        />
        <!-- ===== END SOLUTION ===== -->
        
        <div class="flex-1">
          <h3 
            class="text-lg font-semibold"
            :class="task.completed ? 'line-through text-gray-500' : 'text-gray-800'"
          >
            {{ task.title }}
          </h3>
          
          <!-- ===== SOLUTION ===== -->
          <p v-if="task.description && task.description.trim()" class="text-gray-600 mt-1">
            {{ task.description }}
          </p>
          <!-- ===== END SOLUTION ===== -->
          
          <div class="flex flex-wrap gap-2 mt-3">
            <!-- ===== SOLUTION ===== -->
            <span :class="priorityColor" class="px-2 py-1 text-xs font-semibold rounded-full">
              {{ task.priority.toUpperCase() }}
            </span>
            <!-- ===== END SOLUTION ===== -->
            
            <span class="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
              {{ task.category }}
            </span>
          </div>
        </div>
      </div>

      <!-- ===== SOLUTION ===== -->
      <button 
        @click="handleDelete"
        class="text-red-500 hover:text-red-700 transition-colors ml-2"
        aria-label="Delete task"
      >
      <!-- ===== END SOLUTION ===== -->
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </div>
  </div>
</template>
