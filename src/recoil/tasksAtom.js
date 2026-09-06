import { atom, selector } from "recoil";

// 1. Reusable Recoil Atom Effect for LocalStorage Persistence
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      try {
        setSelf(JSON.parse(savedValue));
      } catch (e) {
        console.error("Failed to parse localStorage data:", e);
      }
    }

    // Whenever the atom changes, save the new value into localStorage
    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

// 2. Initial fallback tasks
const initialTasks = [
  {
    id: "1",
    title: "Design Kanban UI",
    description:
      "Sketch out column layout, task cards, and modals with Tailwind CSS",
    status: "todo",
    priority: "high",
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

// 3. Tasks Atom connected to localStorage!
export const tasksState = atom({
  key: "tasksState",
  default: initialTasks,
  effects: [localStorageEffect("taskflow_tasks_data")],
});

// 4. Search and filter atom
export const searchFilterState = atom({
  key: "searchFilterState",
  default: "",
});

// 5. Derived Filtered Tasks Selector
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
