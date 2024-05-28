import { createContext, useState } from "react";

//initializing context value for autocomplete purposes, this is not necessary
export const ProjectContext = createContext({
    selectedProject: undefined,
    projectList: [],
    onAddNewProject: () => { },
    onCancel: () => { },
    onSave: () => { },
    onProjectClick: () => { },
    onDeselectProject: () => { },
    onDelete: () => { }
})



export default function ProjectStateProvider({ children }) {
    const [projectState, setProjectState] = useState({
        selectedProject: undefined,
        projects: [],
    })

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

    const contextValue = {
        selectedProject: projectState.selectedProject,
        projectList: projectState.projects,
        onAddNewProject: showNewProjectForm,
        onCancel: handleCancelProject,
        onSave: handleSaveProject,
        onProjectClick: handleSelectProject,
        onDeselectProject: handleDeselectProject,
        onDelete: handleDeleteProject
    }

    return <>
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    </>

}