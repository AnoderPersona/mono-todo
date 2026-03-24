
function RegularTask({ taskName, task_id, onClick }: { taskName: string, task_id: string, onClick: () => void }) {
    return ( 
        <div onClick={onClick} className="bg-secondary-content w-full p-5 rounded-xl mb-1 hover:p-6 hover:drop-shadow-md transition-all duration-100 cursor-pointer">
            <div className="inline-flex items-center justify-between w-full">
                <label className="text-lg text-neutral cursor-pointer">{taskName}</label>
            </div>
        </div>
     );
}

export default RegularTask;