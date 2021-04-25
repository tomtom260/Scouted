import React from "react"
import Input from "./Input"

const inputExport = {
  title: "Form/Input",
  component: Input,
  // decorators: [
  //   Story => (
  //     <div
  //       style={{
  //         backgroundColor: "red",
  //         display: "flex",
  //         justifyContent: "left",
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
}

const Template = args => <Input {...args} />

export const smallInput = Template.bind({})
smallInput.args = {
  size: "small",
}

export const mediumInput = Template.bind({})
mediumInput.args = {
  size: "medium",
}
export const largeInput = Template.bind({})
largeInput.args = {
  size: "large",
}

smallInput.storyName = "Small"
mediumInput.storyName = "Medium"
largeInput.storyName = "Large"

export default inputExport
