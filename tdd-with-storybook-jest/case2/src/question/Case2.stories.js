import React from 'react'

import Root from './Root'
import product from '../__fixtures__/products/vintage_clock.json'
import image from '../img/vintage_clock_1.png'

export const Primary = () => <Root {...product} image={image} />
Primary.storyName = 'Root';

export default {
    title: 'Case2[question]',
    component: Primary,
};


