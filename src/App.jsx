import { useState } from "react";
import { useRecoilValue } from "recoil";
import { filteredTasksState } from "./recoil/tasksAtom";
import Header from "./components/Header";
import Column from "./components/Column";
import AddTaskModal from "./components/AddTaskModal";
import { Circle, Clock, CheckCircle2 } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Read filtered tasks derived from our Recoil Selector!
  const tasks = useRecoilValue(filteredTasksState);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. Header with search & create action */}
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* 2. Main Board Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col gap-6">
        {/* Board Subtitle / Stats */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-300">
            Project Sprint Board
          </h2>
          <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            Total Tasks: {tasks.length}
          </span>
        </div>

        {/* Kanban Columns (Responsive Horizontal Scroll on small screens) */}
        <div className="flex flex-col md:flex-row gap-6 items-start overflow-x-auto pb-4">
          {/* Column 1: To Do */}
          <Column
            title="To Do"
            status="todo"
            tasks={tasks}
            icon={Circle}
            badgeColor="bg-slate-800 text-slate-300 border border-slate-700"
          />

          {/* Column 2: In Progress */}
          <Column
            title="In Progress"
            status="in_progress"
            tasks={tasks}
            icon={Clock}
            badgeColor="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
          />

          {/* Column 3: Done */}
          <Column
            title="Completed"
            status="done"
            tasks={tasks}
            icon={CheckCircle2}
            badgeColor="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
          />
        </div>
      </main>

      {/* 3. Add Task Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
