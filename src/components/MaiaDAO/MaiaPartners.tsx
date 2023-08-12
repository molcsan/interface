import { useState } from 'react'
import { Text } from 'rebass'
import styled from 'styled-components/macro'

import { ThemedGlobalStyle } from '../../theme'
import Modal from './Modal'

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 135px);
  margin: 0 auto;
  justify-content: center;
  gap: 72px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto 80px;
  }
`
const PartnerCard = styled.div`
  --glow-duration: 0.5s;
  --glow-color: #dd3aff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  aspect-ratio: 1;
  transition: var(--glow-duration, 0.5s);
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--glow-color, #dd3aff);
    transition: var(--glow-duration, 0.5s);
    transform: scale(0.9);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.025);
    box-shadow: 0 0 13px var(--glow-color, #dd3aff);
  }

  &:hover {
    color: var(--glow-color, #dd3aff);
    box-shadow: 0 0 13px var(--glow-color, #dd3aff);
    text-shadow: 0 0 5px var(--glow-color, #dd3aff);

    img {
      filter: grayscale(0%);
      scale: 1.1;
    }
  }

  img {
    height: 46px;
    width: auto;
    filter: grayscale(100%);
    transition: all var(--glow-duration, 0.5s);
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: 0;
  }
`

const PartnerCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgb(17 21 53);
  border: 1px solid rgb(255 255 255 / 5%);
  border-radius: 50%;
  height: 100%;
  width: 100%;
`

const TitleSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`

const Title = styled(Text)`
  font-size: 52px;
  font-weight: 600;
  line-height: 1.15;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  padding-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    line-height: 1.15;
    font-size: 32px;
    padding-bottom: 12px;
  }
`

// const Description = styled.p`
//   font-size: 18px;
//   line-height: 1.55;
//   color: ${({ theme }) => theme.textSecondary};
//   max-width: 480px;
//   margin: 0;
//
//   @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
//     font-size: 16px;
//   }
// `

export default function MaiaPartners() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (contentComponent: string) => {
    setModalContent(contentComponent)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const partnerList = []
  for (let i = 0; i < 8; i++) {
    partnerList.push(
      <PartnerCard onClick={() => openModal('Binance')}>
        <PartnerCardContent>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
        </PartnerCardContent>
      </PartnerCard>
    )
  }

  return (
    <>
      <ThemedGlobalStyle modalOpen={isModalOpen} />
      <TitleSection>
        <Title>Partners</Title>
        {/*<Description>*/}
        {/*  MaiaDAO is a community-driven project. We are grateful to our partners for their support. (Placeholder)*/}
        {/*</Description>*/}
      </TitleSection>
      <PartnerGrid>{partnerList}</PartnerGrid>
      <Modal isOpen={isModalOpen} closeModal={closeModal} contentComponent={modalContent} />
    </>
  )
}
