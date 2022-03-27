import React from 'react'
import PropTypes from 'prop-types';

import './slider.css'
import noImage from '../img/no_image.png'

function Slide(props) {
    const { node } = props
    return (
        <div className='slide-container'>
            {node}
        </div>
    )
}

export default function Slider(props) {
    const {
        images,
        currentSlide,
    } = props
    
    const slideRef = React.useRef(null)


    React.useEffect(() => {
        slideRef.current.style.transition = 'all 0.1s ease-in-out'
        slideRef.current.style.transform = `translateX(${-400 * currentSlide}px )`
    }, [currentSlide])

    return (
        <div className='slider-container'>
            <div className='slide-wrapper' ref={slideRef}>
                {
                    images.map((image, index) => {
                        return (
                            <Slide
                                key={index}
                                node={
                                    <img src={image} alt={image} />
                                }
                            />
                        )
                    })
                }
                {
                    images.length === 0 && <img src={noImage} alt={noImage} />
                }
            </div>
        </div>
    )
}

Slider.propTypes = {
    images: PropTypes.array
};