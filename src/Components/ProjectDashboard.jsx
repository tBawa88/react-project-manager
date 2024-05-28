import { useContext } from 'react';
import { SideBar, NoProject, NewProject, Project } from './'
import { ProjectContext } from '../Context/ProjectStateProvider';
import TaskListProvider from '../Context/TaskListStateProvider';
export const ProjectDashboard = () => {

    const { selectedProject } = useContext(ProjectContext);


    let projectContent;
    if (selectedProject === undefined)
        projectContent = <NoProject />
    else if (selectedProject === null)
        projectContent = <NewProject />
    else
        projectContent = <TaskListProvider>
            <Project />
        </TaskListProvider>




    return (
        <main className='h-screen my-8 flex gap-16'>
            <SideBar />
            {projectContent}
            {/* project content adjacent to side bar component */}
        </main>
    );
}