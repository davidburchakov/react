import "css/books.css"
import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, useGLTF, useAnimations } from '@react-three/drei'
import Journal from 'components/Journal.jsx'

export default function Books() {
  const ref = useRef(null)
  const box = useRef(null)
  const box2 = useRef(null)

  
  return (
    <div ref={ref} className="container">
      <div className="text">
        <div ref={box} className="view scale" style={{ height: 300 }} />
        <div ref={box2} className="view scale" style={{ height: 300 }} />
      </div>
        
      <Canvas eventSource={ref} className="canvas">
        
        <View track={box}>
        <ambientLight intensity={1} />
        <Journal />

        </View>
        <View track={box2}>
            <ambientLight intensity={1} />
            <mesh position={[1,1,1]}>
                <boxGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>
        </View>
        <Preload all />
      </Canvas>
    </div>
  )
}
