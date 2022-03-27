// import React from 'react';
import { cleanup } from '@testing-library/react'

// import Root from './Root'
// import image from '../img/vintage_clock.png'
// import product from '../__fixtures__/products/vintage_clock.json'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// 테스트가 완료된 후 DOM을 unmount(마운트 해제)하고 정리합니다.
afterEach(cleanup)

it('[question] 제품이름은 - 빈티지 시계', async () => {
  expect(false).toBe(true)
})

it('[question] 제품 이미지 - 존재하지 않는다면 src의 값은 없다.', async () => {
  expect(false).toBe(true)
})

it('[question] 제품 이미지 - 존재한다면 src에 파일이름이 나와야 한다.', async () => {
  expect(false).toBe(true)
})

it('[question] 제품 가격 - 30000', async () => {
  expect(false).toBe(true)
})

it('[question] 제품 설명 - 1986년에 만들어진 빈티지 시계입니다. 어느곳에나 잘 어울립니다. 인테리어로 분위기 Up 하세요', async () => {
  expect(false).toBe(true)
})

it('[question] 제품 판매자 - jake@jake.com', async () => {
  expect(false).toBe(true)
})

it('[question] 결제 금액은 - 수량 * 제품 가격', async () => {
  expect(false).toBe(true)
})

it('[question] 구매버튼 비활성화 - 수량이 0일 경우(Default)', async () => {
  expect(false).toBe(true)
})

it('[question] 장바구니 활성화 - 수량이 1인 경우', async () => {
  expect(false).toBe(true)
})

it('[question] 구매버튼 활성화 - 수량이 1이고 구매동의', async () => {
  expect(false).toBe(true)
})
