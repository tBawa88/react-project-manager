import { SideBar } from './Components'
import { useState } from 'react';
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })
  const [taskList, setTaskList] = useState({});

  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
