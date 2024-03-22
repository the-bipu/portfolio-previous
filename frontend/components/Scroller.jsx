import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Scroller = () => {
  return (
    <div className='absolute md:flex hidden flex-col gap-4 md:right-10 right-0 top-[50%]'>
      <ScrollLink to="home" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div className='w-2 h-2 rounded-full bg-gray-400 shadow-inner'></div>
      </ScrollLink>
      <ScrollLink to="about" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div className='w-2 h-2 rounded-full bg-gray-400 shadow-inner'></div>
      </ScrollLink>
      <ScrollLink to="Work" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div className='w-2 h-2 rounded-full bg-gray-400 shadow-inner'></div>
      </ScrollLink>
      <ScrollLink to="Skills" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div className='w-2 h-2 rounded-full bg-gray-400 shadow-inner'></div>
      </ScrollLink>
      <ScrollLink to="contact" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div className='w-2 h-2 rounded-full bg-gray-400 shadow-inner'></div>
      </ScrollLink>
    </div>
  )
}

export default Scroller