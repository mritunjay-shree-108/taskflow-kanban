import { atom, selector } from "recoil";

// 1. Initial sample tasks so our board isn't empty on first load
const initialTasks = [
  {
    id: "1",
    title: "Design Kanban UI",
    description:
      "Sketch out column layout, task cards, and modals with Tailwind CSS",
    status: "todo", // 'todo' | 'in_progress' | 'done'
    priority: "high", // 'low' | 'medium' | 'high'
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Setup Recoil Atoms",
    description:
      "Define task state, column categories, and search filter selectors",
    status: "in_progress",
    priority: "medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Initialize Project Repository",
    description: "Set up Vite, Git, Tailwind v4, and dependencies",
    status: "done",
    priority: "low",
    createdAt: new Date().toISOString(),
  },
];

// 2. The main tasks atom (list of all tasks)
export const tasksState = atom({
  key: "tasksState",
  default: initialTasks,
});

// 3. Search and filter atom (to search tasks by text)
export const searchFilterState = atom({
  key: "searchFilterState",
  default: "",
});

// 4. Recoil Selector (Derived State): Filters tasks based on search keyword
export const filteredTasksState = selector({
  key: "filteredTasksState",
  get: ({ get }) => {
    const tasks = get(tasksState);
    const filter = get(searchFilterState).toLowerCase().trim();

    if (!filter) return tasks;

    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(filter) ||
        task.description.toLowerCase().includes(filter),
    );
  },
});
