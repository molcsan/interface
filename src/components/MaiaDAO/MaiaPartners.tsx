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

const Title = styled(Text)`
  font-size: 52px;
  font-weight: 600;
  line-height: 1.15;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  padding-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    line-height: 1.15;
    font-size: 32px;
    padding-bottom: 12px;
  }
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.55;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 480px;
  margin: 0;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 16px;
  }
`

export default function MaiaPartners() {
  const theme = useTheme()
  return (
    <>
      <TitleSection>
        <Title>Partners</Title>
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
