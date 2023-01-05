import React, { useEffect, useState } from 'react'

export interface LevitatingParams {
  /**
   * control the size of the movement
   */
  amplitude?: number

  /**
   * control the speed of the movement
   */
  frequency?: number

  /**
   * control the speed of the movement
   */
  offset?: number

  /**
   * control the starting position of the movement on sinusoide
   */
  offsetOfCycle?: number
}

const defaultParams = {
  amplitude: 50,
  frequency: 1,
  offset: 50,
  offsetOfCycle: 0,
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

      const y =
        params.amplitude * Math.sin((params.frequency / 1000) * deltaTime + params.offsetOfCycle) + params.offset
      setCurrentY(y)
    }
    requestAnimationFrame(levitate)
  }, [currentY, params.amplitude, params.frequency, params.offset, params.offsetOfCycle, startTime])

  return <div style={{ transform: `translate3d(0px, ${currentY}px, 0px)`, position: 'relative' }}>{props.children}</div>
}
