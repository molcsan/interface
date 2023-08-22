import styled from 'styled-components/macro'

const FEATURES_DATA: IFeatureProps[] = [
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350823779315924/chain.svg',
    title: 'Burn The Bridges',
    description: 'Bridge-less omnichain swaps. Swap between any two chains without a bridge.',
  },
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350822944653413/drop.svg',
    title: 'Concentrated Unified Liquidity',
    description: 'Concentrated liquidity pools. Higher capital efficiency and lower slippage.',
  },
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350823309549628/globe.svg',
    title: 'Liquidity management',
    description: 'Manage your liquidity in a decentralized way. UniV3 way. No more impermanent loss.',
  },
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350824538484766/moneybag.svg',
    title: 'Incentivized Liquidity',
    description:
      'Earn rewards for providing liquidity. Earn more rewards for providing liquidity to less liquid pools.',
  },
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350824848859256/swap.svg',
    title: 'Refined ve(3,3) mechanism',
    description:
      'Now ERC4626 compliant. More efficient and fairer than ever before. Provides more control to the users.',
  },
  {
    icon: 'https://cdn.discordapp.com/attachments/806235053175865386/1143350824211324928/leaf.svg',
    title: 'Omnichain Yield Marketplace',
    description:
      'Marketplace for yield farming. Earn yield on any chain. No more chain hopping. Hermes does it for you.',
  },
]

interface IFeatureProps {
  icon: string
  title: string
  description: string
}

const Feature = (props: IFeatureProps) => {
  const FeatureContainer = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    width: 100%;
    align-items: center;
    gap: 16px;

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
      grid-template-columns: 60px auto;
    }
  `

  const FeatureIcon = styled.div`
    display: flex;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
      height: 60px;
    }
  `

  const FeatureContent = styled.div`
    h3 {
      font-size: 20px;
      margin: 0;
      padding: 0;
      line-height: 1.5;
      text-transform: uppercase;
      color: #dd3aff;

      @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
        font-size: 16px;
      }
    }

    p {
      font-size: 16px;
      margin: 4px 0 0 0;
      padding: 0;
      line-height: 1.5;

      @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
        font-size: 14px;
      }
    }
  `

  return (
    <FeatureContainer>
      <FeatureIcon>
        <img src={props.icon} alt="Feature icon" />
      </FeatureIcon>
      <FeatureContent>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </FeatureContent>
    </FeatureContainer>
  )
}

const Features = () => {
  const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 48px;
    column-gap: 28px;
    margin: 0 auto 160px;
    width: 100%;

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
      row-gap: 32px;
    }
  `

  const FeaturesTitle = styled.h2`
    font-size: 42px;
    font-weight: 600;
    line-height: 1.15;
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;
    padding-bottom: 58px;
    text-align: center;

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
      line-height: 1.15;
      font-size: 32px;
      padding-bottom: 32px;
    }
  `

  const RenderedFeatures = FEATURES_DATA.map((feature, index) => {
    return (
      <Feature
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        key={`maiafeature-${index}`}
      />
    )
  })

  return (
    <>
      <FeaturesTitle>Features</FeaturesTitle>
      <FeaturesContainer>{RenderedFeatures}</FeaturesContainer>
    </>
  )
}

export default Features
