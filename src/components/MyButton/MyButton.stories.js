import React from 'react'

import MyButton from './MyButton'

export default {
  title: 'Mi Boton',
  component: MyButton,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <MyButton {...args} />
export const Primary = Template.bind({})
Primary.args = {
  isDisabled: true,
}
