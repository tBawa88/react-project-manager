import { NewTask } from './'
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/taskStore';

export const Tasks = () => {
    const dispatch = useDispatch();
    const taskList = useSelector(state => state.task.taskList);
    const selectedProject = useSelector(state => state.project.selectedProject);
    let ulClasses = 'my-4 rounded-md bg-stone-100';
    if (taskList.length)
        ulClasses += 'p-2'
    const handleDelete = (taskId) => {
        dispatch(taskActions.onDeleteTask(taskId))
    }


    const listOfTasks = taskList.map(task => {
        if (task.projectId === selectedProject.id) {
            return (
                <li key={ task.id } className='flex justify-between my-4'>
                    <span>{ task.content }</span>
                    <button className='text-stone-900 hover:text-red-700'
                        onClick={ () => handleDelete(task.id) }
                    >Clear</button>
                </li>
            )
        }
    })




    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask />
        {
            taskList.length === 0 && <p className='text-stone-400 mb-4'>No tasks inside this project</p>
        }

        <ul key={ selectedProject.id } className={ ulClasses }>
            { listOfTasks }
        </ul>

    </section >

}