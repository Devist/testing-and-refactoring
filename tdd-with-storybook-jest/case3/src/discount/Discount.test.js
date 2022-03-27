import { cleanup, render, fireEvent } from '@testing-library/react';

import Discount from './index';
import coupons from '../__fixtures__/coupons.json'

afterEach(cleanup);

it('초기화면(Default)', async () => {
    render(<Discount />)

    const orderAmount = document.querySelector('#order-amount')
    expect(orderAmount.textContent.trim()).toBe("0")

    const userPoint = document.querySelector('#user-point')
    expect(userPoint.value).toBe("0")

    const selectCoupon = document.querySelector('#select-coupon')
    expect(selectCoupon.value).toBe("")

    const discountAmount = document.querySelector('#discount-amount')
    expect(discountAmount.textContent.trim()).toBe("0")
})

it('적립 포인트를 사용하여 결제금액을 할인받는다.', async () => {
    const userPoint = 10000
    const orderAmount = 20000
    render(<Discount orderAmount={orderAmount} userPoint={userPoint} />)

    const orderAmountContainer = document.querySelector('#order-amount')
    expect(orderAmountContainer.textContent.trim()).toBe(orderAmount.toString())

    const userPointContainer = document.querySelector('#user-point')
    fireEvent.change(userPointContainer, { target: { value: userPoint } })
    expect(userPointContainer.value).toBe(userPoint.toString())

    const discountAmount = document.querySelector('#discount-amount')
    expect(discountAmount.textContent.trim()).toBe("10000")
})

it('쿠폰을 사용하여 할인을 받는다.', async () => {
    const orderAmount = 20000
    const selectCoupon = 'id_2'
    render(<Discount orderAmount={orderAmount} coupons={coupons} />)

    const orderAmountContainer = document.querySelector('#order-amount')
    expect(orderAmountContainer.textContent.trim()).toBe(orderAmount.toString())

    const selectCouponContainer = document.querySelector('#select-coupon')
    
    fireEvent.change(selectCouponContainer, { target: { value: selectCoupon } })
    expect(selectCouponContainer.value).toBe(selectCoupon)

    const discountAmount = document.querySelector('#discount-amount')
    expect(discountAmount.textContent.trim()).toBe("4000")
})

it('적립 포인트와 쿠폰을 둘다 사용하여 할인을 받는다.', async () => {
    const userPoint = 5000
    const orderAmount = 30000
    const selectCoupon = 'id_3'
    render(<Discount orderAmount={orderAmount} userPoint={userPoint} coupons={coupons} />)

    const orderAmountContainer = document.querySelector('#order-amount')
    expect(orderAmountContainer.textContent.trim()).toBe(orderAmount.toString())

    const userPointContainer = document.querySelector('#user-point')
    fireEvent.change(userPointContainer, { target: { value: userPoint } })
    expect(userPointContainer.value).toBe(userPoint.toString())

    const selectCouponContainer = document.querySelector('#select-coupon')
    fireEvent.change(selectCouponContainer, { target: { value: selectCoupon } })
    expect(selectCouponContainer.value).toBe(selectCoupon)

    const discountAmount = document.querySelector('#discount-amount')
    expect(discountAmount.textContent.trim()).toBe("14000")
})

it('쿠폰을 사용하면 callback 함수가 호출된다.', async () => {
    const userPoint = 5000
    const orderAmount = 30000
    const selectCoupon = 'id_2'
    const callback = jest.fn()
    render(<Discount orderAmount={orderAmount} userPoint={userPoint} coupons={coupons} callback={callback} />)

    expect(callback).toHaveBeenCalledTimes(1)

    const orderAmountContainer = document.querySelector('#order-amount')
    expect(orderAmountContainer.textContent.trim()).toBe(orderAmount.toString())

    const userPointContainer = document.querySelector('#user-point')
    fireEvent.change(userPointContainer, { target: { value: userPoint } })
    expect(userPointContainer.value).toBe(userPoint.toString())
    expect(callback).toHaveBeenCalledTimes(2)

    const selectCouponContainer = document.querySelector('#select-coupon')
    fireEvent.change(selectCouponContainer, { target: { value: selectCoupon } })
    expect(selectCouponContainer.value).toBe(selectCoupon)
    expect(callback).toHaveBeenCalledTimes(3)

    const discountAmount = document.querySelector('#discount-amount')
    expect(discountAmount.textContent.trim()).toBe("11000")
})