import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import CoinImage3 from '../../assets/images/maia/coin-3.png'
import HermesImage from '../../assets/images/maia/hermes-v2.png'
import { ChevronRightIcon } from '../../nft/components/icons'
import { ButtonSecondary } from '../Button'
import Levitating from './Levitating'
import TransparentCard, { MaiaCardDescription, MaiaCardTitle } from './TransparentCard'

export const HermesGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 32px;
  margin: 16px 0;
  width: 100%;
  grid-template-rows: 1fr 1fr;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`

export const HermesImageCard = styled.div`
  position: relative;
  grid-column: 2 / 4;
  grid-row: 1 / 3;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      max-width: 400px;
      margin: 0 auto;
      display: block;
    }
  }
`

export const HermesTitle = styled(Text)`
  font-weight: 700;
  font-size: 52px;
  padding-bottom: 24px;
  padding-top: 12px;
  line-height: 1.15;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 42px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 32px;
  }
`

export const HermesContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`

export const HermesSmall = styled(Text)`
  color: #dd3aff;
  font-size: 22px;
  margin-bottom: -4px;
  font-weight: 500;
`

export const HermesButton = styled(ButtonSecondary)`
  border-radius: 11px;
  padding: 12px 24px 12px 24px;
  font-size: 19px;
  width: max-content;
  color: #dd3aff;
  border-color: #dd3aff;
  transition: all 0.3s ease-in-out;
  position: relative;

  svg {
    width: 22px;
    height: 22px;
    transition: all 0.3s ease-in-out;
    position: relative;
    right: -8px;
    margin-left: -4px;
  }

  &:hover {
    color: #869eff;

    svg {
      transform: translateX(4px);
      color: #869eff;
    }
  }
`

export const HermesCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(2px);
  pointer-events: none;
  user-focus: none;
  user-select: none;

  img {
    max-width: 128px;
    max-height: 128px;
    width: 100%;
    object-fit: contain;
    opacity: 0.65;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    img {
      max-width: 96px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    max-width: 64px;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  gap: 25px;
  margin: 0 auto 25px;
  width: 100%;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    margin: 40px auto 16px;
    gap: 16px;
  }
`

export const StatCol = styled(TransparentCard)`
  height: 120px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    width: 100%;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    height: 120px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    height: 100px;
  }
`

export const StatTitle = styled(Text)`
  font-weight: 600;
  color: #dd3aff;
  font-size: 42px;
  line-height: 1;
  letter-spacing: -0.65px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 32px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 24px;
  }
`

export const StatSubtitle = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.textSecondary};
  text-transform: uppercase;
`

export const CardGrid = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 100px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
    margin-bottom: 60px;
  }
`

const ThirdCoin = styled.div`
  position: absolute;
  bottom: 0;
  left: -65px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    left: 25px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    bottom: -50px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    left: unset;
    right: 25px;
    bottom: 40px;
  }
`

export default function HermesSection() {
  const theme = useTheme()

  return (
    <>
      <div style={{ position: 'relative', margin: '0 auto' }}>
        <HermesGrid>
          <HermesImageCard data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            <img src={HermesImage} alt="Hermes" />
          </HermesImageCard>
          <HermesContent data-aos="fade-up" data-aos-duration="500">
            <HermesSmall>Hermes protocol</HermesSmall>
            <HermesTitle>Leverage existing DeFi tools</HermesTitle>
            <Text fontSize={16} fontWeight={300} color={theme.textSecondary} lineHeight={1.55} marginBottom={24}>
              Hermes Protocol V2 marks a significant evolution from V1, featuring a completely rewritten codebase,
              enhanced features, and thorough auditing to redefine the DeFi experience. This decentralized and
              permissionless protocol offers an Omnichain yield and liquidity marketplace, placing the power squarely in
              the hands of the community. Designed to advance key elements like ve(3,3) mechanics and overcome existing
              DeFi limitations, Hermes Protocol V2 is geared towards a future-proof DeFi ecosystem.
            </Text>
            <HermesButton>
              Swap <ChevronRightIcon />
            </HermesButton>
            <ThirdCoin>
              <Levitating>
                <HermesCoin>
                  <img style={{ maxWidth: 90, opacity: 0.4 }} src={CoinImage3} alt="Hermes" />
                </HermesCoin>
              </Levitating>
            </ThirdCoin>
          </HermesContent>
        </HermesGrid>
      </div>
      <div>
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
              <span style={{ color: '#dd3aff' }}>$HERMES</span> price
            </StatSubtitle>
            <StatTitle>$0.05</StatTitle>
          </StatCol>
        </StatsGrid>
        <CardGrid>
         <TransparentCard>
            <MaiaCardTitle>ALL AROUND PLATFORM</MaiaCardTitle>
            <MaiaCardDescription>
              <span style={{ color: '#dd3aff' }}>Traders</span> can enjoy low slippage thanks to a concentrated liquidity, ensuring low slippage and the freedom to
              swap across any chain of their choice. <span style={{ color: '#dd3aff' }}>Liquidity Providers</span> will appreciate the opportunity to supply liquidity 
              to a selected gauge (pool), gaining not only concentrated rewards within their chosen position range but also 
              exposing their liquidity to traders across the Omnichain. <span style={{ color: '#dd3aff' }}>Projects</span> can leverage the most efficient liquidity 
              renting available, achieving maximum depth with minimal expenditure, while exposing their liquidity to the entire Omnichain ecosystem
            </MaiaCardDescription>
            <HermesButton>Read more</HermesButton>
          </TransparentCard>
          <TransparentCard>
            <MaiaCardTitle>
              BURN YOUR <span style={{ color: '#dd3aff' }}>$HERMES</span>
            </MaiaCardTitle>
            <MaiaCardDescription>
              Burn <span style={{ color: '#dd3aff' }}>$HERMES</span> tokens to unlock{' '}
              <span style={{ color: '#dd3aff' }}>$bHERMES</span> Gauge, Boost, and Votes, elevating your role in
              governance and rewards. Deposit into the Burner ERC-4626 Vault for{' '}
              <span style={{ color: '#dd3aff' }}>$bHERMES</span> shares, offering control over emissions, amplified
              earnings, and decisive governance influence in the evolving Hermes Protocol ecosystem
            </MaiaCardDescription>
            <HermesButton>Read more</HermesButton>
          </TransparentCard>
        </CardGrid>
      </div>
    </>
  )
}
