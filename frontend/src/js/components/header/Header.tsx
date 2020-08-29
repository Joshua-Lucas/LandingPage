import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation/Navigation'

//Styled Components
const HeaderWrapper = styled.header``

//React Component
const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  )
}
export default Header
