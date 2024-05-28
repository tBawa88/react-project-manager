import { useContext } from 'react';
import { SideBar, NoProject, NewProject, Project } from './'
import { ProjectContext } from '../Context/ProjectStateProvider';
export const ProjectDashboard = () => {

    const { selectedProject } = useContext(ProjectContext);

    let projectContent;
    if (selectedProject === undefined)
        projectContent = <NoProject />
    else if (selectedProject === null)
        projectContent = <NewProject />
    else
        projectContent = <Project />

    return (
        <main className='h-screen my-8 flex gap-16'>
            <SideBar />
            {projectContent}
        </main>
    );
}