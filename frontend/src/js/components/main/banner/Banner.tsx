import React from 'react'
import styled from 'styled-components'
import SignUpModal from './SignUpModal'

//Styled Components

const BannerWrapper = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    background-color: ${(props) => props.theme.accentDark};
  }
`

const VideoElement = styled.video`
  height: 54.187vh;
  width: 100vw;

  overflow: hidden;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.tablet}) {
    height: 76vh;
  }
`

//Interfaces

//React Component
const Banner: React.FC = () => {
  return (
    <BannerWrapper aria-label="banner">
      <VideoElement
        src="http://scoppechio.com/wp-content/themes/agency2020/src/assets/videos/Scoppechio_site_VIDEO-UPDATE-V4-2.mp4"
        autoPlay
        muted
        loop
      />
      <SignUpModal />
    </BannerWrapper>
  )
}
export default Banner
