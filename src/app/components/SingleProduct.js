import React from 'react';
import Image from 'next/image';
import FormattedPrice from './FormattedPrice';

const SingleProduct = ({ProductDetailItem}) => {
   console.log(ProductDetailItem.title, 'ProductDetailItem')
  return (
    <div>
    <div className='grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg'>
   
   <Image src={ProductDetailItem.image} width={500} height={500} className='w-full max-h-[700px] object-cover rounded-lg'/>
    </div>
    <div>
    <p>{ProductDetailItem.title}</p>
    <p><FormattedPrice amount={ProductDetailItem.price} /></p>
    </div>
    </div>

  )
}

export default SingleProduct
