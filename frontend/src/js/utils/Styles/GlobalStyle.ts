import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import Fonts from './Fonts'
import Colors from './Colors'

const GlobalStyle = createGlobalStyle`
    ${normalize}
    //fonts
    @font-face {
        font-family: 'Roboto', sans-serif;
        src: url(${Fonts.roboto.medium}) format('ttf');
    }
    @font-face {
        font-family: 'RobotoBlack', sans-serif;
        src: url(${Fonts.roboto.black}) format('ttf');
    }

    @font-face {
        font-family: 'Montserrat', sans-serif;
        src: url(${Fonts.montserrat}) format('ttf');
    }
    @font-face {
        font-family: 'LeagueGothic', sans-serif;
        src: url(${Fonts.leagueGothic}) format('ttf');
    }

    html {
        font-size: 16px;
        box-sizing: border-box;
        font-family:  Helvetica, sans-serif;

    }
    * , *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        background-color: ${Colors.Neutral.Light};
        color: ${Colors.Text.Main};
        
    }
`
export default GlobalStyle
