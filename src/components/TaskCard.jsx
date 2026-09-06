// import React from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from "../recoil/tasksAtom";
import { Trash2, ArrowRight, ArrowLeft } from "lucide-react";

const priorityColors = {
  low: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  high: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export default function TaskCard({ task }) {
  // useSetRecoilState only gives us the updater function (no unnecessary re-renders!)
  const setTasks = useSetRecoilState(tasksState);

  // 1. Delete task
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  // 2. Move task forward/backward between columns
  const handleMove = (newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, status: newStatus } : t,
      ),
    );
  };

  return (
    <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-sm hover:border-slate-600 transition flex flex-col gap-3 group">
      {/* Top row: Priority badge + Delete button */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
            priorityColors[task.priority] || priorityColors.medium
          }`}
        >
          {task.priority}
        </span>

        <button
          onClick={handleDelete}
          className="text-slate-500 hover:text-rose-400 transition p-1 rounded-md opacity-0 group-hover:opacity-100 cursor-pointer"
          title="Delete Task"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Task Title & Description */}
      <div>
        <h4 className="text-slate-100 font-semibold text-sm leading-snug">
          {task.title}
        </h4>
        {task.description && (
          <p className="text-slate-400 text-xs mt-1 leading-relaxed">
            {task.description}
          </p>
        )}
      </div>

      {/* Bottom row: Move Status Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-1">
        {/* Move Left Button */}
        {task.status !== "todo" ? (
          <button
            onClick={() =>
              handleMove(task.status === "done" ? "in_progress" : "todo")
            }
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition cursor-pointer"
          >
            <ArrowLeft size={14} /> Back
          </button>
        ) : (
          <span />
        )}

        {/* Move Right Button */}
        {task.status !== "done" && (
          <button
            onClick={() =>
              handleMove(task.status === "todo" ? "in_progress" : "done")
            }
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition cursor-pointer ml-auto"
          >
            Advance <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
