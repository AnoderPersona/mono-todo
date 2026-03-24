import { useState } from "react";
import CreateSubTask from "./CreateSubTask";

function FillSubTask() {
    const [subtaskCount, setSubTaskCount] = useState(0);

    const handleClick = () => {
        setSubTaskCount(subtaskCount + 1);
    }

    return(
        <div className="bg-base-200 w-full p-5 rounded-xl mb-4 my-2">

            {
                Array.from({ length: subtaskCount }).map((_, index) => (
                    <div key={index} className="inline-flex items-center justify-between w-full pb-2">
                        <input name="subtarea" type="text" placeholder="Sub-tarea" className="input w-full" />
                    </div>
                ))
            }
            <CreateSubTask onClick={handleClick} />
        </div>
     );
}
export default FillSubTask;