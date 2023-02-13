import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import CoinImage4 from '../../assets/images/maia/coin-4.png'
import CoinImage5 from '../../assets/images/maia/coin-5.png'
import { ChevronRightIcon } from '../../nft/components/icons'
import Banner, { BannerImage, BannerText, BannerTitle } from './Banner'
import { HermesCoin } from './HermesSection'
import {
  HermesButton,
  HermesContent,
  HermesGrid,
  HermesImageCard,
  HermesSmall,
  HermesTitle,
  StatCol,
  StatsGrid,
  StatSubtitle,
  StatTitle,
} from './HermesSection'
import Levitating from './Levitating'

const MaiaGrid = styled(HermesGrid)`
  grid-template-columns: 3fr 4fr;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`

const MaiaImageCard = styled(HermesImageCard)`
  position: relative;
  grid-column: 1 / 2;
`

const MaiaContent = styled(HermesContent)`
  grid-column: 2 / 3;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-column: 1 / 2;
  }
`

const FirstCoin = styled.div`
  position: absolute;
  top: -50px;
  left: -75px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    left: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    top: -150px;
  }
`

const SecondCoin = styled.div`
  position: absolute;
  bottom: -50px;
  right: -95px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    right: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    bottom: 100px;
    right: -25px;
  }
`

const MAIA_IMAGE = 'https://cdn.discordapp.com/attachments/1055440737149386763/1073001897595768922/maia-coins-image.jpg'

export default function MaiaSection() {
  const theme = useTheme()

  return (
    <div style={{ position: 'relative', margin: '0 auto' }}>
      <FirstCoin>
        <Levitating offsetOfCycle={0.5}>
          <HermesCoin>
            <img src={CoinImage4} alt="Hermes" />
          </HermesCoin>
        </Levitating>
      </FirstCoin>
      <MaiaGrid>
        <MaiaContent data-aos="fade-up" data-aos-duration="500">
          <HermesSmall>Maia</HermesSmall>
          <HermesTitle>The gateway to yields of DeFi!</HermesTitle>
          <Text fontSize={16} fontWeight={300} color={theme.textSecondary} lineHeight={1.55} marginBottom={24}>
            Maia aims to be a one stop shop for different financial instruments, a fully fledged trading hub with Hermes
            being the first piece of the puzzle. In order to sustainably bootstrap our surrounding ecosystem.
          </Text>
          <HermesButton>
            Swap <ChevronRightIcon />
          </HermesButton>
        </MaiaContent>
        <MaiaImageCard data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <img
            src="https://cdn.discordapp.com/attachments/1055440737149386763/1065141039372976189/maia-2.png"
            alt="Hermes"
          />
        </MaiaImageCard>
        <SecondCoin>
          <Levitating offsetOfCycle={0.1}>
            <HermesCoin>
              <img src={CoinImage5} alt="Hermes" />
            </HermesCoin>
          </Levitating>
        </SecondCoin>
      </MaiaGrid>
      <StatsGrid>
        <StatCol>
          <StatSubtitle>Apr</StatSubtitle>
          <StatTitle>17.20 %</StatTitle>
        </StatCol>
        <StatCol>
          <StatSubtitle>Locked (TVL)</StatSubtitle>
          <StatTitle>$1,000,000</StatTitle>
        </StatCol>
        <StatCol>
          <StatSubtitle>Holders</StatSubtitle>
          <StatTitle>76,456</StatTitle>
        </StatCol>
        <StatCol>
          <StatSubtitle>
            <span style={{ color: '#dd3aff' }}>$MAIA</span> price
          </StatSubtitle>
          <StatTitle>$0.05</StatTitle>
        </StatCol>
      </StatsGrid>
      <Banner>
        <BannerImage src={MAIA_IMAGE} />
        <BannerTitle>
          Governed by <span style={{ color: '#dd3aff' }}>$maia</span>
        </BannerTitle>
        <BannerText>
          The governance token that lets you take control of the future. Acting as the backbone for MaiaDAO, $Maia is
          the key to unlocking a transparent, secure, and decentralized financial system.
        </BannerText>
      </Banner>
    </div>
  )
}
