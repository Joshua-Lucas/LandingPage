import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { TSectionData } from './Sections'
import { useSpring, animated } from 'react-spring'

//Styled Components
const AnimationSetter = styled.div<ISectionProps>`
  background-color: ${(props) =>
    props.darkmode ? props.theme.accentDark : props.theme.neutralLight};
`

const SectionWrapper = styled(animated.section)<ISectionProps>`
  background-color: ${(props) =>
    props.darkmode ? props.theme.accentDark : props.theme.neutralLight};
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => (props.isfirst == 'true' ? '1.68rem' : 0)};
  @media (min-width: ${(props) => props.theme.tablet}) {
    padding: 7.29vh 12.91vw;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
  }
`

const ArticleImage = styled.img`
  box-sizing: border-box;
  height: 202px;
  width: 100vw;
  border: 1px solid #979797;
  background-color: #d8d8d8;

  @media (min-width: 768px) {
    width: 36.11vw;
    height: 37.15vh;
    max-width: 520px;
    max-height: 330px;
  }
`

const ArticleDiv = styled.article<ISectionProps>`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  padding: 0 1.1rem;
  color: ${(props) =>
    props.darkmode ? props.theme.headerLight : props.theme.headerDark};
  @media (min-width: 800px) {
    max-width: 490px;
    margin-left: ${(props) => (props.reverse ? '1.1rem' : '3.625rem')};
    margin-right: ${(props) => (props.reverse ? '3.625rem' : '1.1rem')};
    text-align: ${(props) => (props.reverse ? 'end' : 'start')};
    max-height: 329px;
    margin-top: 0;
    padding: 0rem 0;
  }
`

const ArticleTitle = styled.h1`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 1.7rem;
  font-family: Roboto;
  font-weight: 900;
  line-height: 39px;
`

const ArticleText = styled.p`
  font-size: 1rem;
  margin: 0;
  padding-bottom: 5.125rem;
`

//Interfaces
interface ISectionComponentProps {
  dark?: boolean
  reverse?: boolean
  First?: boolean | string
  Data: TSectionData
}

interface ISectionProps {
  darkmode?: boolean | string
  reverse?: boolean | string
  isfirst?: string | boolean
}

//React Component
const SectionComponent: React.FC<ISectionComponentProps> = ({
  dark,
  reverse,
  Data,
  First,
}) => {
  const [visable, setVisable] = useState(false)
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // tracks when sections become visable
    let options = { threshold: 0.25 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisable(entry.isIntersecting))
    }, options)
    if (el.current != null) {
      observer.observe(el.current)
    }
  }, [])

  const props = useSpring({
    config: { mass: 1, tension: 170, friction: 50 },
    transform: visable ? 'translate3d(0,0%,0)' : 'translate3d(0,10%,0)',
    opacity: visable ? 1 : 0,
  })

  return (
    <AnimationSetter darkmode={dark} isfirst={First}>
      <SectionWrapper
        style={props}
        ref={el}
        darkmode={dark}
        isfirst={First}
        reverse={reverse}
      >
        <ArticleImage
          src={Data == undefined ? '' : Data.img_src}
          alt={Data == undefined ? '' : Data.img_alt}
        />
        <ArticleDiv darkmode={dark} reverse={reverse}>
          <ArticleTitle>{Data == undefined ? '' : Data.headline}</ArticleTitle>
          <ArticleText>{Data == undefined ? '' : Data.copy}</ArticleText>
        </ArticleDiv>
      </SectionWrapper>
    </AnimationSetter>
  )
}
export default SectionComponent
