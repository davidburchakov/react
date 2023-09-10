import "css/books.css"
import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, useGLTF } from '@react-three/drei'

export default function Books() {
  const ref = useRef(null)
  const box = useRef(null)
  const box2 = useRef(null)
  const journal = useGLTF(process.env.PUBLIC_URL + '/journal.glb')
  return (
    <div ref={ref} className="container">
      <div className="text">
        <div ref={box} className="view scale" style={{ height: 300 }} />
        <div ref={box2} className="view scale" style={{ height: 300 }} />
      </div>
      <Canvas eventSource={ref} className="canvas">
        
        <View track={box}>
        <ambientLight intensity={1} />
        <primitive object={journal.scene} scale={3} rotation={[Math.PI / 2, 0, 0]}/>
          <mesh rotation={[Math.PI/2, Math.PI/2, Math.PI/2]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
          <OrbitControls makeDefault />
        </View>
        <View track={box2}>
            <ambientLight intensity={1} />
            <mesh position={[1,1,1]}>
                <boxGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>
          <OrbitControls makeDefault />
        </View>
        <Preload all />
      </Canvas>
    </div>
  )
}
