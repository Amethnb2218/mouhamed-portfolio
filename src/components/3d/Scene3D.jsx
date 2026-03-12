import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ParticleField from './ParticleField'
import FloatingGeometry from './FloatingGeometry'

/**
 * Scene3D — Scène Three.js en arrière-plan
 * Contient les particules + la géométrie flottante
 */
export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#7c3aed" />
          <ParticleField count={1500} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  )
}
