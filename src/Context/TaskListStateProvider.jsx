import { createContext, useState } from "react"
import { v4 as uuid } from 'uuid';
export const TaskContext = createContext({
    taskList: {}
})

export default function TaskListProvider({ children }) {
    const [taskList, setTaskList] = useState({});
    const handleAddTask = (task, projectId) => {
        const newTask = {
            taskText: task,
            taskId: uuid(),
            projectId: projectId
        }
        setTaskList(oldList => {
            return {
                ...oldList,
                [projectId]: [...(oldList[projectId]) || [], newTask]
            }
        })
    }
    const handleDeleteTask = (taskId, projectId) => {
        setTaskList(oldList => {
            return {
                ...oldList,
                [projectId]: oldList[projectId].filter(task => task.taskId !== taskId)
            }
        })
    }

    const contextValue = {
        taskList,
        onAddTask: handleAddTask,
        onDeleteTask: handleDeleteTask
    }

    return <TaskContext.Provider value={contextValue}>
        {children}
    </TaskContext.Provider>

}
