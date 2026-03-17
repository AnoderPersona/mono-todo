import Image from "next/image";
import SelectedTask from "@/components/ui/SelectedTask";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-10 bg-white dark:bg-black sm:items-start">
        <SelectedTask />
      
      </main>
    </div>
  );
}
