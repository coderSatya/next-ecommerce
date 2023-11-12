import React from 'react';
import {
    BsYoutube,
    BsGithub,
    BsLinkedin,
    BsFacebook,
    BsReddit,
} from "react-icons/bs";
import payment from '@/images/payment.png'
import Logo from './Logo';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full bg-darkText text-slate-100'>
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<Logo />
<p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<div className='flex items-center gap-x-4'>
<a href="" target="_blank">
<span className='bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'>
<BsYoutube />
</span>
</a>
<a href="" target="_blank">
<span className='bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'>
<BsGithub />
</span>
</a>
<a href="" target="_blank">
<span className='bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'>
<BsLinkedin />
</span>
</a>
<a href="" target="_blank">
<span className='bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'>
<BsReddit />
</span>
</a>
<a href="" target="_blank">
<span className='bg-slate-100 p-1 text-darkText inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'>
<BsFacebook />
</span>
</a>
</div>
</div>
<div>
<p>latest post</p>
<ul className='text-sm font-light mt-2 flex flex-col gap-y-2'>
<li className='flex flex-col'>
<span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Headed Next</span>
<span className='text-orange-600'>January 31, 2022</span>
</li>
<li className='flex flex-col'>
<span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Headed Next</span>
<span className='text-orange-600'>January 31, 2022</span>
</li>
<li className='flex flex-col'>
<span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Headed Next</span>
<span className='text-orange-600'>January 31, 2022</span>
</li>
<li className='flex flex-col'>
<span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>Where Music Headed Next</span>
<span className='text-orange-600'>January 31, 2022</span>
</li>
</ul>
</div>
<div>
<p className='text-lg'>Links</p>
<ul className='text-base font-medium mt-2 flex flex-col gap-y-2'>
<Link href="/"><li className='hover:text-orange-500 cursor-pointer duration-200'>Home</li></Link>
<Link href="/cart"><li className='hover:text-orange-500 cursor-pointer duration-200'>Cart</li></Link>
<Link href="/about"><li className='hover:text-orange-500 cursor-pointer duration-200'>about</li></Link>
<li className='hover:text-orange-500 cursor-pointer duration-200'>NewsLetter</li>
<li className='hover:text-orange-500 cursor-pointer duration-200'>Contact</li>
</ul>
</div>
<div>
<p className='text-lg mb-2'>Pay us with your trusted services</p>
<Image src={payment} alt="payment banner image" className="w-full h-10 object-cover"/>
</div>
    </Container>
      
    </div>
  )
}

export default Footer
