import { useState } from "react";
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../store/taskStore";

export const NewTask = () => {
    const [task, setTask] = useState('');
    const selectedProject = useSelector(state => state.project.selectedProject);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setTask(event.target.value);
    }
    const handleAddTask = () => {
        if (task.trim() === '')
            return;
        else {
            const newTask = {
                id: uuid(),
                content: task,
                projectId: selectedProject.id
            }
            dispatch(taskActions.onAddTask(newTask));
            setTask('');
        }
    }
    return <div className="flex items-center gap-4 mb-8">
        <input
            type="text"
            value={ task }
            onChange={ handleChange }
            className="w-[18rem] px-2 py-1 outline-none focus:border-b-2 focus:border-stone-500 rounded-sm bg-stone-200"
        />
        <button
            className="text-stone-700 hover:text-stone-950 p-1"
            onClick={ handleAddTask }
        >Add Task</button>
    </div>
}