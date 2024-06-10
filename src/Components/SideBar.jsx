import { useSelector, useDispatch } from "react-redux";
import { projectActions } from "../store/projectStore";

export const SideBar = () => {
    const dispatch = useDispatch();
    const { projectList, selectedProject } = useSelector(state => state.project);
    const selectedId = selectedProject?.id;

    const listOfProjects = projectList.map(project => {
        let buttonClass = "w-full text-left p-1 text-stone-400 hover:text-stone-300 overflow-hidden"
        if (selectedId === project.id) buttonClass = "w-full text-left p-1 text-stone-50 bg-stone-800 rounded-sm overflow-hidden"
        return (
            <li key={ project.id }>
                <button
                    className={ buttonClass }
                    onClick={ (e) => {
                        e.stopPropagation();
                        dispatch(projectActions.onSelectProject(project));
                    } }
                >{ project.title }</button>
            </li>)
    })

    return <>
        <aside
            className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-300 "
            onClick={ () => dispatch(projectActions.onDeselectProject()) }
        >
            <h2 className="text-2xl font-bold mb-6 uppercase">Your Projects</h2>
            <div>
                <button
                    onClick={ (e) => {
                        e.stopPropagation();
                        dispatch(projectActions.onAddNewProject());
                    } }
                    className="px-4 py-2 rounded-md bg-stone-700 text-left hover:bg-stone-600 hover:text-stone-200"
                >
                    + Add Project
                </button>
            </div>

            <ul className="my-6">
                { listOfProjects }
            </ul>
        </aside>
    </>
}