import React, { ComponentType, FC, LazyExoticComponent, useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

const ModalContent = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: rgb(19, 26, 42);
  border-radius: 14px;
  padding: 26px 32px;
  position: absolute;
  top: 90px;
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #1c2c51;
  border: none;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  z-index: 1;
  width: 32px;
  border-radius: 6px;
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  contentComponent: string
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal, contentComponent }: ModalProps) => {
  const [Content, setContent] = useState<LazyExoticComponent<ComponentType<any>> | null>(null)

  useEffect(() => {
    if (contentComponent) {
      const DynamicComponent = React.lazy(() => import(`./Partners/${contentComponent}`))
      setContent(DynamicComponent)
    }
  }, [contentComponent])

  if (!isOpen || !Content) {
    return null
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>
          <svg //X icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" //viewBox="0 0 24 24" is the size of the icon
            fill="none"
            stroke="#4C82FB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </ModalCloseButton>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
