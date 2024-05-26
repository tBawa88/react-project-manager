import { Input, Modal } from './';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
export const NewProject = ({
    onSave,
    onCancel
}) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const dialog = useRef();
    const handleSave = () => {
        const pTitle = title.current.value;
        const pDesc = description.current.value;
        const pDate = dueDate.current.value;
        //validations here

        if (pTitle === '' ||
            pDesc === '' ||
            pDate === ''
        ) {
            dialog.current.open();
            return;
        }
        //then call the onSave() 
        onSave({
            title: pTitle,
            description: pDesc,
            date: pDate,
            id: uuid()
        })

    }


    return (
        <>
            <Modal ref={dialog} buttonCaption="Close">
                <h2 className='text-xl font-extrabold uppercase my-4 text-stone-700'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Opps... Looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please provide a valid input for every field</p>
            </Modal>

            <main className='w-[35rem] mt-20 '>
                <div className='flex justify-end gap-4'>
                    <button className='py-2 px-4 rounded-md hover:bg-stone-100'
                        onClick={onCancel}
                    >Cancel</button>
                    <button className='py-2 px-6 rounded-md bg-stone-800 text-stone-200 hover:bg-stone-900 hover:text-stone-50'
                        onClick={handleSave}
                    >Save</button>
                </div>
                <div>
                    <Input ref={title} label='title' type="text" />
                    <Input ref={description} label='description' textArea />
                    <Input ref={dueDate} label='due date' type="date" />
                </div>
            </main>
        </>
    )
}