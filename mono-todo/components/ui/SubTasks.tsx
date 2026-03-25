
function SubTask({ taskName, completed, setSavedTasks, setPercentage }: { taskName: string, completed: boolean, setSavedTasks: any, setPercentage: any }) {
    
    const changeSubtaskState = () => {
        setSavedTasks((prev: any) => {
            const newTasks = prev.map((task: any) => {
                if (task.subtasks.some((subtask: any) => subtask.name === taskName)) {
                    const newSubtasks = task.subtasks.map((subtask: any) => {
                        if (subtask.name === taskName) {
                            return { ...subtask, completed: !completed };
                        }
                        return subtask;
                    });
                    return { ...task, subtasks: newSubtasks };
                }
                return task;
            });
            const allSubtasks = newTasks.flatMap((task: any) => task.subtasks);
            const completedSubtasks = allSubtasks.filter((subtask: any) => subtask.completed).length;
            const percentage = allSubtasks.length > 0 ? (completedSubtasks / allSubtasks.length) * 100 : 0;

            setPercentage(percentage);
            return newTasks;
        });
    }
    
    return ( 
        <div className="fieldset bg-base-100/90 border-base-300 rounded-box w-full border p-1 mb-1 hover:p-2 hover:drop-shadow-md transition-all duration-100 ">
            <label className="label">
                <input type="checkbox" {...(completed ? { defaultChecked: true } : {})} className="checkbox" onChange={changeSubtaskState}/>
                    {taskName}
            </label>
        </div>
     );
}

export default SubTask;