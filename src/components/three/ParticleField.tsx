import { useState, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 200

export default function ParticleField() {
  const { mouse, viewport } = useThree()

  const [geometry] = useState(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2
    }
    const attr = new THREE.BufferAttribute(positions, 3)
    attr.setUsage(THREE.DynamicDrawUsage)
    geo.setAttribute('position', attr)
    return geo
  })

  const originalPositions = useMemo(() => {
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    return new Float32Array(attr.array as Float32Array)
  }, [geometry])

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    const arr = attr.array as Float32Array

    const mxWorld = (mouse.x * viewport.width) / 2
    const myWorld = (mouse.y * viewport.height) / 2

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ox = originalPositions[i * 3]
      const oy = originalPositions[i * 3 + 1]
      const oz = originalPositions[i * 3 + 2]

      const drift = {
        x: Math.sin(t * 0.14 + i * 0.11) * 0.45,
        y: Math.cos(t * 0.11 + i * 0.09) * 0.35,
      }

      const targetX = ox + drift.x
      const targetY = oy + drift.y

      const dx = arr[i * 3] - mxWorld
      const dy = arr[i * 3 + 1] - myWorld
      const dist = Math.sqrt(dx * dx + dy * dy)

      let finalX = targetX
      let finalY = targetY

      if (dist < 3 && dist > 0.01) {
        const strength = ((3 - dist) / 3) * 2
        finalX += (dx / dist) * strength
        finalY += (dy / dist) * strength
      }

      arr[i * 3] += (finalX - arr[i * 3]) * 0.035
      arr[i * 3 + 1] += (finalY - arr[i * 3 + 1]) * 0.035
      arr[i * 3 + 2] += (oz - arr[i * 3 + 2]) * 0.035
    }

    attr.needsUpdate = true
  })

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#8aaeff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}
