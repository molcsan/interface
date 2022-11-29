import Card, { LightCard } from 'components/Card'
import { Text } from 'rebass'
import styled from 'styled-components/macro'

import { colors } from '../../theme/colors'

export const HermesGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-gap: 32px;
  margin: 16px 0;
  width: 100%;
  grid-template-rows: 1fr 1fr;
`

export const HermesImageCard = styled(Card)`
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
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
  return (
    <>
      <HermesGrid>
        <HermesImageCard>
          <img
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
            alt="Hermes"
          />
        </HermesImageCard>
        <LightCard></LightCard>
        <LightCard></LightCard>
      </HermesGrid>
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
    </>
  )
}
