import MobileNav from "@/components/nav/mobile-nav";
import SideBar from "@/components/nav/side-bar";
import Tasks from "@/components/todos/task";
import UserProfile from "@/components/nav/user-profile";
import { User } from "lucide-react";
import TodoList from "@/components/todos/todo-list";

export default function LoggedIn() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <MobileNav />
        <TodoList />
      </div>
    </div>
  );
}
