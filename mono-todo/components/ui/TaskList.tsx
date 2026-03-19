'use client'

import SelectedTask from "@/components/ui/SelectedTask";
import RegularTask from "@/components/ui/RegularTask";
import CreateTask from "./CreateTask";
import { AnimatedThemeToggler } from "./magicUI/animated-theme-toggler";
import FillTask from "./FillTask";

export default function Home() {
    const taskName = "Tarea muy importante que está seleccionada";
    const taskDescription = "Esta es la descripción de la tarea seleccionada, que es muy importante y tiene un progreso del 75%";
    const percentage = 75;
    const taskNames = ["Tarea siguiente 1", "Tarea siguiente 2", "Tarea siguiente 3"];
  
    const handleClick = (id: number) => {
        localStorage.setItem(`tasks_${id}`, JSON.stringify('holis'));
    }
    
    return (
    <main className="min-h-screen w-full max-w-3xl py-32 px-10 bg-base-100 flex flex-col items-end">
        <AnimatedThemeToggler className="pb-2"/>
        <SelectedTask taskName={taskName} taskDescription={taskDescription} percentage={percentage} />
        {
            taskNames.map((name, index) => (
                <RegularTask key={index} taskName={name} />
            ))
        }
        <FillTask />
        <CreateTask onClick={() => handleClick(1)} />
    </main>
  );
}
