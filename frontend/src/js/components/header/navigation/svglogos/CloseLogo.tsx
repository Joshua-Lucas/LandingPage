import React from 'react'
import styled from 'styled-components'

//Styled Components
const LogoSvg = styled.svg`
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 2rem;
  grid-column: 3/4;
  justify-self: end;
  fill: white;

  &:hover {
    fill: ${(props) => props.theme.accentDark};
  }
`
//Interfaces

//React Component
const CloseLogo: React.FC = () => {
  return (
    <LogoSvg>
      <path
        d="M24.0416306 0l2.8284271 2.8284271L16.263 13.435l10.6070577 10.6066306-2.8284271 2.8284271L13.435 16.263 2.8284271 26.8700577 0 24.0416306 10.606 13.435 0 2.8284271 2.8284271 0 13.435 10.606 24.0416306 0z"
        fillRule="evenodd"
      />
    </LogoSvg>
  )
}
export default CloseLogo
