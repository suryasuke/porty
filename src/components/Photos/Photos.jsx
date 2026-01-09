import React from 'react'
import Marquee from 'react-fast-marquee';   
import surya from '../../assets/surya' 
import './Photos.css' 
function photos() {
  return (
   <div className='photo-c'>
  <Marquee speed={40} gradient={false} height >
    {surya.map((item, index) => (
      <div className='pic-c' key={index}>
        <img
          className='surya-img'
          src={item.image}
          alt={`surya-${index}`}
          style={{ transform: `rotate(${item.deg}deg)` }}
        />
      </div>
    ))}
  </Marquee>
</div>

  )
}

export default photos
