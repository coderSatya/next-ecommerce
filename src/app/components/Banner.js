"use client"
import React from 'react';
import Slider from 'react-slick';
import bannerone from '@/images/bannerone.jpg'
import bannertwo from '@/images/bannertwo.jpg'
import bannerthree from '@/images/bannerthree.jpg'
import Image from 'next/image';
import BannerText from './BannerText';



const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className=''>
    <Slider {...settings}>
    <div>
    <Image src={bannerthree} alt="bannerthree" className='w-full h-full relative'/>
    </div>
    <div>
    <Image src={bannerone} alt="bannerone" className='w-full h-full relative'/>
    <BannerText title="Outware Picks" />
    </div>
    
  </Slider>
    </div>
  )
}

export default Banner
