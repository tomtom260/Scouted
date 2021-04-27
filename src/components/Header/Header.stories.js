import Header from "./Header"

const defaultExport = {
  title: "Header",
  component: Header,
}

const Template = args => <Header {...args} />
export const HeaderComp = Template.bind({})
Header.story = "Header"

export default defaultExport
