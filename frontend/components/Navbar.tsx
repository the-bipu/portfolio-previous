'use client';
import { useContext, useState } from 'react';

import { motion } from 'framer-motion';
import { navVariants, fadeIn } from '../utils/motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { HiMenuAlt4 } from 'react-icons/hi';
import { SiHomeadvisor } from "react-icons/si";
import { BsPersonBoundingBox } from "react-icons/bs";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { SiNextdotjs } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import { UserContext } from '@/context/userContext';

export default function Navbar() {
  const { activeTab, setActiveTab } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>

        <div className='w-[82vw] relative h-auto md:hidden flex items-start justify-start'>
          <div className="tab-div jolly-lodger">The-Bipu</div>
        </div>

        <div className=" fixed top-10 right-10 w-[35px] h-[35px] flex items-center justify-center bg-blue-900 rounded-[50%] text-white text-[20px] cursor-pointer lg:hidden">
          <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        </div>

        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className='md:flex hidden flex-row md:justify-evenly justify-between md:px-0 px-10 items-center w-[80vw] h-[70px] bg-[#ffffff70] rounded-[50px] shadow-md'
        >
          <div className="tab-div lg:block hidden jolly-lodger">The-Bipu</div>
          <ScrollLink href='/' to="home" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
            <p onClick={() => setActiveTab('home')}>Home</p>
          </ScrollLink>
          <ScrollLink href='/' to="about" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
            <p onClick={() => setActiveTab('about')}>About</p>
          </ScrollLink>
          <ScrollLink href='/' to="work" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
            <p onClick={() => setActiveTab('work')}>Work</p>
          </ScrollLink>
          <ScrollLink href='/' to="skills" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
            <p onClick={() => setActiveTab('skills')}>Skills</p>
          </ScrollLink>
          <ScrollLink href='/' to="contact" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div lg:block hidden`}>
            <p onClick={() => setActiveTab('contact')}>Contact</p>
          </ScrollLink>

        </motion.div>

      </div>

      {toggle && (
        <div className='fixed lg:hidden h-full w-full -bottom-96'>
          <motion.div
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='flex flex-col gap-5 justify-evenly items-center w-12 h-[auto] bg-[#9b9b9b8f] rounded-r-lg py-6 z-10'
          >
            <ScrollLink href='/' to="home" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div`}>
              <SiHomeadvisor onClick={() => {setToggle(!toggle); setActiveTab('home')}} className={`text-black transition-all hover:text-[#ffffffc7]`} />
            </ScrollLink>
            <ScrollLink href='/' to="about" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div`}>
              <BsPersonBoundingBox onClick={() => {setToggle(!toggle); setActiveTab('about')}} className={`text-black transition-all hover:text-white`} />
            </ScrollLink>
            <ScrollLink href='/' to="work" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div`}>
              <PiSuitcaseSimpleFill onClick={() => {setToggle(!toggle); setActiveTab('work')}} className={`text-black transition-all hover:text-white`} />
            </ScrollLink>
            <ScrollLink href='/' to="skills" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div`}>
              <SiNextdotjs onClick={() => {setToggle(!toggle); setActiveTab('skills')}} className={`text-black transition-all hover:text-white`} />
            </ScrollLink>
            <ScrollLink href='/' to="contact" spy={true} smooth={true} duration={500} className={`cursor-pointer tab-div`}>
              <MdContacts onClick={() => {setToggle(!toggle); setActiveTab('contact')}} className={`text-black transition-all hover:text-white`} />
            </ScrollLink>
          </motion.div>
        </div>
      )}
    </>
  )
}