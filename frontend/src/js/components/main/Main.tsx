import React from 'react'
import styled from 'styled-components'
import Banner from './banner/Banner'

//Styled Components
const MainContent = styled.main``
//Interfaces
interface ImainProps {}

//React Component
const Main: React.FC<ImainProps> = ({}) => {
  return (
    <MainContent>
      <Banner />
    </MainContent>
  )
}
export default Main
