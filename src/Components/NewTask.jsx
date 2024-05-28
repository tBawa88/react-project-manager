import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskListStateProvider";
import { ProjectContext } from "../Context/ProjectStateProvider";

export const NewTask = () => {
    const [task, setTask] = useState('');
    const { onAddTask } = useContext(TaskContext);
    const { selectedProject } = useContext(ProjectContext);
    const handleChange = (event) => {
        setTask(event.target.value);
    }
    const handleButtonClick = () => {
        if (task.trim() === '')
            return;
        else {
            onAddTask(task, selectedProject.id);
            setTask('');
        }
    }
    return <div className="flex items-center gap-4 mb-8">
        <input type="text" value={task} onChange={handleChange} className="w-[18rem] px-2 py-1 outline-none focus:border-b-2 focus:border-stone-500 rounded-sm bg-stone-200" />
        <button className="text-stone-700 hover:text-stone-950 p-1"
            onClick={handleButtonClick}
        >Add Task</button>
    </div>
}