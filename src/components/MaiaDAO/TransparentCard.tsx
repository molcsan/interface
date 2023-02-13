import React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components/macro'

const MaiaCardWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 22px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  //background-color: rgba(130, 131, 141, 0.07); -- Marshall's recommendation
  background-color: rgba(134, 158, 255, 0.03);

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding: 20px 18px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: 18px 16px;
  }
`

export const MaiaCardTitle = styled(Text)`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.15;
  color: #fff;
  padding-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 42px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 26px;
    padding-bottom: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 24px;
  }
`

export const MaiaCardDescription = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.55;
  color: #a9a9a9;
  padding-bottom: 30px;
  flex-grow: 1;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-bottom: 24px;
  }
`

export default function TransparentCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <MaiaCardWrapper className={className}>{children}</MaiaCardWrapper>
}
