import { NewTask } from './'

export const Tasks = ({
    taskList,
    onAddTask,
    onDeleteTask }) => {

    let ulClasses = 'my-4 rounded-md bg-stone-100';
    if (taskList)
        ulClasses = 'p-2 my-4 rounded-md bg-stone-100'
    const listOfTasks = (
        <ul className={ulClasses}>
            {
                taskList?.map(task => (
                    <li key={task.taskId} className='flex justify-between my-4'>
                        <span>{task.taskText}</span>
                        <button className='text-stone-900 hover:text-red-700'
                            onClick={() => onDeleteTask(task.taskId, task.projectId)}
                        >Clear</button></li>
                ))
            }
        </ul>
    )

    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
        {
            (!taskList || taskList.length === 0) && <p className='text-stone-400 mb-4'>No tasks inside this project</p>
        }
        {
            taskList?.length !== 0 && listOfTasks
        }

    </section >

}