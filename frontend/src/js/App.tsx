import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// Style Imports
import Theme from './utils/Styles/Theme'
import GlobalStyle from './utils/Styles/GlobalStyle'
// Component Imports
import Header from './components/header/Header'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route to=" /">
            <GlobalStyle />
            <Header />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
