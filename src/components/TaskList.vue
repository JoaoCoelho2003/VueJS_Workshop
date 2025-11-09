<script setup lang="ts">
import { computed } from 'vue';
import type { Task, TaskFilter } from '../types/task';
import TaskItem from './TaskItem.vue';

interface Props {
  tasks: Task[];
  filter: TaskFilter;
}

const props = defineProps<Props>();

// ===== SOLUTION =====
const emit = defineEmits<{
  'toggleTask': [id: number]
  'deleteTask': [id: number]
}>();

const filteredTasks = computed(() => {
  if (props.filter === 'all') {
    return props.tasks;
  } else if (props.filter === 'active') {
    return props.tasks.filter(task => !task.completed);
  } else if (props.filter === 'completed') {
    return props.tasks.filter(task => task.completed);
  }
  return props.tasks;
});

const isEmpty = computed(() => {
  return filteredTasks.value.length === 0;
});

const handleToggle = (id: number) => {
  emit('toggleTask', id);
};

const handleDelete = (id: number) => {
  emit('deleteTask', id);
};
// ===== END SOLUTION =====
</script>

<template>
  <div class="space-y-4">
    <!-- ===== SOLUTION ===== -->
    <div v-if="isEmpty" class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
      <h3 class="mt-2 text-lg font-medium text-gray-900">No tasks found</h3>
      <p class="mt-1 text-sm text-gray-500">
        Get started by creating a new task.
      </p>
    </div>

    <div v-else>
      <TaskItem 
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="handleToggle"
        @delete="handleDelete"
      />
    </div>
    <!-- ===== END SOLUTION ===== -->
  </div>
</template>
