import Card from 'components/Card'
import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import CoinImage1 from "../../assets/images/maia/coin-1.png";
import CoinImage2 from "../../assets/images/maia/coin-2.png";
import CoinImage3 from "../../assets/images/maia/coin-3.png";
import CoinImage4 from "../../assets/images/maia/coin-4.png";
import { ChevronRightIcon } from '../../nft/components/icons'
import { colors } from '../../theme/colors'
import { ButtonSecondary } from '../Button'
import Levitating from "./Levitating";

export const HermesGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 32px;
  margin: 16px 0;
  width: 100%;
  grid-template-rows: 1fr 1fr;
`

export const HermesImageCard = styled(Card)`
  position: relative;
  grid-column: 2 / 4;
  grid-row: 1 / 3;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const HermesTitle = styled(Text)`
  font-weight: 700;
  font-size: 58px;
  padding-bottom: 6px;
  line-height: 1.1;
  padding-top: 6px;
`

export const HermesContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
`

export const HermesSmall = styled(Text)`
  color: #d300ff;
  font-size: 16px;
  margin-bottom: -4px;
`

export const HermesButton = styled(ButtonSecondary)`
  border-radius: 11px;
  padding: 12px 16px 12px 24px;
  font-size: 19px;
  width: max-content;
  margin-top: 24px;
  color: #d300ff;
  border-color: #d300ff;

  svg {
    width: 22px;
    height: 22px;
    margin-left: 2px;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  margin: 120px auto;
  width: 100%;
  max-width: 1100px;
  position: relative;
`

export const HermesCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 96px;
    max-height: 96px;
    width: 100%;
    object-fit: contain;
  }
`

export const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 12px;
`

export const StatTitle = styled(Text)`
  font-size: 42px;
  font-weight: 700;
  color: ${colors.purple};
`

export const StatSubtitle = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`

export default function HermesSection() {
  const theme = useTheme()

  return (
    <>
      <HermesGrid>
        <HermesImageCard data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-anchor-placement="top-center">
          <img
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
            alt="Hermes"
          />
        </HermesImageCard>
        <HermesContent data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-center">
          <HermesSmall>Hermes protocol</HermesSmall>
          <HermesTitle>Leverage existing DeFi tools</HermesTitle>
          <Text fontSize={16} fontWeight={300} color={theme.textSecondary} lineHeight={1.55}>
            We are updating the existing mechanics to provide a better user experience with new features. The
            architecture will be modular and the code will be modern and follow the latest standards and best practices
            for smart contract development.
          </Text>
          <HermesButton>
            Swap <ChevronRightIcon />
          </HermesButton>
        </HermesContent>
      </HermesGrid>
      <StatsGrid>
        <Levitating top={-50} left={0}>
          <HermesCoin>
            <img src={CoinImage1} alt="Hermes" />
          </HermesCoin>
        </Levitating>
        <Levitating top={-50} right={0}>
          <HermesCoin>
            <img src={CoinImage4} alt="Hermes" />
          </HermesCoin>
        </Levitating>
        <Levitating top={80} left={0}>
          <HermesCoin>
            <img src={CoinImage2} alt="Hermes" />
          </HermesCoin>
        </Levitating>
        <Levitating top={75} right={0}>
          <HermesCoin>
            <img src={CoinImage3} alt="Hermes" />
          </HermesCoin>
        </Levitating>
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
    </>
  )
}
