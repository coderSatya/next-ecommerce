import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

const BannerText = ({title}) => {
  return (
    <div className='hidden lg:inline-block absolute top-0 left-0 w-full h-full'>
      <Container>
      <h2>{title}</h2>
      </Container>
    </div>
  )
}

export default BannerText
