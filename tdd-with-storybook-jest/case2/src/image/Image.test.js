import React from 'react'
import renderer from 'react-test-renderer'
import Image from './Image'

import image from '../img/vintage_clock_1.png'

test('제품 이미지(snampshots) - 존재하지 않는다면 No-Image가 표현된다.', () => {
  const component = renderer.create(<Image />)

  // 스냅샷 테스트는 제스트에서 제공
  // 트리로 저장하고 있음
  // 그려진 정보를 돔 형태로 갖고 있다가, 이 정보가 동일하면 pass, 동일하지 않으면 fail
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('제품 이미지(snampshots) - 빈티지 시계가 표현된다.', () => {
  const component = renderer.create(<Image image={image} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
