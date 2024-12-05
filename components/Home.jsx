'use client';

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';
import Scroller from './Scroller';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';

export default function Home() {
  const { activeTab } = useContext(UserContext);

  return (
    <div id='home' className='relative w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        <Navbar />

        {activeTab === 'home' && <Scroller />}
        
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-10 items-center color-[#000] py-12 lg:px-16 px-0'>
          <img src="./Ellipse-3.png" alt="" className='w-[320px] h-[auto] z-0 absolute top-[170px] lg:left-[240px] left-15 lg:block hidden' />
          <img src="./Ellipse-4.png" alt="" className='w-[auto] h-[auto] z-0 absolute -bottom-[45px] left-30 lg:block hidden' />
          <img src="./Ellipse-5.png" alt="" className='w-[auto] h-[auto] z-0 absolute top-[125px] right-10 lg:block hidden' />
          <img src="./Ellipse-6.png" alt="" className='w-[auto] h-[auto] z-0 absolute top-[165px] left-0 lg:block hidden' />

          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden" whileInView="show"
            className="normal-shadow md:text-[23px] text-[16px] lg:w-[55%] w-[100%] h-[auto] text-center lg:px-24 px-0 z-10"
          >
            Hello 🍃 <br />
            I’m The-Bipu 🤖 and <br />
            I’m a Full-Stack Web Developer. 🖥️ <br /><br />

            An adept full-stack web developer, specializing in React and Next.js, crafts dynamic and user-friendly web applications with seamless front-end and robust back-end expertise. 
          </motion.div>
          
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden" whileInView="show"
            className="profile lg:w-[50%] w-[100%] h-[auto] flex items-center justify-center"
          >
            <img src="../profile.png" alt="" className='lg:w-[500px] w-[90%] h-[auto]' />
          </motion.div>
        </div>
    </div>
  )
}