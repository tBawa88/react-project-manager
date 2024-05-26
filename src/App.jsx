import { SideBar, NoProject, NewProject } from './Components'
import { useState } from 'react';
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })
  const [taskList, setTaskList] = useState({});

  const handleNewProject = () => {
    setProjectState(oldState => ({
      ...oldState,
      selectedProject: null
    }))
  }






  let projectContent;
  if (projectState.selectedProject === undefined)
    projectContent = <NoProject onAddProject={handleNewProject} />
  else if (projectState.selectedProject === null)
    projectContent = <NewProject />
  return (
    <main className='h-screen my-8 flex gap-16'>
      <SideBar onAddProject={handleNewProject} />
      {projectContent}
      {/* project content adjacent to side bar component */}
    </main>
  );
}

export default App;
