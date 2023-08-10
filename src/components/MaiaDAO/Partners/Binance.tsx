import React, { FC } from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  gap: 40px;
`

const HeaderImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  display: block;
  object-position: center;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 48px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 2;
    display: flex;
    flex-direction: column;

    a {
      color: #dd3aff;
    }
  }
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  h4 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.32;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }
`

const Binance: FC = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Binance_Logo.png/600px-Binance_Logo.png?20201023063027"
          alt="Binance"
        />
        <HeaderContent>
          <h3>Binance</h3>
          <p>
            Binance leading CEX
            <a href={'https://www.binance.com/en'} target={'_blank'} rel="noreferrer">
              https://www.binance.com/en
            </a>
          </p>
        </HeaderContent>
      </Header>
      <ContentBlock></ContentBlock>
      <ContentBlock>
        <p>Explore liquidity pools across the Balancer ecosystem</p>
        <p>Add and remove liquidity</p>
        <p>Swap tokens</p>
        <p>Stake LP tokens to participate in liquidity mining</p>
        <p>Claim protocol liquidity mining incentives</p>
        <p>Manage veBAL and vote on future token emissions</p>
      </ContentBlock>
    </Wrapper>
  )
}

export default Binance
