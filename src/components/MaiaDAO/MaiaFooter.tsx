import styled from 'styled-components/macro'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 350px;
  //border-top: 1px solid rgba(75, 75, 75, 0.4);
  //border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 50px;
  background-color: transparent;
  padding-bottom: 80px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    margin-top: 80px;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    padding: 0 24px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    flex-wrap: wrap;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    width: 50%;
  }
`

const FooterColumns = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0 0 30px;
  margin: 0 0 12px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    row-gap: 24px;
  }
`

const FooterColumnTitle = styled.h3`
  font-size: 17px;
  font-weight: 500;
  color: #efe0e0;
  margin-bottom: 24px;
  letter-spacing: 1px;
`

const FooterColumnItem = styled.a`
  font-size: 17px;
  padding: 10px 0;
  text-decoration: none;
  color: white;
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  letter-spacing: 0.5px;
  display: flex;

  &:hover {
    opacity: 1;
  }

  img,
  svg {
    width: 20px;
    margin-right: 10px;
  }
`

export default function MaiaFooter() {
  return (
    <Footer>
      <FooterContainer>
        <FooterColumns>
          <FooterColumn>
            <FooterColumnTitle>Developers</FooterColumnTitle>
            <FooterColumnItem href="">Github</FooterColumnItem>
            <FooterColumnItem href="">Documentation</FooterColumnItem>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Services</FooterColumnTitle>
            <FooterColumnItem href="">Maia</FooterColumnItem>
            <FooterColumnItem href="">Hermes</FooterColumnItem>
            <FooterColumnItem href="">Talos</FooterColumnItem>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Governance</FooterColumnTitle>
            <FooterColumnItem href="">Voting</FooterColumnItem>
            <FooterColumnItem href="">Whitepaper</FooterColumnItem>
            <FooterColumnItem href="">Forum</FooterColumnItem>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Socials</FooterColumnTitle>
            <FooterColumnItem href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20 19"
                focusable="false"
                aria-hidden="true"
              >
                <g id="surface1">
                  <path
                    stroke="none"
                    fillRule="nonzero"
                    fill="rgba(255, 255, 255, 1)"
                    d="M 16.929688 3.742188 C 15.65625 3.167969 14.289062 2.742188 12.859375 2.5 C 12.847656 2.5 12.835938 2.5 12.824219 2.507812 C 12.808594 2.511719 12.800781 2.519531 12.792969 2.53125 C 12.621094 2.839844 12.425781 3.238281 12.289062 3.558594 C 10.773438 3.332031 9.230469 3.332031 7.714844 3.558594 C 7.5625 3.207031 7.390625 2.863281 7.199219 2.53125 C 7.195312 2.519531 7.183594 2.511719 7.171875 2.503906 C 7.160156 2.5 7.148438 2.496094 7.136719 2.5 C 5.707031 2.742188 4.339844 3.167969 3.0625 3.742188 C 3.054688 3.746094 3.042969 3.753906 3.039062 3.765625 C 0.445312 7.578125 -0.265625 11.296875 0.0820312 14.96875 C 0.0820312 14.976562 0.0859375 14.984375 0.0898438 14.992188 C 0.09375 15 0.101562 15.007812 0.109375 15.011719 C 1.621094 16.117188 3.308594 16.953125 5.101562 17.496094 C 5.113281 17.5 5.128906 17.5 5.140625 17.496094 C 5.152344 17.492188 5.164062 17.484375 5.171875 17.476562 C 5.558594 16.957031 5.902344 16.414062 6.195312 15.839844 C 6.210938 15.804688 6.195312 15.765625 6.160156 15.753906 C 5.621094 15.550781 5.101562 15.304688 4.601562 15.019531 C 4.589844 15.015625 4.582031 15.007812 4.578125 15 C 4.574219 14.992188 4.570312 14.980469 4.570312 14.96875 C 4.566406 14.960938 4.570312 14.949219 4.574219 14.941406 C 4.578125 14.929688 4.585938 14.921875 4.59375 14.917969 C 4.699219 14.839844 4.804688 14.757812 4.902344 14.675781 C 4.914062 14.671875 4.921875 14.664062 4.933594 14.664062 C 4.945312 14.664062 4.957031 14.664062 4.96875 14.667969 C 8.242188 16.140625 11.785156 16.140625 15.019531 14.667969 C 15.03125 14.664062 15.042969 14.664062 15.054688 14.664062 C 15.066406 14.664062 15.074219 14.667969 15.085938 14.675781 C 15.183594 14.757812 15.289062 14.839844 15.394531 14.917969 C 15.402344 14.921875 15.410156 14.929688 15.414062 14.941406 C 15.417969 14.949219 15.421875 14.960938 15.421875 14.96875 C 15.421875 14.980469 15.417969 14.992188 15.410156 15 C 15.40625 15.007812 15.398438 15.015625 15.390625 15.019531 C 14.890625 15.308594 14.375 15.550781 13.828125 15.75 C 13.820312 15.753906 13.8125 15.757812 13.808594 15.765625 C 13.800781 15.773438 13.796875 15.78125 13.792969 15.789062 C 13.789062 15.796875 13.789062 15.804688 13.789062 15.8125 C 13.789062 15.824219 13.789062 15.832031 13.796875 15.839844 C 14.09375 16.410156 14.4375 16.957031 14.816406 17.472656 C 14.824219 17.484375 14.835938 17.492188 14.847656 17.496094 C 14.859375 17.5 14.875 17.5 14.886719 17.496094 C 16.679688 16.957031 18.371094 16.117188 19.886719 15.011719 C 19.894531 15.007812 19.902344 15 19.90625 14.992188 C 19.910156 14.984375 19.914062 14.976562 19.914062 14.96875 C 20.332031 10.722656 19.214844 7.035156 16.957031 3.765625 C 16.949219 3.757812 16.941406 3.746094 16.929688 3.742188 Z M 6.683594 12.730469 C 5.699219 12.730469 4.886719 11.839844 4.886719 10.75 C 4.886719 9.65625 5.683594 8.765625 6.683594 8.765625 C 7.691406 8.765625 8.496094 9.664062 8.480469 10.75 C 8.480469 11.839844 7.683594 12.730469 6.683594 12.730469 Z M 13.328125 12.730469 C 12.34375 12.730469 11.53125 11.839844 11.53125 10.75 C 11.53125 9.65625 12.328125 8.765625 13.328125 8.765625 C 14.335938 8.765625 15.140625 9.664062 15.125 10.75 C 15.125 11.839844 14.339844 12.730469 13.328125 12.730469 Z M 13.328125 12.730469 "
                  ></path>
                </g>
              </svg>
              Discord
            </FooterColumnItem>
            <FooterColumnItem href="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZUAAAGVCAYAAAA2W2w7AAAAiHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjadY7LCcQwDETvqiIl6OeRVc4SEkgHW/7KsSHksO+gGYlhEB3f66RtIOzkLToS4MLTUz9lOk+MWZRlaM3JUpNyWuvayXQaZA/2J+jOL5qh4wyPQMOOXatdD7N7ijndqVE2XsmnKNty9ue+oB/3wCz1prOO5gAACgZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI0MDUiCiAgIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI0MDUiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNDA1IgogICB0aWZmOkltYWdlSGVpZ2h0PSI0MDUiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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"
                alt="Telegram"
              />
              Telegram
            </FooterColumnItem>
            <FooterColumnItem href="">
              <img src="https://maiadao.io/static/media/medium.8e6d26759366e9ab087f.png" alt="Medium" />
              Medium
            </FooterColumnItem>
            <FooterColumnItem href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 19 20"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  stroke="none"
                  fillRule="nonzero"
                  fill="rgba(255, 255, 255, 1)"
                  d="M 19.703125 4.113281 C 19.007812 4.421875 18.257812 4.628906 17.472656 4.726562 C 18.285156 4.238281 18.890625 3.476562 19.179688 2.578125 C 18.417969 3.027344 17.585938 3.347656 16.714844 3.519531 C 16.128906 2.894531 15.355469 2.480469 14.511719 2.339844 C 13.667969 2.203125 12.800781 2.34375 12.046875 2.75 C 11.292969 3.152344 10.695312 3.792969 10.34375 4.574219 C 9.988281 5.351562 9.90625 6.226562 10.101562 7.058594 C 8.554688 6.984375 7.046875 6.582031 5.667969 5.882812 C 4.289062 5.183594 3.074219 4.203125 2.097656 3.003906 C 1.765625 3.578125 1.574219 4.246094 1.574219 4.953125 C 1.574219 5.59375 1.730469 6.222656 2.03125 6.789062 C 2.332031 7.351562 2.769531 7.832031 3.300781 8.1875 C 2.683594 8.167969 2.082031 8 1.542969 7.699219 L 1.542969 7.75 C 1.542969 8.648438 1.851562 9.515625 2.417969 10.210938 C 2.988281 10.902344 3.777344 11.378906 4.65625 11.558594 C 4.085938 11.710938 3.484375 11.734375 2.902344 11.625 C 3.152344 12.394531 3.632812 13.070312 4.285156 13.554688 C 4.933594 14.035156 5.71875 14.304688 6.527344 14.320312 C 5.152344 15.398438 3.457031 15.984375 1.707031 15.980469 C 1.398438 15.980469 1.089844 15.964844 0.78125 15.925781 C 2.554688 17.070312 4.621094 17.675781 6.730469 17.671875 C 13.871094 17.671875 17.777344 11.757812 17.777344 6.625 C 17.777344 6.460938 17.773438 6.292969 17.765625 6.125 C 18.523438 5.574219 19.179688 4.894531 19.699219 4.117188 Z M 19.703125 4.113281 "
                ></path>
              </svg>
              Twitter
            </FooterColumnItem>
          </FooterColumn>
        </FooterColumns>
        <p style={{ color: 'white', opacity: 0.5, fontSize: '12px' }}>© 2023 MaiaDAO</p>
      </FooterContainer>
    </Footer>
  )
}