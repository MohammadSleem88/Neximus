"use client";

import { Checkbox } from "../ui/checkbox";

// Adjusted interface to match your data structure
interface TaskProps {
  _id: string;
  description?: string;
  priority?: number;
  userId: string;
  projectId: string;
  // Add any other properties you want to display from your task data
}

export default function Task({ _id, description, priority }: TaskProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={`task-${_id}`} />
      <label
        htmlFor={`task-${_id}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {description || "No Description"} (Priority: {priority || "N/A"})
      </label>
    </div>
  );
}
