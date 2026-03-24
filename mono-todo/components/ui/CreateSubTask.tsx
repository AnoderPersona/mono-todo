
function CreateSubTask({ onClick }: { onClick: () => void }) {
    return ( 
        <button type="button" onClick={onClick} className="bg-secondary-content w-full p-2 rounded-xl mt-1 drop-shadow-sm shadow-accent transition-all duration-100 cursor-pointer active:drop-shadow-none">
            <div className="inline-flex items-center justify-between w-full">
                <label className="text-sm text-center w-full cursor-pointer">
                    Agregar sub-tarea
                </label>
            </div>
        </button>
     );
}

export default CreateSubTask;