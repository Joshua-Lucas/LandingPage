import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FooterSvgs from './footersvg/FooterSvgs'

//Styled Components
const FooterHelpWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-top: 2px solid #d8d8d8;
  @media (min-width: ${(props) => props.theme.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1.5rem;
  }
`
const Helpers = styled.div``
const NavTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 900;
  margin-left: 1rem;
  line-height: 26px;
`

const HelpNavLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: 7.75rem;
  line-height: 26px;
  @media (min-width: ${(props) => props.theme.tablet}) {
    margin-bottom: 0;
  }
`

const HelpNavLinks = styled(Link)`
  color: ${(props) => props.theme.neutralLight};
  line-height: 1.5rem;
  text-decoration: none;
  font-size: 1.25rem;
  padding-bottom: 1.25rem;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.accentDark};
    outline: transparent;
  }
`

//React Component
const FooterLinks: React.FC = () => {
  const HelperLinks = [
    'Guides',
    'FAQ',
    'Terms of use',
    'Privacy Policy',
    'Information',
  ]

  return (
    <FooterHelpWraper>
      <Helpers>
        <NavTitle>Help</NavTitle>
        <HelpNavLinkContainer>
          {HelperLinks.map((item) => (
            <HelpNavLinks to={`/${item}`} key={item}>
              {item}
            </HelpNavLinks>
          ))}
        </HelpNavLinkContainer>
      </Helpers>
      <FooterSvgs />
    </FooterHelpWraper>
  )
}
export default FooterLinks
