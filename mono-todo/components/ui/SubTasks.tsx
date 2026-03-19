
function SubTask({ taskName }: { taskName: string }) {
    return ( 
        <div className="fieldset bg-base-100/90 border-base-300 rounded-box w-full border p-1 mb-1 hover:p-2 hover:drop-shadow-md transition-all duration-100 ">
            <label className="label">
                <input type="checkbox" defaultChecked className="checkbox" />
                {taskName}
            </label>
        </div>
     );
}

export default SubTask;