import Image from 'next/image'

import Main from '@/components/Main'
import About from '@/components/About'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className='w-[100%] h-[auto] p-0'>
      <Main />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  )
}
