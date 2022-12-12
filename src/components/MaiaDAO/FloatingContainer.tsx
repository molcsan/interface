import React from 'react'
import styled from 'styled-components/macro'

const Floater = styled.div`
  animation: float 8s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-40px);
    }
    100% {
      transform: translatey(0);
    }
  }
`

export default function FloatingContainer({ children }: { children: React.ReactNode }) {
  return <Floater>{children}</Floater>
}
