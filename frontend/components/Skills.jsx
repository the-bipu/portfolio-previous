'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';
import { urlFor, client } from '../app/client';

export default function Skills() {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = `*[_type == "experiences"] | order(title asc)`;
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query)
        .then((data) => {
            setExperiences(data);
        })

        client.fetch(skillsQuery)
        .then((data) => {
            setSkills(data);
        })
    }, [])

  return (
    <div id='skills' className='w-[100%] h-[auto] flex flex-col items-center bg-[#ffffff] p-10'>

        <motion.div
          className='color-[#fff] text-[30px] text-[#000] pt-8 pb-2 text-center'
        >
            My Skills &<span className='text-[#0009D5]'> Experiences</span>
        </motion.div>

        <div className='lg:w-[80%] w-[100%] mt-[1rem] flex lg:flex-row flex-col'>
            <motion.div className='flex-1 flex flex-wrap justify-center items-center'>
                {skills?.map((skill) => (
                <motion.div
                    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, type: 'spring', stiffness:"120"}}
                    className='flex flex-col text-center m-[1rem] transition-normal app__flex hover:normal-box-shadow cursor-pointer'
                    key={skill.name}
                >
                    <div className='app__flex lg:w-[90px] w-[70px] lg:h-[90px] h-[70px] rounded-[50%] bg-[#fff]' style={{ backgroundColor: skill.bgColor }}>
                        <img src={urlFor(skill.icon)} alt={skill.name} className='w-[50%] h-[50%]' />
                    </div>

                    <p className='p-text font-normal mt-[0.5rem] normal-white-shadow'>
                        {skill.name}
                    </p>
                </motion.div>
                ))}
            </motion.div>
        </div>

        <motion.div
          className='color-[#fff] text-[30px] pt-8 pb-2 text-center'
        >
            <span className='text-[#000]'>Experiences</span>
        </motion.div>

        {/* <div className='flex-1 flex justify-center items-center flex-col md:mt-[2rem]'>
            {experiences.map((experience, index) => (
                <div className="w-[100%] h-[auto] flex flex-col justify-center items-center">

                    {experience.works.map((work, workIndex) => (
                        <React.Fragment key={work.name}>

                        <motion.div 
                            whileInView={{ x: [20, 0], opacity: [0, 1] }}
                            transition={{ duration: 1, type: 'spring', stiffness:"120" }}
                            className='w-[600px] h-[auto] flex justify-center items-center flex-col gap-8'
                            data-tip
                            data-for={work.name}
                            key={work.name}
                        >

                            <motion.div 
                                key={experience.year} 
                                className='w-[230px] rounded-[1rem] bg-[#ffffff] flex items-start justify-start flex-col p-10 new-shadow'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <h5 className='bold-text'>{experience.year}</h5>
                                <h4 className='bold-text'>{work.name}</h4>
                                <p className='p-text'>{work.company}</p>
                            </motion.div>

                        </motion.div>

                    </React.Fragment>
                    ))}

                </div>
            ))}
        </div> */}

<div className='flex-1 flex justify-center items-center flex-col md:mt-[2rem] gap-5 mt-[2rem]'>
          {experiences.map((experience) => (
            <motion.div
              whileInView={{ x: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, type: 'spring', stiffness:"120" }}
              className='w-[100%] h-[auto] flex flex-col p-10 new-shadow cursor-pointer'
              key={experience.year}
            >
                <div className=''>
                  <p className='text-[1.4rem] font-bold'>{experience.year}</p>
                </div>

                <motion.div className='flex flex-col gap-5'>
                {experience.works.map((work) => (
                  // <>
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className='text-[1.1rem] font-semibold'>Worked as {work.name}</h4>
                        <p className='text-[1rem]'>at {work.company}</p>
                        <p className='text-[1rem]'>{work.desc}</p>
                      </motion.div>

                  </React.Fragment>
                  // </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

    </div>
  )
}

// .p-text {
//     font-size: 0.8rem;
//     text-align: left;
//     color: var(--gray-color);
//     line-height: 1.5;
//   }
  
//   .bold-text {
//     font-size: 1rem;
//     font-weight: 800;
//     color: var(--black-color);
//     text-align: left;
//   }