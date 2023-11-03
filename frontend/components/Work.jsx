'use client';

import Image from 'next/image'

import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn, fadeIn } from '../utils/motion';

export default function Work() {
  return (
    <div id='work' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        <Navbar />

        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className='color-[#fff] text-[30px] py-8'
        >
          My Work <span className='text-[#0009D5]'>Samples</span>
        </motion.div>
        <div className='color-[#000]'>
            Cards
        </div>
    </div>
  )
}