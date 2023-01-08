import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import CoinImage4 from '../../assets/images/maia/coin-4.png'
import CoinImage5 from '../../assets/images/maia/coin-5.png'
import { ChevronRightIcon } from '../../nft/components/icons'
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
`

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
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
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
          <StatTitle>17.20 %</StatTitle>
          <StatSubtitle>Apr</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>$1,000,000</StatTitle>
          <StatSubtitle>Locked (TVL)</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>76,456</StatTitle>
          <StatSubtitle>Holders</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>$0.05</StatTitle>
          <StatSubtitle>$HERMES Price</StatSubtitle>
        </StatCol>
      </StatsGrid>
    </div>
  )
}
