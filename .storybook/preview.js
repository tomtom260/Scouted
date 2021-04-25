import React from "react"
import "@storybook/addon-console"
import { withConsole } from "@storybook/addon-console"

export const decorators = [
  Story => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Story />
    </div>
  ),
  (storyFn, context) => withConsole()(storyFn)(context),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
