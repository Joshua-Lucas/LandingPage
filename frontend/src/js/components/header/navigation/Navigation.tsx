import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import LogoContainer from './LogoContainer'

//Styled Components
const NavDiv = styled.div`
  position: relative;
`
const NavContainer = styled(animated.nav)<ILinkContainer>`
  height: 27.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};
  padding: 3.55rem 0 5rem;
  position: absolute;
  top: -200%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavLink = styled(Link)`
  padding-bottom: 3.32rem;
  color: ${(props) => props.theme.neutralLight};
  line-height: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.25rem;
  font-family: 'Montserrat';

  &:hover {
    color: ${(props) => props.theme.accentDark};
  }
`
//Interfaces
interface ILinkContainer {
  isActive: boolean
}

//React Component
const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const transIn = useSpring({
    opacity: toggleNav ? 1 : 0,
    transform: toggleNav ? 'translateY(0)' : 'translateY(-200%)',
  })
  return (
    <React.Fragment>
      <LogoContainer activateNav={setToggleNav} toggle={toggleNav} />
      <NavDiv>
        <NavContainer
          style={transIn}
          isActive={toggleNav}
          aria-labelledby="Site Navigation"
        >
          <NavLink to="/#">Community</NavLink>
          <NavLink to="/#">Store</NavLink>
          <NavLink to="/#">Support</NavLink>
          <NavLink to="/#">Account</NavLink>
        </NavContainer>
      </NavDiv>
    </React.Fragment>
  )
}
export default Navigation
