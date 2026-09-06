# 📋 TaskFlow — Modern Kanban Board

[![React](https://img.shields.io/badge/React-18-blue.svg?logo=react)](https://react.dev/)
[![Recoil](https://img.shields.io/badge/State-Recoil-3578e5.svg?logo=recoil)](https://recoiljs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black.svg?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An intuitive, high-performance Kanban productivity board built with **React**, **Recoil State Management**, and **Tailwind CSS**. Designed for sprint planning, daily task management, and local-first data persistence.

🚀 **[Live Demo] -> (https://taskflow-kanban-2y4453wno-team1089.vercel.app/)**

---

## ✨ Features

- 🔄 **Kanban Workflow**: Move tasks seamlessly across _To Do_, _In Progress_, and _Completed_ stages.
- ⚡ **Atomic State Management**: Powered by **Recoil atoms** for fine-grained reactivity and minimal re-renders.
- 🔍 **Instant Search & Filtering**: Fast text-based search powered by derived **Recoil selectors**.
- 💾 **Local-First Persistence**: Custom **Recoil Atom Effects** synchronize state with `localStorage` automatically.
- 🎯 **Priority Tagging**: Color-coded badges for _Low_, _Medium_, and _High_ priority tasks.
- 📱 **Responsive Design**: Modern dark UI built with Tailwind CSS, adapted for desktop and mobile viewports.

---

## 🛠️ Tech Stack

| Technology       | Purpose                                                   |
| :--------------- | :-------------------------------------------------------- |
| **React 18**     | UI component architecture & hooks                         |
| **Recoil**       | Fine-grained state management (Atoms, Selectors, Effects) |
| **Tailwind CSS** | Utility-first responsive styling                          |
| **Lucide React** | Clean, accessible modern iconography                      |
| **Vite**         | Fast next-generation frontend tooling                     |

---

## 📁 Project Architecture

```text
src/
├── components/
│   ├── Header.jsx          # Search bar & task creation trigger
│   ├── Column.jsx          # Kanban status column container
│   ├── TaskCard.jsx        # Individual task card & action controls
│   └── AddTaskModal.jsx    # Accessible modal dialog & task form
├── recoil/
│   └── tasksAtom.js        # Atoms, LocalStorage effects, & derived selectors
├── App.jsx                 # Board layout & state consumption
├── main.jsx                # React root wrapped in <RecoilRoot>
└── index.css               # Tailwind CSS imports & global styles


```
