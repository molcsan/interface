import React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components/macro'

const TransparentCardWrapper = styled.div`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 22px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding: 16px;
  }
`

export const TransparentCardTitle = styled(Text)`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  color: #fff;
  padding-bottom: 24px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    font-size: 42px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    line-height: 1.3;
    font-size: 26px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 21px;
  }
`

export const TransparentCardDescription = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.55;
  color: #a9a9a9;
  padding-bottom: 30px;
  flex-grow: 1;
`

export default function TransparentCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <TransparentCardWrapper className={className}>{children}</TransparentCardWrapper>
}
