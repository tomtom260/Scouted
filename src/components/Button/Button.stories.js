import React from "react"
import Button from "./Button"
import { action, actions } from "@storybook/addon-actions"

const defaultExport = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
  },
  argTypes: {
    variant: { control: "color" },
    // onClick: { action: "onClick" },
    // onMouseOver: { action: "onMouseOver" },
    // onMouseLeave: { action: "onMouseLeave" },
  },
}

const Template = args => (
  <Button onClick={() => console.log("hello")} {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  children: "Primary Button",
}
export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}
export const Success = Template.bind({})
Success.args = {
  variant: "success",
}
export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
}

export default defaultExport
