<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task } from '../types/task';

interface Props {
  modelValue: boolean;
}

defineProps<Props>();

// ===== SOLUTION =====
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'taskCreated': [task: Task]
}>();

const title = ref('');
const description = ref('');
const priority = ref<'low' | 'medium' | 'high'>('medium');
const category = ref('');

const isFormValid = computed(() => {
  return title.value.trim().length >= 3 && category.value.trim().length > 0;
});

const closeModal = () => {
  emit('update:modelValue', false);
};

const resetForm = () => {
  title.value = '';
  description.value = '';
  priority.value = 'medium';
  category.value = '';
};

const handleSubmit = () => {
  if (!isFormValid.value) return;

  const newTask: Task = {
    id: Date.now(),
    title: title.value.trim(),
    description: description.value.trim(),
    priority: priority.value,
    category: category.value.trim(),
    completed: false,
    createdAt: new Date()
  };

  emit('taskCreated', newTask);
  resetForm();
  closeModal();
};
// ===== END SOLUTION =====
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
          <!-- ===== SOLUTION ===== -->
          <input 
            v-model="title"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter task title"
            required
          />
          <!-- ===== END SOLUTION ===== -->
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <!-- ===== SOLUTION ===== -->
          <textarea 
            v-model="description"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
            placeholder="Enter task description"
          ></textarea>
          <!-- ===== END SOLUTION ===== -->
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
          <!-- ===== SOLUTION ===== -->
          <input 
            v-model="category"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Work, Personal, Study"
            required
          />
          <!-- ===== END SOLUTION ===== -->
        </div>

        <div class="flex justify-end space-x-3 pt-4">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <!-- ===== SOLUTION ===== -->
          <button 
            type="submit"
            :disabled="!isFormValid"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Task
          </button>
          <!-- ===== END SOLUTION ===== -->
        </div>
      </form>
    </div>
  </div>
</template>
