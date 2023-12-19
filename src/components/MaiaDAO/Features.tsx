import styled from 'styled-components/macro'

import chainIcon from '../../assets/images/maia/chain.svg'
import dropIcon from '../../assets/images/maia/drop.svg'
import globeIcon from '../../assets/images/maia/globe.svg'
import leafIcon from '../../assets/images/maia/leaf.svg'
import moneybagIcon from '../../assets/images/maia/moneybag.svg'
import swapIcon from '../../assets/images/maia/swap.svg'

const FEATURES_DATA: IFeatureProps[] = [
  {
    icon: chainIcon,
    title: 'Burn The Bridges',
    description: 'Bridge-less omnichain swaps. Swap between any two chains with ease.',
  },
  {
    icon: dropIcon,
    title: 'Concentrated Unified Liquidity',
    description:
      'Rent liquidity at a fraction of the cost, maximizing efficiency with less capital. A fully decentralized solution.',
  },
  {
    icon: globeIcon,
    title: 'Liquidity management',
    description:
      "Streamline your liquidity with TALOS, MaiaDAO's tool for effortless and composable liquidity management.",
  },
  {
    icon: moneybagIcon,
    title: 'Incentivized Liquidity',
    description:
      'Maximize your returns: Provide liquidity and reap enhanced rewards through our leading Bribe and Emission efficiency system.',
  },
  {
    icon: swapIcon,
    title: 'Refined ve(3,3) mechanism',
    description:
      'Maintain maximum voting exposure effortlessly, without the burden of weekly tasks thanks to $bHERMES.',
  },
  {
    icon: leafIcon,
    title: 'Omnichain Yield Marketplace',
    description:
      'A comprehensive, one-stop solution for yield farming across any chain. Seamlessly manage and maximize your yields without the hassle of chain hopping.',
  },
]

interface IFeatureProps {
  icon: string
  title: string
  description: string
}

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

const Feature = (props: IFeatureProps) => {
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

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  column-gap: 28px;
  margin: 0 auto;
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

const Features = () => {
  const renderedFeatures = FEATURES_DATA.map((feature, index) => {
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
    <div>
      <FeaturesTitle>Features</FeaturesTitle>
      <FeaturesContainer>{renderedFeatures}</FeaturesContainer>
    </div>
  )
}

export default Features
