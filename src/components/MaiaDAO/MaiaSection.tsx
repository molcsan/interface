import { LightCard } from 'components/Card'
import styled from 'styled-components/macro'

import { HermesGrid, HermesImageCard, StatCol, StatsGrid, StatSubtitle, StatTitle } from './HermesSection'

const MaiaGrid = styled(HermesGrid)`
  grid-template-columns: 4fr 3fr;
`

const MaiaImageCard = styled(HermesImageCard)`
  position: relative;
  grid-column: 2 / 4;
  grid-row: 1 / 3;
`

export default function MaiaSection() {
  return (
    <div style={{ margin: '100px auto' }}>
      <MaiaGrid>
        <LightCard></LightCard>
        <LightCard></LightCard>
        <MaiaImageCard>
          <img
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
            alt="Hermes"
          />
        </MaiaImageCard>
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
