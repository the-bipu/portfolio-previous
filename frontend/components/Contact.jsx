'use client'
import React from 'react'

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id='contact' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        
        <motion.div
          className='color-[#fff] text-[30px] text-[#000] pt-8 pb-2 text-center'
        >
            Contact <span className='text-[#0009D5]'> Me</span>
        </motion.div>

        <div className='flex lg:flex-row flex-col lg:gap-10 gap-3 mt-[2rem]'>
            <motion.div className='flex items-center justify-center bg-red-300 px-10 py-[0.6rem] rounded-lg'>
                Email@gmail.com
            </motion.div>
            <motion.div className='flex items-center justify-center bg-red-300 px-10 py-[0.6rem] rounded-lg'>
                +91 12345 67890
            </motion.div>
        </div>

        <div className='w-[100%] h-[400px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed sunt consequuntur dolore, quas corporis ipsa perferendis mollitia. Molestiae libero accusantium, ipsum perspiciatis eligendi repellat sequi modi voluptatibus tempore dolores?
        </div>
    </div>
  )
}
