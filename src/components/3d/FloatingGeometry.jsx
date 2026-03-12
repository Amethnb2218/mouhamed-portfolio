import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

/**
 * FloatingGeometry — Torus knot wireframe flottant
 * Crée un objet 3D géométrique qui tourne lentement
 */
export default function FloatingGeometry() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime()
      meshRef.current.rotation.x = t * 0.1
      meshRef.current.rotation.y = t * 0.07
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.8, 0.05, 200, 16, 2, 3]} />
      <meshBasicMaterial
        color="#7c3aed"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  )
}
