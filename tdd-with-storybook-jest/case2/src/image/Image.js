import React from 'react';

import './image.css'
import noImage from '../img/no_image.png'

export default function Image(props) {
  const { image = noImage } = props
  return (
    <div className='image-container'>
      <img src={image} alt={image} />
    </div>
  )
}