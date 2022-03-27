import React from 'react'

import Root from './Root'
import vintage_clock from '../__fixtures__/products/vintage_clock.json'
import image1 from '../img/vintage_clock_1.png'
import image2 from '../img/vintage_clock_2.png'
import image3 from '../img/vintage_clock_3.png'
import coupons from '../__fixtures__/coupons.json'

export const Primary = () => <Root {...vintage_clock} images={[image1, image2, image3]} coupons={coupons} userPoint={5000} />

Primary.storyName = 'Root';

export default {
    title: 'Case3[solution]',
    component: Root,
};


