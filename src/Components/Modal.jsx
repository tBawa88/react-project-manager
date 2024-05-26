import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useRef } from 'react'

export const Modal = forwardRef(({ children, buttonCaption }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(<dialog ref={dialog} className='p-4 rounded-md backdrop:bg-stone-800/80'>
        {children}
        <form method="dialog" className='text-right'>
            <button className='p-2 px-4 text-stone-200 bg-stone-700 rounded-md'>{buttonCaption}</button>
        </form>
    </dialog>, document.querySelector('#modal-root'))
})