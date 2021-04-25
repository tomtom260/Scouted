import Button from "./Button"

const defaultExport = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    children: { type: "string" },
    size: { type: "string" },
    variant: { type: "string" },
  },
}

const Template = args => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
  children: "Small",
  size: "small",
}
export const Medium = Template.bind({})
Medium.args = {
  children: "Medium",
}
export const Large = Template.bind({})
Large.args = {
  children: "Large",
  size: "large",
}

export const Text = Template.bind({})
Text.args = {
  variant: "text",
  children: "text",
}

export default defaultExport
