import { useContext } from 'react';
import image from '../assets/no-projects.png';
import { ProjectContext } from '../Context/ProjectStateProvider';


export const NoProject = () => {
    const { onAddNewProject } = useContext(ProjectContext);
    return (
        <div className='w-2/3 text-center mt-24'>
            <img src={image} alt="No project selected" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-2xl font-bold text-center my-4 text-stone-600'>No Project Selected</h2>
            <p className='mb-4 text-xl text-stone-500'>Select a project or create a new one!</p>
            <div>
                <button onClick={onAddNewProject} className='py-2 px-4 bg-stone-800 text-stone-300 rounded-md mt-2 hover:bg-stone-700 hover:text-stone-200'>
                    Create new project</button>
            </div>
        </div>
    )
} 