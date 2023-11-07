'use client'
import React from 'react'

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id='contact' className='w-[100%] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        
        <motion.div
          className='color-[#fff] text-[30px] text-[#000] pt-8 pb-2 text-center'
        >
            Contact <span className='text-[#0009D5]'> Me</span>
        </motion.div>

        <div className='flex flex-row gap-10 mt-[2rem]'>
            <motion.div className='flex items-center justify-center bg-red-300 px-10 py-3'>
                Email
            </motion.div>
            <motion.div className='flex items-center justify-center bg-red-300 px-10 py-3'>
                Contact
            </motion.div>
        </div>
    </div>
  )
}
