import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import FooterLinks from './FooterLinks'

//Styled Components
const FooterWrapper = styled(animated.footer)`
  background-color: ${(props) => props.theme.mainBrand};
  padding: 4.25rem 0.6875rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  color: ${(props) => props.theme.neutralLight};

  @media (min-width: ${(props) => props.theme.tablet}) {
    padding: 4.25rem 15.625vw 1.5rem;
  }
`

const CopyRight = styled.p`
  font-size: 1rem;
  line-height: 19px;
  font-family: Montserrat;
  padding: 0;
`
//Interfaces

//React Component
const Footer: React.FC = () => {
  const [visable, setVisable] = useState(false)
  const el = useRef<HTMLDivElement>(null)
  const getCurrentYear = new Date()

  useEffect(() => {
    // tracks when sections become visable
    let options = { threshold: 0.2 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisable(entry.isIntersecting))
    }, options)
    if (el.current != null) {
      observer.observe(el.current)
    }
  }, [])

  const props = useSpring({
    transform: visable ? 'translate3d(0,0%,0)' : 'translate3d(0,10%,0)',
    opacity: visable ? 1 : 0,
  })
  return (
    <FooterWrapper style={props} ref={el}>
      <FooterLinks />
      <CopyRight>@{getCurrentYear.getFullYear()} Test Page</CopyRight>
    </FooterWrapper>
  )
}
export default Footer
