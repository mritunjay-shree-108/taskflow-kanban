// import React from 'react';
import TaskCard from "./TaskCard";

export default function Column({
  title,
  status,
  tasks,
  icon: Icon,
  badgeColor,
}) {
  // Filter only the tasks that belong to this column's status
  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="flex-1 min-w-[300px] bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4">
      {/* Column Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-slate-400" />}
          <h3 className="font-semibold text-sm text-slate-200">{title}</h3>
        </div>
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}
        >
          {columnTasks.length}
        </span>
      </div>

      {/* Task Cards List */}
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {columnTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs text-center">
            No tasks in this column
          </div>
        ) : (
          columnTasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
