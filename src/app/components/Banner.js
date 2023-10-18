"use client"
import React from 'react';
import Slider from 'react-slick';
import bannerone from '@/images/bannerone.jpg'
import bannertwo from '@/images/bannertwo.jpg'
import bannerthree from '@/images/bannerthree.jpg'
import Image from 'next/image';
import BannerText from './BannerText';



const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

      };
  return (
    <div className='w-full h-full relative'>
    <Slider {...settings}>
    <div>
    <Image src={bannerone} alt="bannerone" className='w-full h-full relative'/>
    <BannerText title="Best for men" />
    </div>
    <div>
    <Image src={bannertwo} alt="bannertwo" className='w-full h-full relative'/>
    <BannerText title="Outware Picks" />
    </div>
    <div>
    <Image src={bannerthree} alt="bannerthree" className='w-full h-full relative'/>
    <BannerText title="Seasonal Offers" />
    </div>
    
  </Slider>
    </div>
  )
}

export default Banner
