# Vue 3 Workshop - Hands-On Exercise

Welcome to the Vue 3 Task Manager Workshop! This project is designed to test and reinforce your understanding of Vue 3 fundamentals through practical, hands-on exercises.

## About This Project

This is a **Task Manager Application** built with Vue 3 (Composition API), TypeScript, and Tailwind CSS v3. The project is intentionally incomplete - your mission is to fill in the missing pieces using the Vue concepts you've learned.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Basic understanding of Vue 3 and TypeScript

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd VueJS_Workshop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Your Tasks

Search for `TODO` comments throughout the codebase. Each TODO corresponds to a Vue concept:

### 1. **Navbar Component** (`src/components/Navbar.vue`)
- [ ] Implement mobile menu toggle functionality
- [ ] Add RouterLink for Statistics page
- [ ] Use `v-show` directive for mobile menu
- [ ] Create computed property for active route checking

### 2. **TaskForm Component** (`src/components/TaskForm.vue`)
- [ ] Define emits for modal and task creation
- [ ] Implement `v-model` bindings for form inputs
- [ ] Create `isFormValid` computed property
- [ ] Complete the form submission logic
- [ ] Use `v-if` directive to show/hide modal

### 3. **TaskItem Component** (`src/components/TaskItem.vue`)
- [ ] Define emits for toggle and delete events
- [ ] Create `priorityColor` computed property
- [ ] Implement click handlers for checkbox and delete button
- [ ] Use `v-if` directive for conditional description display
- [ ] Use `v-bind` for dynamic class binding

### 4. **TaskList Component** (`src/components/TaskList.vue`)
- [ ] Define emits for task actions
- [ ] Create `filteredTasks` computed property
- [ ] Create `isEmpty` computed property
- [ ] Implement `v-for` directive to render task items
- [ ] Use `v-if`/`v-else` for empty state

### 5. **TaskFilters Component** (`src/components/TaskFilters.vue`)
- [ ] Define emit for filter changes
- [ ] Implement click handlers to change filters
- [ ] Pass filter state to parent component

### 6. **Home View** (`src/views/Home.vue`)
- [ ] Create `taskCounts` computed property
- [ ] Create `filteredBySearch` computed property
- [ ] Implement `onMounted` to load tasks from localStorage
- [ ] Use `watch` to save tasks to localStorage
- [ ] Use `watchEffect` to log filter changes
- [ ] Complete task CRUD operations (create, toggle, delete)
- [ ] Wire up component event handlers

## Bonus Challenge: Statistics Page

Create a complete **Statistics Page** (`src/views/Statistics.vue`) from scratch!

### Requirements:

1. **Load tasks from localStorage** (same as Home view)
2. **Display these statistics:**
   - Total number of tasks
   - Number of completed tasks
   - Number of active tasks
   - Completion rate (percentage)
   - Tasks grouped by priority
   - Tasks grouped by category

3. **Styling Requirements:**
   - Use Tailwind CSS for all styling
   - Create a card-based layout
   - Make it responsive (mobile-friendly)
   - Add appropriate colors and spacing

4. **Bonus Points:**
   - Create simple bar charts using CSS
   - Show the most productive category
   - Display the oldest and newest task dates
   - Add transitions or animations

## Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [TypeScript with Vue](https://vuejs.org/guide/typescript/overview.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Good luck and happy coding!
