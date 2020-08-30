import React from 'react'
import styled from 'styled-components'

//Styled Components
const LogoSvg = styled.svg`
  width: 2.125rem;
  height: 1.25rem;
  margin-right: 2rem;

  grid-column: 3/4;
  justify-self: end;
  fill: white;
  &:hover {
    fill: ${(props) => props.theme.accentDark};
  }
`
//Interfaces
interface INavLogoProps {}

//React Component
const NavLogo: React.FC<INavLogoProps> = ({}) => {
  return (
    <LogoSvg>
      <g fillRule="evenodd">
        <path d="M0 0h34v4H0zM0 8h34v4H0zM0 16h27v4H0z" />
      </g>
    </LogoSvg>
  )
}
export default NavLogo
