// import React from 'react';
import {cleanup, screen, fireEvent, render} from '@testing-library/react';

import Root from './Root';
import vintage_clock from '../__fixtures__/products/vintage_clock.json'
import coupons from '../__fixtures__/coupons.json'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('[question] 제품이름은 - 빈티지 시계', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const nameContent = container.querySelector('.name-container')

  expect(nameContent.childNodes[0].textContent.trim()).toBe("빈티지 시계")
})

it('[question] 제품 가격 - 30000', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const priceContent = container.querySelector('.price-container')

  expect(priceContent.childNodes[0].textContent.trim()).toBe('제품가격')
  expect(priceContent.childNodes[1].textContent.trim()).toBe("30000")
})

it('[question] 제품 설명 - 1986년에 만들어진 빈티지 시계입니다. 어느곳에나 잘 어울립니다. 인테리어로 분위기 Up 하세요', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const descriptionContent = container.querySelector('.description-container')

  expect(descriptionContent.childNodes[1].textContent.trim()).toBe("1986년에 만들어진 빈티지 시계입니다. 어느곳에나 잘 어울립니다. 인테리어로 분위기 Up 하세요")
})

it('[question] 제품 판매자 - jake@jake.com', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const sellerContent = container.querySelector('.seller-container')

  expect(sellerContent.childNodes[0].textContent.trim()).toBe('판매자')
  expect(sellerContent.childNodes[1].textContent.trim()).toBe("jake@jake.com")
})

it('[question] 결제 금액은 - 수량 * 제품 가격', async () => {
  const { container } = render(<Root {...vintage_clock} />)
  const quantityValue = 2

  const sellerContent = container.querySelector('.payment-container')

  expect(sellerContent.childNodes[0].textContent.trim()).toBe('결제금액')
  expect(sellerContent.childNodes[1].textContent.trim()).toBe("0")

  const quantity = await screen.findByTestId('quantity')
  fireEvent.change(quantity, { target: { value: quantityValue } })

  const payment = Number(vintage_clock.price) * quantityValue
  expect(sellerContent.childNodes[1].textContent.trim()).toBe(payment.toString())
})

it('[question] 구매버튼 비활성화 - 수량이 0일 경우(Default)', async () => {
  render(<Root {...vintage_clock} />)

  const purchaseElement = await screen.findByTestId('purchase')
  const cartElement = await screen.findByTestId('cart')

  expect(purchaseElement.disabled).toBe(true)
  expect(cartElement.disabled).toBe(true)
})

it('[question] 장바구니 활성화 - 수량이 1인 경우', async () => {
  render(<Root {...vintage_clock} />)

  const quantity = await screen.findByTestId('quantity')
  
  fireEvent.change(quantity, { target: { value: 1 } })

  const cartElement = await screen.findByTestId('cart')
  const purchaseElement = await screen.findByTestId('purchase')

  expect(purchaseElement.disabled).toBe(true)
  expect(cartElement.disabled).toBe(false)
})

it('[question] 구매버튼 활성화 - 수량이 1이고 구매동의', async () => {
  render(<Root {...vintage_clock} />)

  const quantity = await screen.findByTestId('quantity')
  
  const purchaseElement = await screen.findByTestId('purchase')
  const cartElement = await screen.findByTestId('cart')

  fireEvent.change(quantity, { target: { value: 1 } })

  expect(cartElement.disabled).toBe(false)
  const agree = await screen.findByTestId('agree')
  fireEvent.click(agree)

  expect(purchaseElement.disabled).toBe(false)
})

it('[solution] 사용자 포인트를 사용하면 결제금액이 할인되어야 한다.', async () => {
  const userPoint = 5000
  render(<Root {...vintage_clock} coupons={coupons} userPoint={5000} />)

  const quantity = await screen.findByTestId('quantity')

  fireEvent.change(quantity, { target: { value: 1 } })

  const userPointContainer = document.querySelector('#user-point')
  fireEvent.change(userPointContainer, { target: { value: userPoint } })

  const paymentAmount = document.querySelector('#payment-amount')
  expect(paymentAmount.textContent.trim()).toBe("25000")
})

it('[solution] 쿠폰을 사용하면 결제금액이 할인되어야 한다.', async () => {
  const selectCoupon = 'id_1'
  render(<Root {...vintage_clock} coupons={coupons} userPoint={0} />)

  const quantity = await screen.findByTestId('quantity')

  fireEvent.change(quantity, { target: { value: 1 } })

  const selectCouponContainer = document.querySelector('#select-coupon')
  fireEvent.change(selectCouponContainer, { target: { value: selectCoupon } })

  const paymentAmount = document.querySelector('#payment-amount')
  expect(paymentAmount.textContent.trim()).toBe("27000")
})

/* 테스트 케이스 추가 */
it('[solution] 수량과 포인트를 각각 설정한 후 수량을 0으로 만들때 결제금액은 0이 되어야 한다.(할인 금액은 유지)', async () => {
  const userPoint = 5000
  render(<Root {...vintage_clock} coupons={coupons} userPoint={userPoint} />)

  const quantity = await screen.findByTestId('quantity')

  fireEvent.change(quantity, { target: { value: 1 } })

  const userPointContainer = document.querySelector('#user-point')
  fireEvent.change(userPointContainer, { target: { value: userPoint } })

  const paymentAmount = document.querySelector('#payment-amount')
  expect(paymentAmount.textContent.trim()).toBe("25000")

  fireEvent.change(quantity, { target: { value: 0 } })

  expect(paymentAmount.textContent.trim()).toBe("0")
})