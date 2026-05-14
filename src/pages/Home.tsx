import PageWrapper from '@/components/layout/PageWrapper'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  )
}
