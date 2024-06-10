import { SideBar, NoProject, NewProject, Project } from './'
import { useSelector } from 'react-redux';

export const ProjectDashboard = () => {
    const selectedProject = useSelector(state => state.project.selectedProject);

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
            { projectContent }
        </main>
    );
}