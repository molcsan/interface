import styled from 'styled-components/macro'

import Poetry1 from '../../assets/images/maia/poetry-1.png'
import Poetry3 from '../../assets/images/maia/poetry-3.png'
import HermesSection from '../../components/MaiaDAO/HermesSection'
import HeroSection from '../../components/MaiaDAO/HeroSection'
import MaiaFooter from '../../components/MaiaDAO/MaiaFooter'
import MaiaPartners from '../../components/MaiaDAO/MaiaPartners'
import MaiaSection from '../../components/MaiaDAO/MaiaSection'
import { WidePageWrapper } from '../../components/swap/styleds'

const MaiaPage = styled.div`
  position: relative;
`

const FooterPoetry = styled.div<{ left?: string; right?: string; bottom?: string; top?: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom || 'unset'};
  top: ${({ top }) => top || 'unset'};
  right: ${({ right }) => (right ? right : 'unset')};
  left: ${({ left }) => (left ? left : 'unset')};
  display: flex;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 655px;
    opacity: 0.75;
  }
`

export default function MaiaDAO() {
  return (
    <MaiaPage>
      <HeroSection />
      <WidePageWrapper>
        <MaiaSection />
        <HermesSection />
        <MaiaPartners />
      </WidePageWrapper>
      <MaiaFooter />
      <FooterPoetry bottom={'0px'} right={'0px'}>
        <img src={Poetry1} alt="Poetry" />
      </FooterPoetry>
      <FooterPoetry bottom={'0px'} left={'0px'}>
        <img src={Poetry3} style={{ maxWidth: 635 }} alt="Poetry" />
      </FooterPoetry>
    </MaiaPage>
  )
}
