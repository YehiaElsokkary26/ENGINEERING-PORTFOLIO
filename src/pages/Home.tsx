import PageWrapper from '@/components/layout/PageWrapper'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Extracurricular from '@/components/sections/Extracurricular'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  )
}
