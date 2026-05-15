import { useState, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Fewer particles on mobile/low-dpr screens — decided at mount, never changes
const isMobile = () =>
  typeof window !== 'undefined' &&
  (window.innerWidth < 768 || window.devicePixelRatio < 1.5)

// Repulsion is only computed for particles within this world-unit radius of
// the projected cursor. Keeps the per-frame cost O(N_close) instead of O(N).
const REPULSE_RADIUS = 3.0
const REPULSE_STRENGTH = 2.2

export default function ParticleField() {
  const COUNT = isMobile() ? 150 : 200
  const { mouse, viewport } = useThree()

  const [geometry] = useState(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 26
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2
    }
    const attr = new THREE.BufferAttribute(positions, 3)
    attr.setUsage(THREE.DynamicDrawUsage)
    geo.setAttribute('position', attr)
    return geo
  })

  // Snapshot of initial positions — never mutated
  const origin = useMemo(() => {
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    return new Float32Array(attr.array as Float32Array)
  }, [geometry])

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame(({ clock }) => {
    const t   = clock.elapsedTime
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    const arr  = attr.array as Float32Array

    // Map NDC mouse → world-space at z≈0 plane
    const mxW = (mouse.x * viewport.width)  * 0.5
    const myW = (mouse.y * viewport.height) * 0.5

    for (let i = 0; i < COUNT; i++) {
      const ox = origin[i * 3]
      const oy = origin[i * 3 + 1]
      const oz = origin[i * 3 + 2]

      // Slow organic drift
      const tx = ox + Math.sin(t * 0.14 + i * 0.11) * 0.45
      const ty = oy + Math.cos(t * 0.11 + i * 0.09) * 0.35

      // --- Distance-threshold repulsion ---
      // Only pay the sqrt cost when clearly within the repulsion radius
      const dx = arr[i * 3]     - mxW
      const dy = arr[i * 3 + 1] - myW

      // Cheap squared-distance pre-check to avoid sqrt for distant particles
      const d2 = dx * dx + dy * dy
      let fx = tx
      let fy = ty

      if (d2 < REPULSE_RADIUS * REPULSE_RADIUS && d2 > 0.0001) {
        const dist     = Math.sqrt(d2)
        const falloff  = (REPULSE_RADIUS - dist) / REPULSE_RADIUS
        const push     = falloff * falloff * REPULSE_STRENGTH
        fx += (dx / dist) * push
        fy += (dy / dist) * push
      }

      arr[i * 3]     += (fx - arr[i * 3])     * 0.035
      arr[i * 3 + 1] += (fy - arr[i * 3 + 1]) * 0.035
      arr[i * 3 + 2] += (oz - arr[i * 3 + 2]) * 0.035
    }

    attr.needsUpdate = true
  })

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.038}
        color="#8aaeff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}
