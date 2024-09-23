"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Task from "./task";

export default function TodoList() {
  const todos = useQuery(api.todos.get);

  if (!todos) {
    return <p>Loading...</p>; // Ensures the loading message is rendered
  }

  return (
    <div className="xl:px-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl py-4">Inbox</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        {todos.map((task) => (
          <Task key={task._id} {...task} />
        ))}
      </div>
    </div>
  );
}
