import { Input, Modal } from './';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import projectNotValid from '../utils/projectNotValid'
import { useDispatch } from 'react-redux';
import { projectActions } from '../store/projectStore';

export const NewProject = () => {
    const dispatch = useDispatch();

    //list of refs
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const dialog = useRef();

    const handleSave = () => {
        //validating input values
        if (
            projectNotValid(
                title.current.value,
                description.current.value,
                dueDate.current.value
            )
        ) {
            dialog.current.open();
            return;
        }
        //if validations pass
        const newProject = {
            title: title.current.value,
            description: description.current.value,
            date: dueDate.current.value,
            id: uuid()
        }
        dispatch(projectActions.onSaveProject(newProject));
    }

    const handleCancel = () => {
        dispatch(projectActions.onCancelProject());
    }

    return (
        <>
            <Modal ref={ dialog } buttonCaption="Close">
                <h2 className='text-xl font-extrabold uppercase my-4 text-stone-700'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Opps... Looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please provide a valid input for every field</p>
            </Modal>

            <main className='w-[35rem] mt-20 '>
                <div className='flex justify-end gap-4'>
                    <button className='py-2 px-4 rounded-md hover:bg-stone-100'
                        onClick={ handleCancel }
                    >Cancel</button>
                    <button className='py-2 px-6 rounded-md bg-stone-800 text-stone-200 hover:bg-stone-900 hover:text-stone-50'
                        onClick={ handleSave }
                    >Save</button>
                </div>
                <div>
                    <Input ref={ title } label='title' type="text" />
                    <Input ref={ description } label='description' textArea />
                    <Input ref={ dueDate } label='due date' type="date" />
                </div>
            </main>
        </>
    )
}