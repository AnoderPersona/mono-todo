'use client'

import SelectedTask from "@/components/ui/SelectedTask";
import RegularTask from "@/components/ui/RegularTask";
import CreateTask from "./CreateTask";
import { AnimatedThemeToggler } from "./magicUI/animated-theme-toggler";
import FillTask from "./FillTask";
import { useState, useEffect } from "react";

export default function Home() {
    // const percentage = 75;
    const [addingTask, setAddingTask] = useState(false);
    const [savedTasks, setSavedTasks] = useState<any[]>([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setSavedTasks(tasks);
    }, []);

    const regularTasks = savedTasks?.filter((task: any) => !task.selected) ?? [];
    const selectedTask = savedTasks?.find((task: any) => task.selected) ?? null;

    const handleClick = () => {
        setAddingTask(true);
    }
    
    console.log(regularTasks);

    const selectTask = (id_task: string, subtasks: any[]) => {
        const updatedTasks = savedTasks.map((task: any) => {
            if (task.task_id === id_task) {
                return { ...task, selected: true };
            } else {
                return { ...task, selected: false };
            }
        });
        const percentage = subtasks.filter(subtask => subtask.completed).length / subtasks.length * 100 || 0;
        setSavedTasks(updatedTasks);
        setPercentage(percentage);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    
    return (
    <main className="min-h-screen w-full max-w-3xl py-5 px-10 bg-base-100 flex flex-col items-end">
        <AnimatedThemeToggler className="pb-2"/>
        {selectedTask && <SelectedTask taskName={selectedTask.task} taskId={selectedTask.task_id} taskDescription={selectedTask.desc} subtasks={selectedTask.subtasks} percentage={percentage} setPercentage={setPercentage} setSavedTasks={setSavedTasks}/>}
        {
            regularTasks.map((task, index) => (
                <RegularTask key={index} task_id={task.task_id} taskName={task.task} onClick={() => selectTask(task.task_id, task.subtasks)}/>
            ))
        }
        {
            addingTask && <FillTask setSavedTasks={setSavedTasks} setAddingTask={setAddingTask}/>
        }
        <CreateTask onClick={() => handleClick()} />
    </main>
  );
}
