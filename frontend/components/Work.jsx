'use client';
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

import { urlFor, client } from '../app/client';

export default function Work() {
  const [activeFilter, setAtiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  

  const handleWorkFilter = (item) => {
    setAtiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);

      if(item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <div id='work' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>

        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className='color-[#fff] text-[30px] py-8'
        >
          My Work <span className='text-[#0009D5]'>Samples</span>
        </motion.div>
        
        <div className='flex flex-row justify-start items-center flex-wrap mt-[1rem] mb-[1rem]'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <motion.div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`py-[0.5rem] px-[1rem] rounded-[0.5rem] bg-[#fff] hover:bg-[#313bac] text-[#000] hover:text-[#fff] font-bold cursor-pointer m-[0.5rem] app__flex p-text transition-normal ${activeFilter === item ? 'bg-[#313bac] color-[#fff]' : ''}`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='flex flex-wrap items-center justify-center'
        >
          {filterWork.map((work, index) => (
            <motion.div
              whileInView={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, type: 'spring', stiffness:"120"}}
              className='w-[270px] flex-col m-[2rem] p-[1rem] rounded-[0.5rem] bg-[#fff] text-[#000] cursor-pointer transition-normal app__flex hover:normal-box-shadow' key={index}
            >
              <div className='w-[100%] h-[230px] relative app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} className='w-[100%] h-[100%] rounded-[0.5rem] object-cover' />

                <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='absolute w-[100%] h-[100%] top-0 bottom-0 right-0 left-0 bg-[#00000080] rounded-[0.5rem] opacity-0 transition-normal app__flex'
                >
                  <a href={work.projectLink} target="_blank" rel='norefer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{ duration: 0.25}}
                      className='app__flex w-[50px] h-[50px] rounded-[50%] bg-[#00000080] text-[#fff] m-[1rem] font-bold cursor-pointer transition-normal'
                    >
                      <AiFillEye className='w-[50%] h-[50%] text-white' />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel='norefer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{ duration: 0.25}}
                      className='app__flex w-[50px] h-[50px] rounded-[50%] bg-[#00000080] text-[#fff] m-[1rem] font-bold cursor-pointer transition-normal'
                    >
                      <AiFillGithub className='w-[50%] h-[50%] text-white' />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='p-[0.5rem] w-[100%] relative flex-col app__flex'>
                <h4 className='bold-text mt-[1rem] leading-6 sm:text-[0.9rem]'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className='absolute py-[0.5rem] px-[1rem] rounded-[10px] top-[-25px] bg-[#fff] app__flex'>
                  <p className='t-text'>{work.tags[0]}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}