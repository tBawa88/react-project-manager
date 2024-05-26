import { SideBar, NoProject, NewProject, Project } from './Components'
import { useState } from 'react';

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
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
  const handleDeleteProject = (projectId) => {
    setProjectState(oldState => {
      const newProjectList = oldState.projects.filter(project => project.id !== projectId);
      return {
        projects: newProjectList,
        selectedProject: newProjectList.length ? newProjectList[0] : undefined
      }
    })
  }



  let projectContent;
  if (projectState.selectedProject === undefined)
    projectContent = <NoProject onAddProject={showNewProjectForm} />
  else if (projectState.selectedProject === null)
    projectContent = <NewProject onSave={handleSaveProject} onCancel={handleCancelProject} />
  else
    projectContent = <Project project={projectState.selectedProject}
      onDelete={handleDeleteProject} />


  return (
    <main className='h-screen my-8 flex gap-16'>
      <SideBar onAddProject={showNewProjectForm}
        onProjectClick={handleSelectProject}
        projectList={projectState.projects}
        selectedId={projectState.selectedProject?.id}
      />
      {projectContent}
      {/* project content adjacent to side bar component */}
    </main>
  );
}

