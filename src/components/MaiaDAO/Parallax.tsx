import React from 'react'
import styled from 'styled-components/macro'

// const ParallaxBackground = styled.div`
//   width: 100%;
//   top: 0;
//   bottom: 0;
//   background-size: cover;
//   background-position: 50% 0;
//   background-repeat: no-repeat;
// `

const ParallaxContent = styled.div``

interface ConstructorParams {
  backgroundStyle: Record<any, string>
  speedDivider: number | undefined
  invert: boolean | undefined
}

export default class Parallax extends React.Component<any, any> {
  constructor(props: ConstructorParams) {
    super(props)

    this.state = {
      backgroundStyle: {
        ...props.backgroundStyle,
        width: '100%',
        top: '0',
        bottom: '0',
        'background-size': 'cover',
        'background-position': '50% 0',
        'background-repeat': 'no-repeat',
        'will-change': 'transform',
        transition: 'transform 0.5s ease',
        transform: 'translate3d(0px, 0px, 0px)',
      },
      invert: props.invert ?? false,
      speedDivider: props.speedDivider ?? 2,
    }

    // Bind the function to the class
    this._calcTranslation = this._calcTranslation.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this._calcTranslation)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._calcTranslation)
  }

  _calcTranslation() {
    // Calculate the translation CSS property
    let translateValue = window.scrollY / this.state.speedDivider
    if (translateValue < 0) {
      translateValue = 0
    }

    translateValue = this.state.invert ? -translateValue : translateValue

    this.setState({
      backgroundStyle: {
        ...this.state.backgroundStyle,
        transform: `translate3d(0px, ${translateValue}px, 0px)`,
      },
    })
  }

  render() {
    return (
      <div className={'parallax-container'}>
        <div style={this.state.backgroundStyle} className={'parallax-background'}>
          <ParallaxContent className={'parallax-content'}>{this.props.children}</ParallaxContent>
        </div>
      </div>
    )
  }
}
