import { Text } from 'rebass'
import styled from 'styled-components/macro'
import { useTheme } from 'styled-components/macro'

const PartnerGrid = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto 120px;
  max-width: 650px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto 80px;
  }
`
const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px 0;
  cursor: pointer;

  img {
    height: 46px;
    width: auto;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: 0;
  }
`

const TitleSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.35;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 480px;
  margin-top: 12px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 16px;
  }
`

export default function MaiaPartners() {
  const theme = useTheme()
  return (
    <>
      <TitleSection>
        <Text fontSize={48} fontWeight={600} lineHeight={1} color={theme.textPrimary}>
          Partners
        </Text>
        <Description>
          MaiaDAO is a community-driven project. We are grateful to our partners for their support. (Placeholder)
        </Description>
      </TitleSection>
      <PartnerGrid>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
        <PartnerCard>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
            alt=""
          />
          <Text>Binance</Text>
        </PartnerCard>
      </PartnerGrid>
    </>
  )
}
