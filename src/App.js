import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import "./App.css"
import Home from "./components/HomePage/Home"
import Header from "./components/Header/Header"
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header scrolled={true} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/candidates" component={Home} />
          <Route
            path="/companies"
            component={() => (
              <Link to="/">
                <h1>Companies</h1>
              </Link>
            )}
          />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
