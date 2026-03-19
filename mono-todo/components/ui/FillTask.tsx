import FillSubTask  from "./FillSubTask";

function FillTask() {
    return ( 
        <div className="bg-secondary-content w-full p-5 rounded-xl mb-1">
            <div className="inline-flex items-center justify-between w-full">
                <input type="text" placeholder="Tarea" className="input" />
                <input type="text" placeholder="Descripción" className="input" />
            </div>
            <FillSubTask />
        </div>
     );
}

export default FillTask;