import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

import image from '../img/vintage_clock_1.png'

test('제품 이미지(snampshots) - 존재하지 않는다면 No-Image가 표현된다.', () => {
  const component = renderer.create(
    <Image />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('제품 이미지(snampshots) - 빈티지 시계가 표현된다.', () => {
    const component = renderer.create(
    <Image image={image}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});