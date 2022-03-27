import React from 'react'

import Slider from './index'
import image1 from '../img/vintage_clock_1.png'
import image2 from '../img/vintage_clock_2.png'
import image3 from '../img/vintage_clock_3.png'

export const MultiImages = () => <Slider images={[image1, image2, image3]} />

export const OneImages = () => <Slider images={[image1]} />

export const EmptyImage = () => <Slider images={[]} />

export default {
    title: 'Case3[solution]/Image Slider',
    component: MultiImages,
};