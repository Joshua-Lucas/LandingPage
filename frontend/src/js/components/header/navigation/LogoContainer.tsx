import React from 'react'
import styled from 'styled-components'
import Logo from './svglogos/Logo'
import NavLogo from './svglogos/NavLogo'
import CloseLogo from './svglogos/CloseLogo'

const LogoWrapper = styled.div`
  height: 4.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
`

const NavButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  appearance: none;
  justify-self: end;
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
      <NavButton name="Toggle Nav Menu" onClick={() => activateNav(!toggle)}>
        {!toggle ? <NavLogo /> : <CloseLogo />}
      </NavButton>
    </LogoWrapper>
  )
}
export default LogoContainer
