import { SideBar, NoProject, NewProject, Project } from './Components'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
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

  const handleAddTask = (task) => {
    const pId = projectState.selectedProject.id;
    const newTask = {
      taskText: task,
      taskId: uuid(),
      projectId: pId
    }
    setTaskList(oldList => {
      return {
        ...oldList,
        [pId]: [...(oldList[pId]) || [], newTask]
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



  let projectContent;
  let listOfTasks = undefined;
  if (projectState.selectedProject && taskList[projectState.selectedProject.id])
    listOfTasks = taskList[projectState.selectedProject.id];

  if (projectState.selectedProject === undefined)
    projectContent = <NoProject onAddProject={showNewProjectForm} />
  else if (projectState.selectedProject === null)
    projectContent = <NewProject onSave={handleSaveProject} onCancel={handleCancelProject} />
  else
    projectContent = <Project project={projectState.selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      taskList={listOfTasks}
    />


  return (
    <main className='h-screen my-8 flex gap-16'>
      <SideBar onAddProject={showNewProjectForm}
        onProjectClick={handleSelectProject}
        onDeselect={handleDeselectProject}
        projectList={projectState.projects}
        selectedId={projectState.selectedProject?.id}
      />
      {projectContent}
      {/* project content adjacent to side bar component */}
    </main>
  );
}

