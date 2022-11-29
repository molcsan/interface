// @ts-ignore
import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import backgroundImage from '../../assets/images/maia-hero-bg.jpg'
import { ButtonPrimary } from '../Button'
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
`

const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  row-gap: 24px;
  position: relative;
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
`

const HeroButton = styled(ButtonPrimary)`
  border-radius: 11px;
  padding: 16px 30px;
  font-size: 18px;
  width: max-content;
`

export default function HeroSection() {
  const theme = useTheme()
  return (
    <HeroSectionContainer>
      <HeroSectionContent>
        <Text fontSize={80} fontWeight={600} lineHeight={1} color={theme.textPrimary}>
          Maia DAO
        </Text>
        <Text fontSize={24} lineHeight={1.25} fontWeight={300} color={theme.textPrimary} paddingRight={48}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac accumsan ligula. Praesent eget egestas orci.
          Lorem ipsum dolor sit amet.
          <br />
          <br />
          (general description of ecosystem placeholder)
        </Text>
        <HeroButton>Read More</HeroButton>
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
