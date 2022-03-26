// import React from 'react';
import {cleanup, screen, fireEvent, render} from '@testing-library/react';

import Root from './Root';
import image from '../img/vintage_clock.png'
import vintage_clock from '../__fixtures__/products/vintage_clock.json'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('[solution] 제품이름은 - 빈티지 시계', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const nameContent = container.querySelector('.name-container')

  expect(nameContent.childNodes[0].textContent.trim()).toBe("빈티지 시계")
})

it('[solution] 제품 이미지 - 존재하지 않는다면 src의 값은 없다.', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const imgContent = container.querySelector('.product-container > .image-container > img')

  expect(imgContent.src).toBe('')
})

it('[solution] 제품 이미지 - 존재한다면 src에 파일이름이 나와야 한다.', async () => {
  const { container } = render(<Root {...vintage_clock} image={image} />)

  const imgContent = container.querySelector('.product-container > .image-container > img')

  expect(imgContent.src).toBe('http://localhost/vintage_clock.png')
})

it('[solution] 제품 가격 - 30000', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const priceContent = container.querySelector('.price-container')

  expect(priceContent.childNodes[0].textContent.trim()).toBe('제품가격')
  expect(priceContent.childNodes[1].textContent.trim()).toBe("30000")
})

it('[solution] 제품 설명 - 1986년에 만들어진 빈티지 시계입니다. 어느곳에나 잘 어울립니다. 인테리어로 분위기 Up 하세요', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const descriptionContent = container.querySelector('.description-container')

  expect(descriptionContent.childNodes[1].textContent.trim()).toBe("1986년에 만들어진 빈티지 시계입니다. 어느곳에나 잘 어울립니다. 인테리어로 분위기 Up 하세요")
})

it('[solution] 제품 판매자 - jake@jake.com', async () => {
  const { container } = render(<Root {...vintage_clock} />)

  const sellerContent = container.querySelector('.seller-container')

  expect(sellerContent.childNodes[0].textContent.trim()).toBe('판매자')
  expect(sellerContent.childNodes[1].textContent.trim()).toBe("jake@jake.com")
})

it('[solution] 결제 금액은 - 수량 * 제품 가격', async () => {
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

it('[solution] 구매버튼 비활성화 - 수량이 0일 경우(Default)', async () => {
  render(<Root {...vintage_clock} />)

  const purchaseElement = await screen.findByTestId('purchase')
  const cartElement = await screen.findByTestId('cart')

  expect(purchaseElement.disabled).toBe(true)
  expect(cartElement.disabled).toBe(true)
})

it('[solution] 장바구니 활성화 - 수량이 1인 경우', async () => {
  render(<Root {...vintage_clock} />)

  const quantity = await screen.findByTestId('quantity')
  
  fireEvent.change(quantity, { target: { value: 1 } })

  const cartElement = await screen.findByTestId('cart')
  const purchaseElement = await screen.findByTestId('purchase')

  expect(purchaseElement.disabled).toBe(true)
  expect(cartElement.disabled).toBe(false)
})

it('[solution] 구매버튼 활성화 - 수량이 1이고 구매동의', async () => {
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