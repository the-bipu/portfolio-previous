import Image from 'next/image'

import Main from '@/components/Main'
import About from '@/components/About'

export default function Home() {
  return (
    <main className='w-[100%] h-[auto] p-0'>
      <Main />
      <About />
    </main>
  )
}
