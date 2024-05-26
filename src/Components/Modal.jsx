import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle } from 'react'

export const Modal = () => {

    return createPortal(<dialog>
        <h1>Invalid Input</h1>
        <p>Oops...looks like you left a field empty</p>
        <p>Make sure to fill every input field </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>, document.querySelector('#modal-root'))
}