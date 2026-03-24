
function CreateTask({ onClick }: { onClick: () => void }) {
    return ( 
        <button onClick={onClick} className="bg-base-200 w-full p-5 rounded-xl mb-20 drop-shadow-md shadow-accent transition-all duration-100 cursor-pointer active:drop-shadow-none active:mt-1">
            <div className="inline-flex items-center justify-between w-full">
                <label className="text-lg text-center w-full cursor-pointer">
                    <span className="material-symbols-outlined">add</span>
                </label>
            </div>
        </button>
     );
}

export default CreateTask;