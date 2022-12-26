import React, { useEffect, useState } from 'react'

interface LevitatingParams {
  amplitude?: number
  frequency?: number
  offset?: number
  top?: number
  right?: number
  left?: number
  bottom?: number
}

const defaultParams = {
  amplitude: 50, // control the size of the movement
  frequency: 1, // control the speed of the movement
  offset: 50, // control the starting position of the movement
  top: 'unset',
  left: 'unset',
  bottom: 'unset',
  right: 'unset',
}

export default function Levitating(props: React.PropsWithChildren<LevitatingParams>) {
  const [currentY, setCurrentY] = useState<number>(0)
  const [startTime, setStartTime] = useState<number | null>(null)

  const params = {
    ...defaultParams,
    ...props,
  }

  useEffect(() => {
    const levitate = (timestamp: number) => {
      if (!startTime) {
        setStartTime(timestamp)
      }
      const deltaTime = timestamp - (startTime ?? 0) // Elapsed time in milliseconds

      const y = params.amplitude * Math.sin((params.frequency / 1000) * deltaTime) + params.offset
      setCurrentY(y)
    }
    requestAnimationFrame(levitate)
  }, [currentY, params.amplitude, params.frequency, params.offset, startTime])

  return (
    <div style={{ top: params.top, left: params.left, right: params.right, bottom: params.bottom, position: 'absolute' }}>
      <div style={{ transform: `translate3d(0px, ${currentY}px, 0px)`, position: 'relative' }}>{props.children}</div>
    </div>
  )
}
