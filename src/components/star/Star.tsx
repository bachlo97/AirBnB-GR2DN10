import { getCommentRoomId } from "@/services/comment/comment.service";
import { IIFE } from "@/utils";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
type Props = {
  roomId: number
};
function Star({roomId}:Props) {
  const randomGuess = Math.floor(Math.random() * 10 + 1);
  const randomStar = Math.floor(Math.random() * 5 + 1);
  const [guess,setGuess] = useState()
  const [goldStar,setGoldStar] = useState(0)
  const filledStars = Array(5)
    .fill("gold", 0, goldStar)
    .fill("gray", goldStar);

  useEffect(() => {
    IIFE(async() => {
      try{
        const commentAPI = await getCommentRoomId(String(roomId))
        const result = commentAPI.content.filter((comment:any) => comment.saoBinhLuan <=5)
        const allStars = result.reduce((total:number, comment:any) => total + comment.saoBinhLuan, 0);
        setGoldStar(Math.round(allStars/result.length))
        setGuess(result.length)
      }catch(e){
        console.log(e)
      }
    })
  },[])

  return (
    <div
      className="stars mb-1 flex items-center sm:text-[1.2rem] md:text-[1.5rem]"
    >
      {filledStars.map((color, index) => (
        <FaStar key={index} style={{ color }} />
      ))}
      ({guess} người đánh giá)
    </div>
  );
}

export default Star;
