import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Navbar from '@/components/layout/Navbar'
import CustomCursor from '@/components/layout/CustomCursor'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

const isFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

function AppShell() {
  useSmoothScroll()
  return (
    <>
      {isFinePointer && <CustomCursor />}
      <Navbar />
      <AnimatedRoutes />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
