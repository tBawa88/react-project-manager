import { useContext } from 'react'
import { ProjectContext } from '../Context/ProjectStateProvider'

export const SideBar = () => {

    const { onAddNewProject, onProjectClick, onDeselectProject, projectList, selectedProject } = useContext(ProjectContext);
    const selectedId = selectedProject?.id;
    const listOfProjects = projectList.map(project => {
        let buttonClass = "w-full text-left p-2 text-stone-400 hover:text-stone-300"
        if (selectedId === project.id) buttonClass = "w-full text-left p-2 text-stone-50 bg-stone-800 rounded-sm"
        return <li key={project.id}><button className={buttonClass}
            onClick={(e) => {
                e.stopPropagation();
                onProjectClick(project);
            }}
        >{project.title}</button></li>
    })

    return <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-300"
        onClick={onDeselectProject}
    >
        <h2 className="text-2xl font-bold mb-6 uppercase">Your Projects</h2>
        <div>
            <button onClick={(e) => {
                e.stopPropagation();
                onAddNewProject();
            }} className="px-4 py-2 rounded-md bg-stone-700 text-left hover:bg-stone-600 hover:text-stone-200">+ Add Project</button>
        </div>

        <ul className="my-6">
            {listOfProjects}
        </ul>
    </aside>
}