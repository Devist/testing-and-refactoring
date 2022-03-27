import React from 'react'

import Discount from './index'
import coupons from '../__fixtures__/coupons.json'

export const Primary = () => <Discount coupons={coupons} orderAmount={30000} userPoint={5000} />

export default {
    title: 'Case3[solution]/Discount',
    component: Primary,
};