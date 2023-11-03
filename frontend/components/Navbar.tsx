import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
        <div className='flex flex-row justify-center items-center gap-24 w-[80vw] h-[70px] bg-[#ffffff70] rounded-[50px] shadow-md'>
            <a href='#main' className="tab-div">Home</a>
            <a href='#about' className='tab-div'>About</a>
            <a href='#work' className='tab-div'>Work</a>
            <a href='#skills' className='tab-div'>Skills</a>
            <a href='#testimonial' className='tab-div'>Testimonial</a>
            <a href='#contact' className='tab-div'>Contact</a>
        </div>
    </div>
  )
}