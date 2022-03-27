import React from 'react'
import PropTypes from 'prop-types';

import Slider from './Slider'
import './root.css'

function SliderRoot(props) {
    const { images = [] } = props
    const [ currentSlide, setCurrentSlide ] = React.useState(0)

    const handleSlideClick = React.useCallback(function handleSlideClick (index) {
        return () => {
            setCurrentSlide(index)
        }
    }, [setCurrentSlide])

    return (
        <div className='slider-root-container'>
            <Slider
                currentSlide={currentSlide}
                images={images}
                handleIndex={setCurrentSlide}
            />
             <div className='slider-button-container'>
                {
                    images.map((image, index) => {
                        const isSelected = currentSlide === index
                        return (
                            <button
                                className={isSelected ? 'selected' : 'nav'}
                                key={index}
                                onClick={handleSlideClick(index)}>
                            </button>
                        )
                    })
                }
            </div>
        </div>
       
    )
}

SliderRoot.propTypes = {
    images: PropTypes.array,
  };

export default SliderRoot

