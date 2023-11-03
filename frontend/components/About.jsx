'use client';

import Image from 'next/image'

import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn, fadeIn } from '../utils/motion';

export default function About() {
  return (
    <div id='about' className='w-[100%] lg:h-[745px] h-[auto] flex flex-col items-center bg-[#ffffff] p-10'>
        <Navbar />

        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className='color-[#fff] text-[30px] py-8'
        >
          I know that <span className='color-[#0009D5]'>Good Design</span> Means <span className='color-[#0009D5]'>Good Business</span>
        </motion.div>
        <div className=''>
            
        </div>
    </div>
  )
}