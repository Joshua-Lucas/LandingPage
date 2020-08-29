import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoContainer from './LogoContainer'

//Styled Components
const NavContainer = styled.nav`
  height: 4.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.mainBrand};
  padding: 8.25rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NavLink = styled(Link)`
  padding: 3.25rem 0;
`
//Interfaces
interface INavigationProps {}

//React Component
const Navigation: React.FC<INavigationProps> = ({}) => {
  return (
    <React.Fragment>
      <LogoContainer />
      <NavContainer>
        <NavLink to="/#">test</NavLink>
        <NavLink to="/#">test</NavLink>
        <NavLink to="/#">test</NavLink>
      </NavContainer>
    </React.Fragment>
  )
}
export default Navigation
