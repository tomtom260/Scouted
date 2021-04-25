import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Hello World</div>
    </ThemeProvider>
  )
}

export default App
