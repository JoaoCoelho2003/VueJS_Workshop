<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import type { Task, TaskFilter } from '../types/task';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import TaskFilters from '../components/TaskFilters.vue';

// State
const tasks = ref<Task[]>([]);
const currentFilter = ref<TaskFilter>('all');
const isModalOpen = ref(false);
const searchQuery = ref('');

// TODO: Create a computed property 'taskCounts' that returns an object with:
// - all: total number of tasks
// - active: number of tasks where completed is false
// - completed: number of tasks where completed is true

// TODO: Create a computed property 'filteredBySearch' that:
// - Returns all tasks if searchQuery is empty
// - Otherwise returns tasks where title or category includes the searchQuery (case-insensitive)

// Load tasks from localStorage on mount
onMounted(() => {
  // TODO: Use onMounted lifecycle hook to load tasks from localStorage
  // Get item with key 'vue-tasks' and parse it as JSON
  // If it exists and is an array, convert createdAt strings back to Date objects
  // and assign to tasks.value
  
  console.log('Component mounted');
});

// TODO: Use watch to save tasks to localStorage whenever tasks array changes
// watch(tasks, (newTasks) => { ... }, { deep: true })
// Save to localStorage with key 'vue-tasks'

// TODO: Use watchEffect to log the current filter whenever it changes
// This is just for learning purposes
// watchEffect(() => { console.log('Current filter:', currentFilter.value) })

// Functions
const openModal = () => {
  isModalOpen.value = true;
};

const handleTaskCreated = (task: Task) => {
  // TODO: Add the new task to the tasks array
};

const handleToggleTask = (id: number) => {
  // TODO: Find the task by id and toggle its completed status
};

const handleDeleteTask = (id: number) => {
  // TODO: Remove the task with the given id from the tasks array
};

const handleFilterChange = (filter: TaskFilter) => {
  currentFilter.value = filter;
};

// TODO: Create a computed property 'hasAnyTasks' that returns true if tasks array is not empty
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">My Tasks</h1>
      <p class="text-gray-600">Organize and track your daily tasks efficiently</p>
    </div>

    <!-- Search and Create Section -->
    <div class="mb-6 flex flex-col sm:flex-row gap-4">
      <!-- Search Input -->
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

      <!-- Create Task Button -->
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

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Sidebar - Filters -->
      <div class="lg:col-span-1">
        <!-- TODO: Pass the correct props to TaskFilters -->
        <!-- It needs currentFilter and taskCounts -->
        <!-- Also listen to the @changeFilter event -->
        <TaskFilters 
          :current-filter="currentFilter"
          :task-counts="{ all: 0, active: 0, completed: 0 }"
        />
      </div>

      <!-- Main Content - Task List -->
      <div class="lg:col-span-3">
        <!-- TODO: Pass the filteredBySearch tasks to TaskList (not just tasks) -->
        <!-- Also pass the currentFilter and listen to @toggleTask and @deleteTask events -->
        <TaskList 
          :tasks="tasks"
          :filter="currentFilter"
        />
      </div>
    </div>

    <!-- Task Form Modal -->
    <!-- TODO: Use v-model for two-way binding with isModalOpen -->
    <!-- Listen to @taskCreated event -->
    <TaskForm 
      :model-value="isModalOpen"
      @update:model-value="isModalOpen = $event"
    />
  </div>
</template>
