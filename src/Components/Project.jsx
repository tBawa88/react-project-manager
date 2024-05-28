import { Tasks } from './';
import { useContext } from 'react';
import { ProjectContext } from '../Context/ProjectStateProvider';

export const Project = () => {


    const { selectedProject: project, onDelete } = useContext(ProjectContext);

    const formattedDate = new Date(project.date).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-[40rem] my-16">
            <header className="border-b-2 border-stone-300 mb-6">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold text-stone-500">{project.title}</h1>
                    <button className="p-2 text-stone-400 hover:text-stone-700"
                        onClick={() => { onDelete(project.id) }}
                    >Delete</button>
                </div>
                <p className="text-md text-stone-400 my-2">{formattedDate}</p>
                <p className="my-4 text-stone-700">{project.description}</p>
            </header>

            <Tasks />

        </div>
    )
}