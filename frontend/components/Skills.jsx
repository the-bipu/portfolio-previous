'use client';
import React, { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image'

import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { urlFor, client } from '../app/client';

export default function Skills() {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
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
        <Navbar />

        <motion.div
          className='color-[#fff] text-[30px] pt-8 pb-2 text-center'
        >
            <span className='text-[#000]'>Skills</span>
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

        <div className='flex-1 flex justify-center items-center flex-col md:mt-[2rem]'>
            {experiences.map((experience, index) => (
                <div className="w-[100%] h-[auto] flex flex-col justify-center items-center">

                    {experience.works.map((work, workIndex) => (
                        <React.Fragment key={work.name}>

                        <motion.div 
                            whileInView={{ x: [20, 0], opacity: [0, 1] }}
                            transition={{ duration: 1, type: 'spring', stiffness:"120" }}
                            className='w-[600px] h-[auto] flex justify-center items-center flex-row gap-8'
                            data-tip
                            data-for={work.name}
                            key={work.name}
                        >
                            {workIndex % 2 === 0 && (
                                <motion.div 
                                    className='w-[230px] rounded-[1rem] bg-[#ffffff] flex items-end justify-end flex-col p-10 new-shadow'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <h4 className='bold-text'>{work.name}</h4>
                                    <p className='p-text'>{work.company}</p>
                                </motion.div>
                            )}

                            {workIndex % 2 !== 0 && (
                                <motion.div 
                                    className='w-[230px] bg-[#D9D9D9]'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    
                                </motion.div>
                            )}

                            <motion.div 
                                key={experience.year} 
                                className='w-[75px] h-[75px] rounded-[50%] mt-4 bg-[#cacaca] app__flex new-shadow'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {experience.year}
                            </motion.div>

                            {workIndex % 2 === 0 && (
                                <motion.div 
                                    className='w-[230px] bg-[#D9D9D9]'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    
                                </motion.div>
                            )}

                            {workIndex % 2 !== 0 && (
                                <motion.div 
                                    className='w-[230px] rounded-[1rem] bg-[#ffffff] flex items-start justify-start flex-col p-10 new-shadow'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <h4 className='bold-text'>{work.name}</h4>
                                    <p className='p-text'>{work.company}</p>
                                </motion.div>
                            )}

                        </motion.div>

                    </React.Fragment>
                    ))}

                </div>
            ))}
        </div>

    </div>
  )
}
