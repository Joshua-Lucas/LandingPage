import React from 'react'
import styled from 'styled-components'

//Styled Components
const SignUpWrapper = styled.div`
  height: 321px;
  width: auto;
  position: absolute;
  margin: 0 14px;
  right: 0;
  left: 0;
  top: 85%;
  z-index: 10;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  box-shadow: 0 0 34px 0 rgba(0, 0, 0, 0.35);
  font-family: Montserrat;
  padding: 0 16.5px;

  @media (min-width: 1024px) {
    max-width: 369px;
    right: 8.75vw;
    left: initial;
    top: 80%;

    transform: translate(0, -100%);
    transition: transform 0.2s ease-in;
  }
`
const SignUpHeader = styled.h1`
  font-size: 2.65rem;
  font-family: League Gothic;
  padding-bottom: 10px;
  margin: 0;
`

const SignUpSubHeader = styled.p`
  font-size: 1rem;
  line-height: 19px;
  text-align: center;
  margin: 0;
`

const SignUpForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignUpLabel = styled.label`
  margin: 26px 0;
`

const SignUpInput = styled.input`
  width: 100%;
  border: 1px solid #979797;
  padding: 15px 0 16px 23px;
  border-radius: 5px;
  font-size: 1rem;
`

const SignUpButton = styled.button`
  width: 129px;
  padding: 6.5px 0;
  border-radius: 24px;
  border-color: transparent;
  background-color: ${(props) => props.theme.mainBrand};
  font-family: League Gothic;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 28px;
  color: ${(props) => props.theme.headerLight};

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.mainBrand};
    background-color: transparent;
    color: ${(props) => props.theme.mainBrand};
    outline: transparent;
  }
`

//React Component
const SignUpModal: React.FC = () => {
  return (
    <SignUpWrapper>
      <SignUpHeader>SIGN UP</SignUpHeader>
      <SignUpSubHeader>
        Sign up for a chance to win a free copy of Halo Infinite
      </SignUpSubHeader>
      <SignUpForm>
        <SignUpLabel htmlFor="Email">
          <SignUpInput
            id="Email"
            type="email"
            placeholder="Email Address*"
            required
          ></SignUpInput>
        </SignUpLabel>
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpWrapper>
  )
}
export default SignUpModal
