import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import "./App.css"
import Home from "./components/HomePage/Home"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
