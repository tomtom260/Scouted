import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import theme from "./theme"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header scrolled={true} />
      <Grid direction="row" container>
        <Grid item xs={0} lg={1} xl={3} />
        <Grid xs={12} md={10} lg={8} xl={6} item container direction="column">
          <Grid item>
            <Hero />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
