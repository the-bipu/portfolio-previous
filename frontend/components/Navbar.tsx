'use client';
import Image from 'next/image'
import { useState } from 'react';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { navVariants, fadeIn } from '../utils/motion';

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

              <a href='#home' className="tab-div lg:block hidden jolly-lodger">The-Bipu</a>
              <a href='#home' className="tab-div lg:block hidden">Home</a>
              <a href='#about' className='tab-div lg:block hidden'>About</a>
              <a href='#work' className='tab-div lg:block hidden'>Work</a>
              <a href='#skills' className='tab-div lg:block hidden'>Skills</a>
              <a href='#contact' className='tab-div lg:block hidden'>Contact</a>

              <div className="w-[35px] h-[35px] flex items-center justify-center bg-blue-900 rounded-[50%] text-white text-[20px] cursor-pointer lg:hidden">
                <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
              </div>
        </motion.div>
        
        { toggle && (
          <div className='absolute lg:hidden h-[auto] w-[50%]'>
            <motion.div
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.85, ease: 'easeOut'}}
              className='flex flex-col gap-5 justify-evenly items-center w-[80vw] h-[auto] bg-[#ffffff] rounded-[50px] shadow-md p-5'
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