import { Text } from 'rebass'
import styled from 'styled-components/macro'

import backgroundImage from '../../assets/images/maia-hero-bg.jpg'
import { HermesButton } from './HermesSection'
import Parallax from './Parallax'

const HeroSectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 72px 100px;
  height: calc(100vh - 72px);
  background-color: transparent;
  z-index: 1;
  position: relative;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 75%, rgb(0, 0, 0, 0) 100%);

  &:before {
    content: '';
    background-image: linear-gradient(rgba(0, 15, 50, 0.55), rgba(0, 15, 50, 0.55)), url('${backgroundImage}'),
      linear-gradient(rgb(15, 25, 45), rgb(15, 25, 45));
    background-position: 0 0, 0 0, 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(15px) opacity(0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    padding: 72px 32px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    flex-direction: column;
    align-items: center;
    gap: 50px;

    &:before {
      background-position-x: right;
    }
  }
`

const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  row-gap: 24px;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`

const HeroSectionTitle = styled(Text)`
  font-size: 80px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.textPrimary};

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 64px;
  }
`

const HeroSectionDescription = styled(Text)`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 300;
  color: ${({ theme }) => theme.textPrimary};
  padding-right: 48px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    font-size: 18px;
    padding-right: 20px;
  }
`

const HeroSectionImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    box-shadow: rgba(17, 17, 26, 0.7) 0px 12px 16px, rgba(17, 17, 26, 0.7) 0px 24px 24px,
      rgba(17, 17, 26, 0.7) 0px 48px 56px;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    width: 100%;
    max-width: 500px;
  }
`

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroSectionContent>
        <HeroSectionTitle>Maia DAO</HeroSectionTitle>
        <HeroSectionDescription>
          The decentralized platform that brings you the best in class trading experience. With Maia, you can trade any
          asset securely and transparently, without the need for intermediaries.
        </HeroSectionDescription>
        <HermesButton>Read More</HermesButton>
      </HeroSectionContent>
      <HeroSectionImage>
        <Parallax speedDivider={16} invert={true}>
          <img
            src="https://maiadao-front-1id71tint-binomio.vercel.app/static/media/bg-section3.a43dbe35.png"
            alt="placeholder"
          />
        </Parallax>
      </HeroSectionImage>
    </HeroSectionContainer>
  )
}
