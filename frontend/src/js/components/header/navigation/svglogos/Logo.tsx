import React from 'react'
import styled from 'styled-components'

// STYLED COMPONENTS
const LogoSvg = styled.svg`
  width: 2.56rem;
  height: 3rem;
  grid-column: 2/3;
  justify-self: center;
`

const Logo: React.FC = () => {
  return (
    <React.Fragment>
      <LogoSvg viewBox="0 0 41 48">
        <defs>
          <path id="a" d="M.006 0H4.51v10.511H.006z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(0 22.018)">
            <mask id="b" fill="#fff">
              <path id="a" d="M.006 0H4.51v10.511H.006z" />
            </mask>
            <path
              d="M4.456 1.306c0-.438.02-.873.054-1.306H2.678A2.672 2.672 0 000 2.666v5.18c0 1.472 1.2 2.665 2.678 2.665h1.778V1.306z"
              fill="#FFF"
              mask="url(#b)"
            />
          </g>
          <path
            d="M38.28 22.018h-1.86c.035.435.054.873.054 1.313v9.256h1.805c1.503 0 2.721-1.2 2.721-2.68V24.7c0-1.48-1.218-2.68-2.72-2.68zM34.457 38.972V23.28c0-.437-.02-.87-.059-1.298-.594-6.63-5.7-11.939-12.18-12.745V6.594a3.533 3.533 0 001.761-3.067C23.98 1.58 22.421 0 20.5 0s-3.48 1.58-3.48 3.527c0 1.314.71 2.46 1.762 3.067v2.643c-6.482.806-11.588 6.118-12.18 12.75-.039.426-.06.857-.06 1.293v15.692h7.709v-3.006c0-.856.684-1.55 1.529-1.55h9.44c.844 0 1.53.694 1.53 1.55v3.006h7.707zM13.77 30.408c-2.098 0-3.798-1.724-3.798-3.85 0-2.127 1.7-3.85 3.798-3.85 2.097 0 3.797 1.723 3.797 3.85 0 2.126-1.7 3.85-3.797 3.85zm10.21-3.85c0-2.127 1.7-3.85 3.797-3.85 2.097 0 3.798 1.723 3.798 3.85 0 2.126-1.7 3.85-3.798 3.85s-3.798-1.724-3.798-3.85zM36.653 40.954H4.129a1.3 1.3 0 00-1.294 1.307v4.432A1.3 1.3 0 004.13 48h32.524a1.3 1.3 0 001.294-1.307V42.26a1.3 1.3 0 00-1.294-1.307z"
            fill="#FFF"
          />
        </g>
      </LogoSvg>
    </React.Fragment>
  )
}
export default Logo
