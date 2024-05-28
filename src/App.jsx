
import { ProjectDashboard } from './Components';
import ProjectStateProvider from './Context/ProjectStateProvider';
export default function App() {

  return <>
    <ProjectStateProvider>
      <ProjectDashboard />
    </ProjectStateProvider>
  </>

}

