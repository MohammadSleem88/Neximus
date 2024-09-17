import { signInAction } from "@/actions/auth-action";
import Tasks from "@/components/todovex/tasks";
import { Button } from "@/components/ui/button";

export default function LoggedIn() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Todovex</h1>

      <p>LoggedIn</p>
      <Tasks />
    </div>
  );
}
