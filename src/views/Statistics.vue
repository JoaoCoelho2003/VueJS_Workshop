<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Task } from '../types/task';
import DefaultLayout from '../layouts/defaultLayout.vue';

// ===== SOLUTION =====
const tasks = ref<Task[]>([]);

// Load tasks from localStorage
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
});

// Statistics computed properties
const totalTasks = computed(() => tasks.value.length);

const completedTasks = computed(() => 
  tasks.value.filter(t => t.completed).length
);

const activeTasks = computed(() => 
  tasks.value.filter(t => !t.completed).length
);

const completionRate = computed(() => {
  if (totalTasks.value === 0) return 0;
  return Math.round((completedTasks.value / totalTasks.value) * 100);
});

const tasksByPriority = computed(() => ({
  high: tasks.value.filter(t => t.priority === 'high').length,
  medium: tasks.value.filter(t => t.priority === 'medium').length,
  low: tasks.value.filter(t => t.priority === 'low').length
}));

const tasksByCategory = computed(() => {
  const categories: Record<string, number> = {};
  tasks.value.forEach(task => {
    categories[task.category] = (categories[task.category] || 0) + 1;
  });
  return categories;
});

const mostProductiveCategory = computed(() => {
  const categories = tasksByCategory.value;
  const entries = Object.entries(categories);
  if (entries.length === 0) return null;
  return entries.reduce((a, b) => a[1] > b[1] ? a : b);
});

const maxCategoryCount = computed(() => {
  const counts = Object.values(tasksByCategory.value);
  return counts.length > 0 ? Math.max(...counts) : 0;
});
// ===== END SOLUTION =====
</script>

<template>
  <DefaultLayout>
    <!-- ===== SOLUTION ===== -->
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Task Statistics</h1>
        <p class="text-gray-600">Overview of your task management performance</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Total Tasks</p>
              <p class="text-3xl font-bold text-gray-900">{{ totalTasks }}</p>
            </div>
            <div class="bg-indigo-100 p-3 rounded-full">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Completed</p>
              <p class="text-3xl font-bold text-green-600">{{ completedTasks }}</p>
            </div>
            <div class="bg-green-100 p-3 rounded-full">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Active</p>
              <p class="text-3xl font-bold text-yellow-600">{{ activeTasks }}</p>
            </div>
            <div class="bg-yellow-100 p-3 rounded-full">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Completion Rate</p>
              <p class="text-3xl font-bold text-indigo-600">{{ completionRate }}%</p>
            </div>
            <div class="bg-indigo-100 p-3 rounded-full">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Tasks by Priority</h2>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">High</span>
                <span class="text-sm font-medium text-gray-700">{{ tasksByPriority.high }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div 
                  class="bg-red-500 h-3 rounded-full transition-all duration-500"
                  :style="{ width: totalTasks > 0 ? (tasksByPriority.high / totalTasks * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">Medium</span>
                <span class="text-sm font-medium text-gray-700">{{ tasksByPriority.medium }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div 
                  class="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                  :style="{ width: totalTasks > 0 ? (tasksByPriority.medium / totalTasks * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">Low</span>
                <span class="text-sm font-medium text-gray-700">{{ tasksByPriority.low }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div 
                  class="bg-green-500 h-3 rounded-full transition-all duration-500"
                  :style="{ width: totalTasks > 0 ? (tasksByPriority.low / totalTasks * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Tasks by Category</h2>
          <div v-if="Object.keys(tasksByCategory).length > 0" class="space-y-4">
            <div 
              v-for="[category, count] in Object.entries(tasksByCategory)" 
              :key="category"
            >
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">{{ category }}</span>
                <span class="text-sm font-medium text-gray-700">{{ count }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div 
                  class="bg-indigo-500 h-3 rounded-full transition-all duration-500"
                  :style="{ width: maxCategoryCount > 0 ? (count / maxCategoryCount * 100) + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
          <p v-else class="text-gray-500 text-center py-4">
            No categories yet
          </p>
        </div>
      </div>

      <div v-if="mostProductiveCategory" class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Most Productive Category</h2>
        <div class="flex items-center space-x-4">
          <div class="bg-indigo-100 p-4 rounded-full">
            <svg class="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          <div>
            <p class="text-2xl font-bold text-gray-900">{{ mostProductiveCategory[0] }}</p>
            <p class="text-gray-600">{{ mostProductiveCategory[1] }} tasks</p>
          </div>
        </div>
      </div>

      <div v-if="totalTasks === 0" class="bg-white rounded-lg shadow-md p-12 text-center">
        <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <h3 class="text-xl font-medium text-gray-900 mb-2">No Statistics Available</h3>
        <p class="text-gray-600">Create some tasks to see your statistics here!</p>
      </div>
    </div>
    <!-- ===== END SOLUTION ===== -->
  </DefaultLayout>
</template>
