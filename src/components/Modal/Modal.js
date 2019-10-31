import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { StyledModal } from './style'

function Portal({ children }) {
  const modalRoot = document.getElementById('modal-root')
  const [element] = useState(document.createElement('div'))

  useEffect(() => {
    modalRoot.appendChild(element)

    return function cleanup() {
      modalRoot.removeChild(element)
    }
  }, [modalRoot, element])

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
