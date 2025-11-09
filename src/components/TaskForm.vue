<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../types/task';

// TODO: Define the emits for 'update:modelValue' and 'taskCreated'
// The 'taskCreated' event should pass a Task object
const emit = defineEmits(['update:modelValue']);

const title = ref('');
const description = ref('');
const priority = ref<'low' | 'medium' | 'high'>('medium');
const category = ref('');

// TODO: Create a computed property for 'isFormValid'
// It should return true only if title has at least 3 characters
// and category is not empty

const closeModal = () => {
  // TODO: Emit the 'update:modelValue' event with false to close the modal
};

const resetForm = () => {
  title.value = '';
  description.value = '';
  priority.value = 'medium';
  category.value = '';
};

const handleSubmit = () => {
  // TODO: Create a new task object with:
  // - id: Date.now()
  // - title, description, priority, category from form fields
  // - completed: false
  // - createdAt: new Date()
  
  // TODO: Emit the 'taskCreated' event with the new task
  
  // TODO: Reset the form and close the modal
  
  console.log('Form submitted!');
};
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
      <div class="flex justify-between items-center p-6 border-b">
        <h2 class="text-xl font-semibold text-gray-800">Create New Task</h2>
        <button 
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Title *
          </label>
          <!-- TODO: Use v-model to bind the title ref -->
          <input 
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <!-- TODO: Use v-model to bind the description ref -->
          <textarea 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select 
            v-model="priority"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Category *
          </label>
          <!-- TODO: Use v-model to bind the category ref -->
          <input 
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Work, Personal, Study"
            required
          />
        </div>

        <div class="flex justify-end space-x-3 pt-4">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <!-- TODO: Disable this button when isFormValid is false -->
          <button 
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
