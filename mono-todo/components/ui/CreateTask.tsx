
function CreateTask({ onClick }: { onClick: () => void }) {
    return ( 
        <button onClick={onClick} className="bg-base-200 w-full p-5 rounded-xl mb-1 drop-shadow-md transition-all duration-100 cursor-pointer">
            <div className="inline-flex items-center justify-between w-full">
                <label className="text-lg text-center w-full cursor-pointer">
                    <span className="material-symbols-outlined">add</span>
                </label>
            </div>
        </button>
     );
}

export default CreateTask;