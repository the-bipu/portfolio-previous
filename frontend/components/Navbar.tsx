'use client';
import Image from 'next/image'
import { useState } from 'react';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div> 
        {/* Add fixed here for making the navbar available for every page */}
        <motion.div 
          key="content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className='flex flex-row justify-evenly items-center w-[80vw] h-[70px] bg-[#ffffff70] rounded-[50px] shadow-md'
        >

              <div className="logo w-[35px] h-[35px] lg:hidden block">
                <img src="./Ellipse-5.png" alt="" />
              </div>

              <a href='#main' className="tab-div lg:block hidden">Home</a>
              <a href='#about' className='tab-div lg:block hidden'>About</a>
              <a href='#work' className='tab-div lg:block hidden'>Work</a>
              <a href='#skills' className='tab-div lg:block hidden'>Skills</a>
              <a href='#testimonial' className='tab-div lg:block hidden'>Testimonial</a>
              <a href='#contact' className='tab-div lg:block hidden'>Contact</a>

              <div className="w-[35px] h-[35px] flex items-center justify-center bg-blue-900 rounded-[50%] text-white text-[20px] cursor-pointer lg:hidden">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
              </div>
        </motion.div>

        <div className='app__navbar-menu absolute z-20 block lg:hidden left-0 top-0 h-[100vh] w-[50%]'>
          { toggle && (
              <motion.div
                whileInView={{ x: [-200, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut'}}
                className='bg-[#ffffffb5] w-[50vw] h-[100vh] p-24 flex flex-col items-start justify-center gap-4'
              >
                <HiX onClick={() => setToggle(false)} />
                <a href='#main' className="tab-div">Home</a>
                <a href='#about' className='tab-div'>About</a>
                <a href='#work' className='tab-div'>Work</a>
                <a href='#skills' className='tab-div'>Skills</a>
                <a href='#testimonial' className='tab-div'>Testimonial</a>
                <a href='#contact' className='tab-div'>Contact</a>
              </motion.div>
          )}
        </div>
    </div>
  )
}