import React from 'react';
import {AiFillStar} from 'react-icons/ai'


const Rating = ({star}) => {
    const stars=[]
    for (let i = 0; i <=star ; i++) {
        
        stars.push(
          <span><AiFillStar /></span>
        );
      }
     
  return (
    <div className='flex gap-x-1 text-yellow-400'>
   {stars}
    </div>
  )
}

export default Rating
