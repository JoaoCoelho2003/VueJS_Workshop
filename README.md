# 🎯 Vue 3 Workshop - Hands-On Exercise

Welcome to the Vue 3 Task Manager Workshop! This project is designed to test and reinforce your understanding of Vue 3 fundamentals through practical, hands-on exercises.

## 📚 About This Project

This is a **Task Manager Application** built with Vue 3 (Composition API), TypeScript, and Tailwind CSS v3. The project is intentionally incomplete - your mission is to fill in the missing pieces using the Vue concepts you've learned.

## 🎓 Learning Objectives

By completing this workshop, you will practice:

- ✅ **Vue Directives**: `v-if`, `v-else`, `v-for`, `v-show`, `v-model`, `v-bind`, `@click`
- ✅ **Lifecycle Hooks**: `onMounted`, `watch`, `watchEffect`
- ✅ **Reactivity**: `ref`, `reactive`, `computed`
- ✅ **Component Communication**: Props and Emits
- ✅ **Project Structure**: Organizing components, views, and types
- ✅ **TypeScript Integration**: Type-safe props, emits, and interfaces

## 🚀 Getting Started

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

## 📝 Your Tasks

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

## 🎁 Bonus Challenge: Statistics Page

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

### Hints:

- Import necessary Vue functions: `ref`, `computed`, `onMounted`
- Use `computed` properties for all calculations
- Use `Array.reduce()` or `Array.filter()` for statistics
- Consider creating helper functions for repeated logic

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.vue           # Navigation bar with routing
│   ├── TaskForm.vue          # Modal form for creating tasks
│   ├── TaskItem.vue          # Individual task display
│   ├── TaskList.vue          # List of tasks with filtering
│   └── TaskFilters.vue       # Filter buttons component
├── views/
│   ├── Home.vue              # Main task management page
│   └── Statistics.vue        # Statistics dashboard (BONUS)
├── types/
│   └── task.ts               # TypeScript interfaces
├── router/
│   └── index.ts              # Vue Router configuration
├── App.vue                   # Root component
└── main.ts                   # Application entry point
```

## 🧪 Testing Your Implementation

### Checklist:

- [ ] Can create new tasks with title, description, priority, and category
- [ ] Can mark tasks as completed/uncompleted
- [ ] Can delete tasks
- [ ] Can filter tasks (All, Active, Completed)
- [ ] Can search tasks by title or category
- [ ] Task counts update correctly
- [ ] Tasks persist after page refresh (localStorage)
- [ ] Mobile menu works on small screens
- [ ] Navigation between pages works
- [ ] Statistics page displays correct data (bonus)

## 💡 Tips

1. **Use Vue DevTools**: Install the Vue DevTools browser extension to inspect component state and props
2. **Read Error Messages**: TypeScript will help you catch mistakes - read the error messages carefully
3. **Console.log**: Don't hesitate to use `console.log()` to debug values
4. **Start Small**: Complete one TODO at a time, test it, then move to the next
5. **Check the Docs**: Refer to [Vue 3 Documentation](https://vuejs.org/) when stuck

## 📖 Key Concepts Reference

### Reactivity
```typescript
const count = ref(0)              // Reactive primitive
const user = reactive({ name: '' }) // Reactive object
const doubled = computed(() => count.value * 2) // Computed property
```

### Lifecycle
```typescript
onMounted(() => {
  // Runs after component is mounted
})

watch(count, (newVal, oldVal) => {
  // Runs when count changes
})

watchEffect(() => {
  // Runs immediately and whenever dependencies change
})
```

### Component Communication
```typescript
// Child component
const props = defineProps<{ title: string }>()
const emit = defineEmits<{ save: [id: number] }>()
emit('save', 123)
```

## 🎉 Completion

Once you've completed all TODOs and the bonus challenge, congratulations! You've demonstrated mastery of:

- Vue 3 Composition API
- Component architecture
- State management
- TypeScript integration
- Real-world application development

## 📚 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [TypeScript with Vue](https://vuejs.org/guide/typescript/overview.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Need Help?

If you get stuck:
1. Review the workshop materials
2. Check the Vue 3 documentation
3. Look at completed components for patterns
4. Ask your instructor or peers

Good luck and happy coding! 🚀
