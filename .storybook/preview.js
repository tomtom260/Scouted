import React from "react"
import "@storybook/addon-console"
import { withConsole } from "@storybook/addon-console"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../src/theme"

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
  (storyFn, context) => withConsole()(storyFn)(context),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
