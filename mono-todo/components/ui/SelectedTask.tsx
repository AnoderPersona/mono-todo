import { AnimatedCircularProgressBar } from "@/components/ui/magicUI/animated-circular-progress-bar"
import { ConfettiButton } from "@/components/ui/magicUI/confetti"
import SubTask from "./SubTasks";

function SelectedTask({ taskName, taskDescription, percentage }: { taskName: string, taskDescription: string, percentage: number }) {
    

    return ( 
        <div className="bg-base-content w-full p-5 rounded-xl drop-shadow-lg mb-3 flex flex-col">
            <div className="inline-flex items-center justify-between w-full">
                <div className="w-2/3">
                    <label className="text-lg text-white">{taskName}</label>
                    <p className="text-sm text-white">{taskDescription}</p>
                </div>
                <AnimatedCircularProgressBar className="text-white w-1/3" value={percentage} gaugePrimaryColor="#fff2ab" gaugeSecondaryColor="oklch(85.2% 0.199 91.936)"/>
            </div>
            <div className="py-3">
                <SubTask taskName="Subtarea 1" />
                <SubTask taskName="Subtarea 2" />
                <SubTask taskName="Subtarea 3" />
            </div>
            <hr className="text-base-300 py-2"></hr>
            <ConfettiButton>Terminar tarea</ConfettiButton>
        </div>
     );
}

export default SelectedTask;