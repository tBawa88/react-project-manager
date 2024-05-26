export const SideBar = ({
    onAddProject
}) => {

    return <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 rounded-r-xl text-stone-300 ">
        <h2 className="text-2xl font-bold mb-6 uppercase">Your Projects</h2>
        <div>
            <button onClick={onAddProject} className="px-4 py-2 rounded-md bg-stone-700 text-left hover:bg-stone-600 hover:text-stone-200">+ Add Project</button>
        </div>

        {/* list of projects here */}
        <ul>

        </ul>
    </aside>
}