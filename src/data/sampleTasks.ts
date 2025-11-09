import type { Task } from '../types/task';

/**
 * Sample tasks for testing
 * 
 * Usage:
 * 1. Import this file in your component
 * 2. Use these tasks to populate your task list for testing
 * 3. Useful for quickly seeing how the app looks with data
 * 
 * Example:
 * import { sampleTasks } from '../data/sampleTasks';
 * tasks.value = sampleTasks;
 */

export const sampleTasks: Task[] = [
  {
    id: 1,
    title: 'Complete Vue 3 Workshop',
    description: 'Finish all TODOs and implement the statistics page',
    completed: false,
    priority: 'high',
    category: 'Learning',
    createdAt: new Date('2024-01-15T10:00:00')
  },
  {
    id: 2,
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables',
    completed: true,
    priority: 'medium',
    category: 'Personal',
    createdAt: new Date('2024-01-14T14:30:00')
  },
  {
    id: 3,
    title: 'Prepare presentation',
    description: 'Create slides for the team meeting on Friday',
    completed: false,
    priority: 'high',
    category: 'Work',
    createdAt: new Date('2024-01-13T09:00:00')
  },
  {
    id: 4,
    title: 'Call dentist',
    description: 'Schedule appointment for next month',
    completed: false,
    priority: 'low',
    category: 'Personal',
    createdAt: new Date('2024-01-12T16:45:00')
  },
  {
    id: 5,
    title: 'Review pull requests',
    description: 'Check and approve pending PRs in the repository',
    completed: true,
    priority: 'medium',
    category: 'Work',
    createdAt: new Date('2024-01-11T11:20:00')
  },
  {
    id: 6,
    title: 'Learn TypeScript',
    description: 'Complete the TypeScript fundamentals course',
    completed: false,
    priority: 'medium',
    category: 'Learning',
    createdAt: new Date('2024-01-10T08:00:00')
  },
  {
    id: 7,
    title: 'Workout',
    description: '30 minutes cardio and strength training',
    completed: true,
    priority: 'low',
    category: 'Health',
    createdAt: new Date('2024-01-16T07:00:00')
  },
  {
    id: 8,
    title: 'Update documentation',
    description: 'Add examples and improve API docs',
    completed: false,
    priority: 'low',
    category: 'Work',
    createdAt: new Date('2024-01-09T15:30:00')
  },
  {
    id: 9,
    title: 'Plan vacation',
    description: 'Research destinations and book flights',
    completed: false,
    priority: 'low',
    category: 'Personal',
    createdAt: new Date('2024-01-08T19:00:00')
  },
  {
    id: 10,
    title: 'Fix bug #247',
    description: 'Resolve the login redirect issue',
    completed: true,
    priority: 'high',
    category: 'Work',
    createdAt: new Date('2024-01-15T13:15:00')
  }
];

/**
 * Function to load sample tasks into localStorage
 * Call this once to populate your app with test data
 * 
 * Usage:
 * import { loadSampleTasks } from '../data/sampleTasks';
 * loadSampleTasks();
 */
export function loadSampleTasks() {
  localStorage.setItem('vue-tasks', JSON.stringify(sampleTasks));
  console.log('✅ Sample tasks loaded into localStorage');
}

/**
 * Function to clear all tasks from localStorage
 * Useful for resetting during testing
 * 
 * Usage:
 * import { clearTasks } from '../data/sampleTasks';
 * clearTasks();
 */
export function clearTasks() {
  localStorage.removeItem('vue-tasks');
  console.log('🗑️  Tasks cleared from localStorage');
}
