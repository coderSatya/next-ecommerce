import React from 'react';
import Image from 'next/image';

const SingleProduct = ({ProductDetailItem}) => {
   console.log(ProductDetailItem.title, 'ProductDetailItem')
  return (
    <div>
   
   <Image src={ProductDetailItem.image} width={500} height={500}/>
    </div>
  )
}

export default SingleProduct
