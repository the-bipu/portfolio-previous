import Image from 'next/image'

import Navbar from '@/components/Navbar'

export default function Main() {
  return (
    <div id='main' className='dimension flex flex-col items-center bg-[#D9D9D9] p-10'>
        <Navbar />
        
        <div className='flex lg:flex-row flex-col items-center color-[#000] py-12 lg:px-16 px-0'>
          <img src="./Ellipse-3.png" alt="" className='w-[350px] h-[auto] z-0 absolute top-40 lg:left-40 left-15' />
          <img src="./Ellipse-4.png" alt="" className='w-[auto] h-[auto] z-0 absolute bottom-10 left-40 sm:hidden' />

          <div className="text-[23px] lg:w-[55%] w-[100%] h-[auto] text-center lg:px-24 px-10 z-10">
            Hello 🍃 <br />
            I’m The-Bipu 🤖 and <br />
            I’m a Full-Stack Web Developer. 🖥️ <br /><br />

            An adept full-stack web developer, specializing in React and Next.js, crafts dynamic and user-friendly web applications with seamless front-end and robust back-end expertise. 
          </div>
          <div className="profile lg:w-[50%] w-[100%] h-[auto] flex items-center justify-center">
            <img src="../profile.png" alt="" className='lg:w-[500px] w-[90%] h-[auto]' />
          </div>
        </div>
    </div>
  )
}