import React from 'react'
import { FaStar } from 'react-icons/fa'

function Star() {

    const randomGuess=Math.floor(Math.random()*10+1);
    const randomStar=Math.floor(Math.random()*5+1);
    const filledStars = Array(5).fill('gold', 0, randomStar).fill('gray', randomStar);
  console.log(filledStars);
  
    return (
    <div className="stars flex items-center sm:text-[1.2rem] md:text-[1.5rem] mb-1">
 
 {filledStars.map((color, index) => (
        <FaStar key={index} style={{ color }} /> 
      ))}

    ({randomGuess} người đánh giá)
    </div>
  )
}

export default Star
