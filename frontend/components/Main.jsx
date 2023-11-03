import Image from 'next/image'

import Navbar from '@/components/Navbar'

export default function Main() {
  return (
    <div id='main' className='w-[100%] lg:h-[745px] h-[auto] flex flex-col items-center bg-[#D9D9D9] p-10'>
        <Navbar />
        
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-10 items-center color-[#000] py-12 lg:px-16 px-0'>
          <img src="./Ellipse-3.png" alt="" className='w-[320px] h-[auto] z-0 absolute top-[170px] lg:left-[240px] left-15 lg:block hidden' />
          <img src="./Ellipse-4.png" alt="" className='w-[auto] h-[auto] z-0 absolute bottom-0 left-30 lg:block hidden' />
          <img src="./Ellipse-5.png" alt="" className='w-[auto] h-[auto] z-0 absolute top-[125px] right-10 lg:block hidden' />
          <img src="./Ellipse-6.png" alt="" className='w-[auto] h-[auto] z-0 absolute top-[165px] left-0 lg:block hidden' />

          <div className="normal-shadow text-[23px] lg:w-[55%] w-[100%] h-[auto] text-center lg:px-24 px-10 z-10">
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