import { Input } from './';

export const NewProject = () => {

    return (
        <main className='w-[35rem] mt-20 '>
            <div className='flex justify-end gap-4'>
                <button className='py-2 px-4 rounded-md hover:bg-stone-100'>Cancel</button>
                <button className='py-2 px-6 rounded-md bg-stone-800 text-stone-200 hover:bg-stone-900 hover:text-stone-50'>Save</button>
            </div>
            <div>
                <Input label='title' type="text" />
                <Input label='description' textArea />
                <Input label='due date' type="date" />
            </div>
        </main>
    )
}