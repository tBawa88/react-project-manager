import { Input } from './';
import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
export const NewProject = ({
    onSave,
    onCancel
}) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const pTitle = title.current.value;
        const pDesc = description.current.value;
        const pDate = dueDate.current.value;
        //validations here

        //then call the onSave() 
        onSave({
            title: pTitle,
            description: pDesc,
            date: pDate,
            id: uuid()
        })

    }


    return (
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
    )
}