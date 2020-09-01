import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FBIcon from './FBIcon'
import TwitterIcon from './TwitterIcon'
import IGIcon from './IGIcon'

//Styled Components
const FooterSvgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.25rem;

  @media (min-width: ${(props) => props.theme.tablet}) {
    margin-bottom: 0;
    align-self: flex-end;
  }
`

const CallToAction = styled.h1`
  margin: 0 0.4375rem;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
`
const SocialLink = styled(Link)`
  margin: 0 0.5625rem;
  width: auto;
  height: auto;
  color: #fff;
`
//Interfaces

//React Component
const FooterSvgs: React.FC = () => {
  const SocialIcons = [
    { name: 'Facebook', component: FBIcon, Ihref: '/#FB' },
    { name: 'Twitter', component: TwitterIcon, Ihref: '#/Twiter' },
    { name: 'Instagram', component: IGIcon, Ihref: '/#IG' },
  ]
  return (
    <FooterSvgsWrapper>
      <CallToAction>Follow Us</CallToAction>
      {SocialIcons.map((Icon) => (
        <SocialLink
          id={`footer-social-icon-${Icon.name}`}
          to={Icon.Ihref}
          key={Icon.name}
          rel="noreferrer"
          target="_blank"
        >
          {<Icon.component />}
        </SocialLink>
      ))}
    </FooterSvgsWrapper>
  )
}
export default FooterSvgs
