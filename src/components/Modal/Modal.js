import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

const Portal = ({ children }) => {
  const root = document.getElementById('modal-root')
  const [element] = useState(document.createElement('div'))

  useEffect(() => {
    root.appendChild(element)

    return function cleanup() {
      root.removeChild(element)
    }
  }, [root, element])

  return createPortal(children, element)
}

const Modal = ({ children, toggle, open }) => {
  return (
    <Portal>
      {open && (
        <div className='modal' onClick={toggle}>
          <div className='modal__body' onClick={event => event.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </Portal>
  )
}

export default Modal
