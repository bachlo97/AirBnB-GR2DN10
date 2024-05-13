import React from 'react'
import { FaStar } from 'react-icons/fa'

function Star() {

    const randomGuess=Math.floor(Math.random()*10+1);
  
    
  return (
    <div className="stars flex items-center sm:text-[1.2rem] md:text-[1.5rem] mb-1">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    ({randomGuess} người đánh giá)
    </div>
  )
}

export default Star
