import { AnimatedCircularProgressBar } from "@/components/ui/magicUI/animated-circular-progress-bar"
import { ConfettiButton } from "@/components/ui/magicUI/confetti"
import SubTask from "./SubTasks";

function SelectedTask({ taskName, taskDescription, percentage, setPercentage , setSavedTasks, taskId, subtasks = [] }: { taskName: string, taskDescription: string, percentage: number, setPercentage: any, setSavedTasks: any, taskId: string, subtasks: any[] }) {
        
    // subtasks.filter(subtask => subtask.completed).length / subtasks.length * 100 !== percentage && setPercentage(subtasks.filter(subtask => subtask.completed).length / subtasks.length * 100);

    const finishTask = () => {
        setPercentage(100);
        setSavedTasks((prev: any) => {
            const savedTasks = prev.filter((task: any) => task.task_id != taskId);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
            return savedTasks;
        });
    }

    return ( 
        <div className="bg-base-content w-full p-5 rounded-xl drop-shadow-lg mb-3 flex flex-col">
            <div className="inline-flex items-center justify-between w-full">
                <div className="w-2/3">
                    <label className="text-lg text-white">{taskName}</label>
                    <p className="text-sm text-white">{taskDescription}</p>
                </div>
                {subtasks.length > 0 && (
                    <AnimatedCircularProgressBar className="text-white w-1/3" value={percentage} gaugePrimaryColor="#fff2ab" gaugeSecondaryColor="oklch(85.2% 0.199 91.936)"/>
                )}
            </div>
            <div className="py-3">
                {
                    subtasks.map((subtask, index) => (
                        <SubTask key={index} taskName={subtask.name} completed={subtask.completed} setSavedTasks={setSavedTasks} setPercentage={setPercentage}/>
                    ))
                }
            </div>
            <hr className="text-base-300 py-2"></hr>
            <ConfettiButton clickFunction={finishTask}>Terminar tarea</ConfettiButton>
        </div>
     );
}

export default SelectedTask;