import React from 'react'
import styled from 'styled-components'
import Banner from './banner/Banner'
import Sections from './sections/Sections'

//Styled Components
const MainContent = styled.main``
//Interfaces

//React Component
const Main: React.FC = () => {
  return (
    <MainContent>
      <Banner />
      <Sections />
    </MainContent>
  )
}
export default Main
