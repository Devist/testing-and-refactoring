import React from 'react'

import Image from './Image'
import image1 from '../img/vintage_clock_1.png'

export const Default = () => <Image image={image1} />

export const EmptyImage = () => <Image />

export default {
    title: 'Case2[solution]/Image',
    component: Default,
};