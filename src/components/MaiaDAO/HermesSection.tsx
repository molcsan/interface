import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import CoinImage3 from '../../assets/images/maia/coin-3.png'
import { ChevronRightIcon } from '../../nft/components/icons'
import { ButtonSecondary } from '../Button'
import Levitating from './Levitating'

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
  font-size: 58px;
  padding-bottom: 6px;
  line-height: 1.1;
  padding-top: 6px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 42px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 27px;
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
  font-size: 16px;
  margin-bottom: -4px;
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

  &:hover {
    color: #869eff;

    svg {
      transform: translateX(4px);
      color: #869eff;
    }
  }

  svg {
    width: 22px;
    height: 22px;
    transition: all 0.3s ease-in-out;
    position: relative;
    right: -8px;
    margin-left: -4px;
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
  display: flex;
  grid-gap: 16px;
  margin: 200px auto 320px;
  width: 100%;
  position: relative;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xxl}px`}) {
    margin: 150px auto 200px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    gap: 0;
    display: grid;
    margin: 100px auto 160px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    margin: 40px auto 64px;
  }
`

export const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    width: 230px;
    height: 160px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    width: 100%;
  }
`

export const StatTitle = styled(Text)`
  font-size: 44px;
  font-weight: 700;
  color: #dd3aff;
  letter-spacing: 0.02em;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 27px;
  }
`

export const StatSubtitle = styled(Text)`
  font-size: 16px;
  font-weight: 700;
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
    bottom: -20px;
  }
`

export default function HermesSection() {
  const theme = useTheme()

  return (
    <>
      <HermesGrid>
        <HermesImageCard data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
          <img
            src="https://2821986188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzN5op6AIOO7GYYtq1RRY%2Fuploads%2FgxZWWDbKaNkZgS48kk2p%2Fhermes.png?alt=media&token=392ca665-652f-4009-ab37-df8e319bb85f"
            alt="Hermes"
          />
        </HermesImageCard>
        <HermesContent data-aos="fade-up" data-aos-duration="500">
          <HermesSmall>Hermes protocol</HermesSmall>
          <HermesTitle>Leverage existing DeFi tools</HermesTitle>
          <Text fontSize={16} fontWeight={300} color={theme.textSecondary} lineHeight={1.55} marginBottom={24}>
            We are updating the existing mechanics to provide a better user experience with new features. The
            architecture will be modular and the code will be modern and follow the latest standards and best practices
            for smart contract development.
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
    </>
  )
}
