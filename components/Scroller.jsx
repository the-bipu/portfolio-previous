import { UserContext } from '@/context/userContext';
import React, { useContext, useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Scroller = () => {
  const { activeTab, setActiveTab } = useContext(UserContext);

  return (
    <div className='absolute md:flex hidden flex-col gap-4 md:right-10 right-0 top-[50%]'>
      <ScrollLink href='/' alt='/' to="home" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div onClick={() => setActiveTab('home')} className={`w-2 h-2 rounded-full bg-gray-400 ${activeTab === 'home' && ' bg-gray-700'} shadow-inner`}></div>
      </ScrollLink>
      <ScrollLink href='/' alt='/' to="about" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div onClick={() => setActiveTab('about')} className={`w-2 h-2 rounded-full bg-gray-400 ${activeTab === 'about' && ' bg-gray-700'} shadow-inner`}></div>
      </ScrollLink>
      <ScrollLink href='/' alt='/' to="work" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div onClick={() => setActiveTab('work')} className={`w-2 h-2 rounded-full bg-gray-400 ${activeTab === 'work' && ' bg-gray-700'} shadow-inner`}></div>
      </ScrollLink>
      <ScrollLink href='/' alt='/' to="skills" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div onClick={() => setActiveTab('skills')} className={`w-2 h-2 rounded-full bg-gray-400 ${activeTab === 'skills' && ' bg-gray-700'} shadow-inner`}></div>
      </ScrollLink>
      <ScrollLink href='/' alt='/' to="contact" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
        <div onClick={() => setActiveTab('contact')} className={`w-2 h-2 rounded-full bg-gray-400 ${activeTab === 'contact' && ' bg-gray-700'} shadow-inner`}></div>
      </ScrollLink>
    </div>
  )
}

export default Scroller