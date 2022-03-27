// import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Slider from './index';
import image1 from '../img/vintage_clock_1.png'
import image2 from '../img/vintage_clock_2.png'
import image3 from '../img/vintage_clock_3.png'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Slider 이미지 테스트', () => {
  it('이미지가 존재하지 않을때는 src에 no_image.png가 표현된다.', async () => {
    const { container } = render(<Slider />)
  
    const imgContent = container.querySelector('.slide-wrapper img')
  
    expect(imgContent.src).toBe('http://localhost/no_image.png')
  })
  
  it('이미지가 한개만 존재할 경우', async () => {
    const { container } = render(<Slider images={[image1]} />)
  
    const imgContents = container.querySelectorAll('.slide-wrapper img')
  
    expect(imgContents[0].src).toBe('http://localhost/vintage_clock_1.png')
    expect(imgContents[1]).toBe(undefined)
  })
  
  it('이미지가 복수개 존재할 경우', async () => {
    const { container } = render(<Slider images={[image1, image2, image3]} />)
  
    const imgContents = container.querySelectorAll('.slide-wrapper .slide-container')
    
    imgContents.forEach(function(element, index) {
        const elementNode = element.querySelector('img')
        expect(elementNode.src).toBe(`http://localhost/vintage_clock_${index + 1}.png`)
    });
  })  
})
