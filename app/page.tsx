import Image from 'next/image'

import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  )
}
