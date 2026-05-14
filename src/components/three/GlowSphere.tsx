import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  const [geometry] = useState(() => new THREE.SphereGeometry(1.8, 64, 64))
  const [outerGeometry] = useState(() => new THREE.SphereGeometry(1.8, 32, 32))

  const [material] = useState(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0d1b4b'),
        emissive: new THREE.Color('#4F6EF7'),
        emissiveIntensity: 0.6,
        roughness: 0.15,
        metalness: 0.9,
      })
  )

  const [outerMaterial] = useState(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#4F6EF7'),
        emissive: new THREE.Color('#4F6EF7'),
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.06,
        side: THREE.BackSide,
      })
  )

  useEffect(
    () => () => {
      geometry.dispose()
      outerGeometry.dispose()
      material.dispose()
      outerMaterial.dispose()
    },
    [geometry, outerGeometry, material, outerMaterial]
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.07
      meshRef.current.rotation.x = Math.sin(t * 0.04) * 0.08
      material.emissiveIntensity = 0.5 + Math.sin(t * 1.1) * 0.22
    }
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(t * 0.38) * 2.8
      lightRef.current.position.y = Math.sin(t * 0.28) * 1.8
      lightRef.current.position.z = Math.sin(t * 0.38) * 1.6
      lightRef.current.intensity = 2.8 + Math.sin(t * 0.7) * 0.4
    }
  })

  return (
    <group position={[2.8, -0.3, -2]}>
      <mesh ref={meshRef} geometry={geometry} material={material} />
      <mesh geometry={outerGeometry} material={outerMaterial} scale={1.14} />
      <pointLight
        ref={lightRef}
        color="#4F6EF7"
        intensity={2.8}
        distance={22}
      />
    </group>
  )
}
