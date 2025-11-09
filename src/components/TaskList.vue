<script setup lang="ts">
import { computed } from 'vue';
import type { Task, TaskFilter } from '../types/task';
import TaskItem from './TaskItem.vue';

// Define props
interface Props {
  tasks: Task[];
  filter: TaskFilter;
}

const props = defineProps<Props>();

// TODO: Define emits for 'toggleTask' and 'deleteTask'
// Both should pass the task id (number)

// TODO: Create a computed property 'filteredTasks' that:
// - Returns all tasks when filter is 'all'
// - Returns only incomplete tasks (completed: false) when filter is 'active'
// - Returns only completed tasks (completed: true) when filter is 'completed'

// TODO: Create a computed property 'isEmpty' that returns true when filteredTasks has no items

// Functions to handle events from TaskItem
const handleToggle = (id: number) => {
  // TODO: Emit 'toggleTask' event with the id
};

const handleDelete = (id: number) => {
  // TODO: Emit 'deleteTask' event with the id
};
</script>

<template>
  <div class="space-y-4">
    <!-- TODO: Use v-if to show this only when isEmpty is true -->
    <div class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
      <h3 class="mt-2 text-lg font-medium text-gray-900">No tasks found</h3>
      <p class="mt-1 text-sm text-gray-500">
        Get started by creating a new task.
      </p>
    </div>

    <!-- Task List -->
    <!-- TODO: Use v-else and v-for to render TaskItem components for each task in filteredTasks -->
    <!-- Don't forget to use :key with a unique identifier -->
    <!-- Pass the task as a prop and listen to @toggle and @delete events -->
    
  </div>
</template>
