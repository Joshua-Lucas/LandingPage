import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoContainer from './LogoContainer'

//Styled Components
const NavWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.tablet}) {
    height: 4.5rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.mainBrand};
  }
`

const NavDiv = styled.div`
  position: relative;
`

const Mask = styled.div<IToggleProps>`
  height: 100vh;
  z-index: 30;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(23, 23, 23, 0.84);
  width: 100%;
  display: ${(props) => (props.toggle ? 'block' : 'none')};
  transform: ${(props) =>
    !props.toggle ? 'translateY(-500%)' : 'translateY(0%)'};

  transition: ${(props) =>
    !props.toggle ? 'transform 0.2s ease-in' : 'transform 0.3s ease-out'};
  @media (min-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`

const NavContainer = styled.nav<IToggleProps>`
  height: 54.187vh;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};
  padding: 3.55rem 0 5rem;
  z-index: 50;
  position: absolute;
  top: -100;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) =>
    !props.toggle ? 'translateY(-100%)' : 'translateY(0%)'};

  transition: ${(props) =>
    !props.toggle ? 'transform 0.2s ease-in' : 'transform 0.3s ease-out'};

  @media (min-width: ${(props) => props.theme.tablet}) {
    position: static;
    width: auto;
    padding: 0;
    padding-right: 8.75vw;
    height: auto;
    flex-direction: row;
    align-items: center;
    transform: translateY(0);
  }
`

const NavLink = styled(Link)`
  padding-bottom: 3.32rem;
  color: ${(props) => props.theme.neutralLight};
  line-height: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.25rem;
  font-family: 'Montserrat';

  &:hover,
  &:focus {
    color: ${(props) => props.theme.accentDark};
    outline: transparent;
  }

  @media (min-width: ${(props) => props.theme.tablet}) {
    padding: 0 1rem;
  }
`
//Interfaces
interface IToggleProps {
  toggle: boolean
}

//React Component
const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <NavWrapper>
      <LogoContainer activateNav={setToggleNav} toggle={toggleNav} />
      <NavDiv>
        <NavContainer toggle={toggleNav} aria-label="Navigation Label">
          <NavLink to="/#">Community</NavLink>
          <NavLink to="/#">Store</NavLink>
          <NavLink to="/#">Support</NavLink>
          <NavLink to="/#">Account</NavLink>
        </NavContainer>
        <Mask toggle={toggleNav}></Mask>
      </NavDiv>
    </NavWrapper>
  )
}
export default Navigation
