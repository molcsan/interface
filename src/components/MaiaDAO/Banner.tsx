import { easeSinOut } from 'd3'
import React from 'react'
import styled from 'styled-components/macro'

import TransparentCard from './TransparentCard'

// CSS produce gradients which look horrible because of the way they are calculated (linear interpolation)
// This function generates a gradient which looks much better
const easeOutQuart = function (t: number) {
  return 1 - Math.pow(1 - t, 4)
}

const getEasedSteps = function (steps: number, easing: (t: number) => number = easeOutQuart) {
  return Array.from({ length: steps }, (_, i) => easing(i / (steps - 1)))
}

//Functions from D3 also work
const generateEasedLinearGradient = function (
  steps: number,
  angle: number,
  easing: (t: number) => number = easeOutQuart,
  offset = 0
) {
  steps += offset
  const easedSteps = getEasedSteps(steps, easing)
  const colors = easedSteps.map(
    (value, i) => `rgba(0, 0, 0, ${value.toFixed(3)}) ${((i / (steps - 1)) * 100).toFixed(2)}%`
  )

  if (offset === 0) {
    return `linear-gradient(${angle}deg, ${colors.join(', ')})`
  }

  //Offset is here because the last colors are very dark with some easing functions
  //This way we can remove the last few colors and make the gradient look better
  return `linear-gradient(${angle}deg, ${colors.slice(0, -offset).join(', ')})`
}

const BannerWrapper = styled(TransparentCard)`
  position: relative;
  padding: 100px 70px 60px 70px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 11px;
  overflow: hidden;
  aspect-ratio: 13/4.6;
  margin-bottom: 140px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    padding: 60px 35px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    height: 275px;
    aspect-ratio: unset;
    margin-bottom: 60px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: 20px 18px;
    height: auto;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    // CSS linear gradient is very
    background-image: ${generateEasedLinearGradient(30, 270, easeSinOut, 3)};

    @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
      display: none;
    }
  }
`

export const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  object-position: 50% 75%;
  transform: scaleX(-1);

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    object-position: right bottom;
    right: 0;
    width: 750px;
    left: unset;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    display: none;
  }
`

export const BannerTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.15;
  color: #ffffff;
  width: 100%;
  text-transform: uppercase;
  margin: 0 0 24px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    //margin-bottom: 0;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 32px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    margin: 0 0 12px;
    font-size: 24px;
  }
`

export const BannerText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.55;
  max-width: 550px;
  color: #a9a9a9;
  margin: 0;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
  }
`

export default function Banner({ children, className }: { children: React.ReactNode; className?: string }) {
  return <BannerWrapper className={className}>{children}</BannerWrapper>
}
