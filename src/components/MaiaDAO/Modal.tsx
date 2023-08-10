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
  position: relative;
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  padding: 0;
  z-index: 1;
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
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
