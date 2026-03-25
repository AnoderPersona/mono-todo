import { useState } from "react";
import CreateSubTask from "./CreateSubTask";
import FillSubTask  from "./FillSubTask";

function FillTask({ setSavedTasks, setAddingTask }: { setSavedTasks: any, setAddingTask: any }) {

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
                
        // 2. Extraer todos los valores de los inputs usando FormData
        const formData = new FormData(e.currentTarget);
        
        const id_tarea = formData.get("id_tarea");
        const tarea = formData.get("tarea");
        const desc = formData.get("desc");
        // getAll te dará un arreglo con todo lo que se escribió en los inputs llamados "subtarea"
        const subtasks = formData.getAll("subtarea").map((subtask) => (subtask ? { name: subtask, completed: false, subtask_id: generateId() } : null)).filter(subtask => subtask !== null); 

        console.log('subtasks',subtasks);
        

        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const newTask = { task_id: `task_${id_tarea}_${tarea}`, task: tarea, desc: desc, subtasks: subtasks, selected: false };
        savedTasks.push(newTask);
        setSavedTasks(savedTasks);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        setAddingTask(false);
    }

    const generateId = () => {
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
        
    const handleClick = () => {
        setAddingTask(false);
    }
    return ( 
        <form onSubmit={handleSubmit} className="bg-secondary-content w-full px-3 pt-1 rounded-xl mb-1 animate-in fade-in duration-200">
            <div className="w-full text-right">
                <button type="button" className="btn btn-ghost btn-circle my-2 btn-accent size-6" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
            <div className="inline-flex items-center justify-between w-full">
                <input name="tarea" type="text" required  placeholder="Tarea" className="input" />
                <input name="desc" type="text" placeholder="Descripción" className="input" />
            </div>
            <FillSubTask />
            <input name='id_tarea' type='hidden' value={generateId()}></input>
            <button type="submit" className="bg-base-200 w-full p-3 rounded-xl mb-4 transition-all duration-100 cursor-pointer hover:drop-shadow hover:p-4">
                Agregar tarea    
            </button>
        </form>
     );
}

export default FillTask;