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

const CallToAction = styled.h3`
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
interface IFooterSvgsProps {}

//React Component
const FooterSvgs: React.FC<IFooterSvgsProps> = ({}) => {
  const SocialIcons = [
    { title: FBIcon, Ihref: '/#FB' },
    { title: TwitterIcon, Ihref: '#/Twiter' },
    { title: IGIcon, Ihref: '/#IG' },
  ]
  return (
    <FooterSvgsWrapper>
      <CallToAction>Follow Us</CallToAction>
      {SocialIcons.map((Icon) => (
        <SocialLink to={Icon.Ihref} rel="noreferrer" target="_blank">
          {<Icon.title />}
        </SocialLink>
      ))}
    </FooterSvgsWrapper>
  )
}
export default FooterSvgs
