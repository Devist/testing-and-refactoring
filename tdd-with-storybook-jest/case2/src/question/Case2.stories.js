import React from 'react'

import Root from './Root'
import product from '../__fixtures__/products/vintage_clock.json'
// import image from '../img/vintage_clock_1.png'
import image1 from '../img/vintage_clock_1.png'
import image2 from '../img/vintage_clock_2.png'
import image3 from '../img/vintage_clock_3.png'

export const Primary = () => (
  <Root {...product} images={[image1, image2, image3]} />
)
Primary.storyName = 'Root'

export default {
  title: 'Case2[question]',
  component: Primary,
}
