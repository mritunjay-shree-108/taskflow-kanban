// import React from "react";
import { useRecoilState } from "recoil";
import { searchFilterState } from "../recoil/tasksAtom";
import { Search, Plus, KanbanSquare } from "lucide-react";

export default function Header({ onOpenModal }) {
  // Directly bind the search input to our Recoil state!
  const [search, setSearch] = useRecoilState(searchFilterState);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* App Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <KanbanSquare size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">
              TaskFlow
            </h1>
            <p className="text-xs text-slate-400">
              Kanban Board & Productivity
            </p>
          </div>
        </div>

        {/* Search Bar & Action Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 text-slate-100 placeholder-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-indigo-500 text-sm transition"
            />
          </div>

          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Plus size={18} />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </header>
  );
}
