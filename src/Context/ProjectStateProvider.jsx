import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

//initializing context value for autocomplete purposes, this is not necessary
export const ProjectContext = createContext({
    selectedProject: undefined,
    projectList: [],
    taskList: [],
    onAddNewProject: () => { },
    onCancel: () => { },
    onSave: () => { },
    onProjectClick: () => { },
    onDeselectProject: () => { },
    onDelete: () => { },
    onAddTask: () => { },
    onDeleteTask: () => { }
})



export default function ProjectStateProvider({ children }) {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: [],
    })
    const [taskList, setTaskList] = useState({});

    const showNewProjectForm = () => {
        setProjectState(oldState => ({
            ...oldState,
            selectedProject: null
        }))
    }
    const handleCancelProject = () => {
        setProjectState(oldState => ({ ...oldState, selectedProject: undefined }))
    }
    const handleSaveProject = (projectInfo) => {
        setProjectState(oldState => ({ projects: [...oldState.projects, projectInfo], selectedProject: projectInfo }));
    }
    const handleSelectProject = (clickedProject) => {
        setProjectState(oldState => ({ ...oldState, selectedProject: clickedProject }))
    }
    const handleDeselectProject = () => {
        setProjectState(oldState => ({ ...oldState, selectedProject: undefined }))
    }
    const handleDeleteProject = (projectId) => {
        setProjectState(oldState => {
            const newProjectList = oldState.projects.filter(project => project.id !== projectId);
            return {
                projects: newProjectList,
                selectedProject: newProjectList.length ? newProjectList[0] : undefined
            }
        })
    }
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
        selectedProject: projectState.selectedProject,
        projectList: projectState.projects,
        taskList,
        onAddNewProject: showNewProjectForm,
        onCancel: handleCancelProject,
        onSave: handleSaveProject,
        onProjectClick: handleSelectProject,
        onDeselectProject: handleDeselectProject,
        onDelete: handleDeleteProject,
        onAddTask: handleAddTask,
        onDeleteTask: handleDeleteTask
    }

    return <>
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    </>

}