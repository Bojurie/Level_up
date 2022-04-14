import React, { useState } from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { carouselData } from './CarouselData'
import './Carousel.css'

const Carousel = ({carousels}) => {
  const [current, setCurrent] = useState(0);
  const length = carousels.length;

  const nextSlide = () =>{
    setCurrent(current === length - 1? 0 : current + 1);
  };

  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(carousels) || carousels.length <= 0) {
    return null
  }
  return ( 
  <>
    <section className='carousel'>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {carouselData.map((carousel, index) =>{
        return(
          <div className={index === current ? 'carousel active' : 'carousel'} key={index}>
             { index === current && (
               <img src={carousel.image} alt="Level Up" className='image'/>
             )}
          </div>
         
        )
      })}
    </section>
   
    </>
    
  )
}

export default Carousel
