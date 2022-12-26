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
`

const MaiaImageCard = styled(HermesImageCard)`
  position: relative;
  grid-column: 1 / 2;
`

const MaiaContent = styled(HermesContent)`
  grid-column: 2 / 3;
`

export default function MaiaSection() {
  const theme = useTheme()

  return (
    <div style={{ position: 'relative', margin: '0 auto', paddingTop: '100px' }}>
      <Levitating top={-50} left={-75}>
        <HermesCoin>
          <img src={CoinImage4} alt="Hermes" />
        </HermesCoin>
      </Levitating>
      <MaiaGrid>
        <MaiaContent data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-center">
          <HermesSmall>Maia</HermesSmall>
          <HermesTitle>The gateway to yields of DeFi!</HermesTitle>
          <Text fontSize={16} fontWeight={300} color={theme.textSecondary} lineHeight={1.55}>
            Maia aims to be a one stop shop for different financial instruments, a fully fledged trading hub with Hermes
            being the first piece of the puzzle. In order to sustainably bootstrap our surrounding ecosystem.
          </Text>
          <HermesButton>
            Swap <ChevronRightIcon />
          </HermesButton>
        </MaiaContent>
        <MaiaImageCard
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
            alt="Hermes"
          />
        </MaiaImageCard>
        <Levitating bottom={-70} right={-95}>
          <HermesCoin>
            <img src={CoinImage5} alt="Hermes" />
          </HermesCoin>
        </Levitating>
      </MaiaGrid>
      <StatsGrid>
        <StatCol>
          <StatTitle>17.20 %</StatTitle>
          <StatSubtitle>Apr</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>$1,000,000</StatTitle>
          <StatSubtitle>Total Value Locked (TVL)</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>76,456</StatTitle>
          <StatSubtitle>Number Of Holders</StatSubtitle>
        </StatCol>
        <StatCol>
          <StatTitle>$0.05</StatTitle>
          <StatSubtitle>$HERMES Price</StatSubtitle>
        </StatCol>
      </StatsGrid>
    </div>
  )
}
