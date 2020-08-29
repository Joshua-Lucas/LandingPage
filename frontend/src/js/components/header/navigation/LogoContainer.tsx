import React from 'react'
import styled from 'styled-components'
import Logo from './svglogos/Logo'
import NavLogo from './svglogos/NavLogo'

const LogoWrapper = styled.div`
  height: 4.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
`

//React Component
const LogoContainer: React.FC = () => {
  return (
    <LogoWrapper>
      <Logo />
      <NavLogo />
    </LogoWrapper>
  )
}
export default LogoContainer
