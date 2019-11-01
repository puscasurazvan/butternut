import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { StyledModal } from './style'

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
        <StyledModal.ModalWrapper onClick={toggle}>
          <StyledModal.ModalBody onClick={event => event.stopPropagation()}>
            {children}
          </StyledModal.ModalBody>
        </StyledModal.ModalWrapper>
      )}
    </Portal>
  )
}

export default Modal
