'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { urlFor, client } from '../app/client';

export default function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <div id='about' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#ffffff] p-10'>
        <Navbar />

        <motion.div
          className='color-[#fff] text-[30px] py-8'
        >
          I know that <span className='text-[#0009D5]'>Good Design</span> Means <span className='text-[#0009D5]'>Good Business</span>
        </motion.div>

        <div className='color-[#000] flex justify-center items-start flex-wrap mt-[2rem]'>
          {abouts.map((about, index) => (
              <motion.div
                whileInView={{opacity: 1}}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.5, type: 'tween'}}
                className='w-[190px] flex flex-col justify-start items-start m-[2rem]'
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} className='w-[100%] h-[170px] rounded-[15px] object-cover' />
                <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
              </motion.div>
            ))}
        </div>
    </div>
  )
}
