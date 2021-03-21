import React from 'react'

import Product from './Product'

export default {
  title: 'Product',
  component: Product,
}

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Product {...args} />
export const Primary = Template.bind({})
Primary.args = {
  name: 'Cerveza',
}
