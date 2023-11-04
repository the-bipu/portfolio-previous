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
    <div id='skills' className='w-[100%] lg:h-[748px] h-[auto] flex flex-col items-center bg-[#ffffff] p-10'>
        <Navbar />

        <motion.div
          className='color-[#fff] text-[30px] py-8'
        >
          I know that <span className='text-[#0009D5]'>Good Design</span> Means <span className='text-[#0009D5]'>Good Business</span>
        </motion.div>

        <div className='lg:w-[80%] w-[100%] mt-[3rem] flex lg:flex-row flex-col'>
        <motion.div className='flex-1 flex flex-wrap justify-center items-center lg:mr-[5rem] mr[0]'>
            {skills?.map((skill) => (
              <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{ duration: 0.5 }}
                className='flex flex-col text-center m-[1rem] transition-normal app__flex'
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

        {/* <div className='app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>

                <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                    <React.Fragment key={work.name}>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>

                      <Tooltip
                        className="skills-tooltip"
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                      >
                          {work.desc}
                      </Tooltip>

                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}

      </div>

    </div>
  )
}

// .app__skills-exp {
//     flex: 1;
//     display: flex;
//     justify-content: flex-start;
//     align-items: flex-start;
//     flex-direction: column;

//     @media screen and (max-width: 900px) {
//         margin-top: 2rem;
//     }
// }

// .app__skills-exp-item {
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: flex-start;
//     margin: 1rem 0;
// }

// .app__skills-exp-works {
//     flex: 1;

//     .app__skills-exp-work {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         align-items: flex-start;
//         margin-bottom: 1rem;
//         cursor: pointer;

//         h4 {
//             font-weight: 500;
//         }

//         p {
//             font-weight: 400;
//             margin-top: 5px;
//             color: var(--gray-color);
//         }
//     }
// }

// .app__skills-exp-year {
//     margin-right: 3rem;

//     p {
//         font-weight: 800;
//         color: var(--secondary-color);
//     }

//     @media screen and (max-width: 450px) {
//         margin-right: 1rem;
//     }
// }