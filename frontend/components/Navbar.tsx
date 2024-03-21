'use client';
import { useState } from 'react';

import { HiMenuAlt4 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { navVariants, fadeIn } from '../utils/motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className='flex flex-row justify-evenly items-center w-[80vw] h-[70px] bg-[#ffffff70] rounded-[50px] shadow-md'
      >
        <div className="logo w-[35px] h-[35px] lg:hidden block">
          <img src="./Ellipse-5.png" alt="" />
        </div>

        <div className="tab-div lg:block hidden jolly-lodger">The-Bipu</div>
        <ScrollLink to="home" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
          <p>Home</p>
        </ScrollLink>
        <ScrollLink to="about" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
          <p>About</p>
        </ScrollLink>
        <ScrollLink to="work" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
          <p>Work</p>
        </ScrollLink>
        <ScrollLink to="skills" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
          <p>Skills</p>
        </ScrollLink>
        <ScrollLink to="contact" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
          <p>Contact</p>
        </ScrollLink>

        <div className="w-[35px] h-[35px] flex items-center justify-center bg-blue-900 rounded-[50%] text-white text-[20px] cursor-pointer lg:hidden">
          <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        </div>
      </motion.div>

      {toggle && (
        <div className='sticky lg:hidden h-[auto] w-[50%]'>
          <motion.div
            // variants={navVariants}
            // initial="hidden"
            // whileInView="show"
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='flex flex-col gap-5 justify-evenly items-center w-[80vw] h-[auto] bg-[#fff] rounded-[50px] shadow-md p-5 z-10'
          >
            <a href='#main' className="tab-div">Home</a>
            <a href='#about' className='tab-div'>About</a>
            <a href='#work' className='tab-div'>Work</a>
            <a href='#skills' className='tab-div'>Skills</a>
            <a href='#education' className='tab-div'>Education</a>
            <a href='#contact' className='tab-div'>Contact</a>
          </motion.div>
        </div>
      )}

    </div>
  )
}