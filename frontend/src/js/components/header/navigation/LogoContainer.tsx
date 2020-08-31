import React from 'react'
import styled from 'styled-components'
import Logo from './svglogos/Logo'
import HamburgerIcon from './svglogos/HamburgerIcon'
import CloseLogo from './svglogos/CloseLogo'

const LogoWrapper = styled.div`
  height: 4.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tablet}) {
    height: auto;
    width: auto;
    z-index: 0;
    padding-right: 4.86vw;
  }
`

const NavButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  appearance: none;
  justify-self: end;

  @media (min-width: ${(props) => props.theme.tablet}) {
    display: none;
  }
`
//INTERFACES
interface ILogoContainer {
  activateNav: React.Dispatch<React.SetStateAction<boolean>>
  toggle: boolean
}

//React Component
const LogoContainer: React.FC<ILogoContainer> = ({ activateNav, toggle }) => {
  return (
    <LogoWrapper>
      <Logo />
      <NavButton
        aria-label="Navigation Toggle Dropdown"
        onClick={() => activateNav(!toggle)}
      >
        {!toggle ? <HamburgerIcon /> : <CloseLogo />}
      </NavButton>
    </LogoWrapper>
  )
}
export default LogoContainer
