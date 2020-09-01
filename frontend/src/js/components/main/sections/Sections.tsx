import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SectionComponent from './SectionComponent'
import { api } from '../../../utils/ApiCalls/Api'

// Styled-Components
const SectionDiv = styled.div`
  margin-top: 20rem;
  @media (min-width: 1024px) {
    margin: 0;
  }
`

// Interfaces
export type TSectionData = {
  id: number
  img_src: string
  img_alt: string
  headline: string
  copy: string
}

//React Component
const Sections: React.FC = () => {
  const [sectionData, setSectionData] = useState<TSectionData[]>([])

  //   Fetching data from api
  useEffect(() => {
    const FetchSectionData = async () => {
      const Result = await api.getArticles()
      setSectionData(Result)
    }
    FetchSectionData()
  }, [])

  return (
    <SectionDiv>
      <SectionComponent dark={true} First={'true'} Data={sectionData[0]} />
      <SectionComponent reverse={true} Data={sectionData[1]} />
    </SectionDiv>
  )
}
export default Sections
