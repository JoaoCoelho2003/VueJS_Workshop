<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import type { Task, TaskFilter } from '../types/task';
import DefaultLayout from '../layouts/defaultLayout.vue';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import TaskFilters from '../components/TaskFilters.vue';

const tasks = ref<Task[]>([]);
const currentFilter = ref<TaskFilter>('all');
const isModalOpen = ref(false);
const searchQuery = ref('');

// ===== SOLUTION =====
const taskCounts = computed(() => ({
  all: tasks.value.length,
  active: tasks.value.filter(t => !t.completed).length,
  completed: tasks.value.filter(t => t.completed).length
}));

const filteredBySearch = computed(() => {
  if (!searchQuery.value.trim()) {
    return tasks.value;
  }
  const query = searchQuery.value.toLowerCase();
  return tasks.value.filter(task =>
    task.title.toLowerCase().includes(query) ||
    task.category.toLowerCase().includes(query)
  );
});

onMounted(() => {
  const stored = localStorage.getItem('vue-tasks');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        tasks.value = parsed.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
      }
    } catch (e) {
      console.error('Failed to load tasks:', e);
    }
  }
  console.log('Component mounted');
});

watch(tasks, (newTasks) => {
  localStorage.setItem('vue-tasks', JSON.stringify(newTasks));
}, { deep: true });

watchEffect(() => {
  console.log('Current filter:', currentFilter.value);
});

const openModal = () => {
  isModalOpen.value = true;
};

const handleTaskCreated = (task: Task) => {
  tasks.value.push(task);
};

const handleToggleTask = (id: number) => {
  const task = tasks.value.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
  }
};

const handleDeleteTask = (id: number) => {
  tasks.value = tasks.value.filter(t => t.id !== id);
};

const handleFilterChange = (filter: TaskFilter) => {
  currentFilter.value = filter;
};

const hasAnyTasks = computed(() => tasks.value.length > 0);
// ===== END SOLUTION =====
</script>

<template>
  <DefaultLayout>
    <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">My Tasks</h1>
      <p class="text-gray-600">Organize and track your daily tasks efficiently</p>
    </div>

    <div class="mb-6 flex flex-col sm:flex-row gap-4">
      <div class="flex-1">
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Search tasks by title or category..."
            class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <button 
        @click="openModal"
        class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        <span>New Task</span>
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div class="lg:col-span-1">
        <!-- ===== SOLUTION ===== -->
        <TaskFilters 
          :current-filter="currentFilter"
          :task-counts="taskCounts"
          @change-filter="handleFilterChange"
        />
        <!-- ===== END SOLUTION ===== -->
      </div>

      <div class="lg:col-span-3">
        <!-- ===== SOLUTION ===== -->
        <TaskList 
          :tasks="filteredBySearch"
          :filter="currentFilter"
          @toggle-task="handleToggleTask"
          @delete-task="handleDeleteTask"
        />
        <!-- ===== END SOLUTION ===== -->
      </div>
    </div>

    <!-- ===== SOLUTION ===== -->
    <TaskForm
      v-if="isModalOpen"
      v-model="isModalOpen"
      @task-created="handleTaskCreated"
    />
    <!-- ===== END SOLUTION ===== -->
    </div>
  </DefaultLayout>
</template>
