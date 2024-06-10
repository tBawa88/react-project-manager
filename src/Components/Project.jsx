import { Tasks } from './';
import { useDispatch, useSelector } from 'react-redux';
import { projectActions } from '../store/projectStore';

export const Project = () => {
    const dispatch = useDispatch();
    const selectedProject = useSelector(state => state.project.selectedProject)
    // const { selectedProject: project, onDelete } = useContext(ProjectContext);

    const formattedDate = new Date(selectedProject.date).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-[40rem] my-16">
            <header className="border-b-2 border-stone-300 mb-6">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold text-stone-500">{ selectedProject.title }</h1>
                    <button className="p-2 text-stone-400 hover:text-stone-700"
                        onClick={ () => { dispatch(projectActions.onDeleteProject(selectedProject.id)) } }
                    >Delete</button>
                </div>
                <p className="text-md text-stone-400 my-2">{ formattedDate }</p>
                <p className="my-4 text-stone-700">{ selectedProject.description }</p>
            </header>

            <Tasks />

        </div>
    )
}