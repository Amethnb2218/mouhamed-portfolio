import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * ParticleField — Champ de particules 3D interactif
 * Sphère de particules qui tourne lentement et réagit au scroll
 */
export default function ParticleField({ count = 2000 }) {
  const mesh = useRef()
  const light = useRef()

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Distribution sphérique
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 3 + Math.random() * 2

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      // Couleurs violet / cyan / or
      const t = Math.random()
      if (t < 0.4) { col[i * 3] = 0.48; col[i * 3 + 1] = 0.23; col[i * 3 + 2] = 0.93 }
      else if (t < 0.7) { col[i * 3] = 0.02; col[i * 3 + 1] = 0.71; col[i * 3 + 2] = 0.83 }
      else { col[i * 3] = 0.66; col[i * 3 + 1] = 0.33; col[i * 3 + 2] = 0.97 }

      siz[i] = Math.random() * 0.04 + 0.01
    }

    return [pos, col, siz]
  }, [count])

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.05
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
