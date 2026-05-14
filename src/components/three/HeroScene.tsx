import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'
import GlowSphere from './GlowSphere'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 70 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.04} color="#1a1a3e" />
        <ParticleField />
        <GlowSphere />
      </Suspense>
    </Canvas>
  )
}
