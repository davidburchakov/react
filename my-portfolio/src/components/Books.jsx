import "css/books.css"
import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, useGLTF, useAnimations } from '@react-three/drei'
import Journal from 'components/Journal.jsx'
import Dostoyevsky from 'components/Dostoyevsky.jsx'
import Tolstoy from 'components/Tolstoy.jsx'
import Nietzsche from 'components/Nietzsche.jsx'

export default function Books() {
  const ref = useRef(null)
  
  return (
    <div ref={ref} className="books-container">
        
      <Canvas eventSource={ref} className="canvas" dpr={[0,1]}
      style={{ width: '100vw', height: '100vh' }}
      >
        <ambientLight intensity={1} />
        <Journal position={[0,2,0]} scale={.5}/>
        <Dostoyevsky position={[1,0,0]} scale={.5}/>
        <Tolstoy  position={[-2,2,0]} scale={.5}/>
        <Nietzsche  position={[3,2,1]} scale={.5}/>
        <Preload all />
     
      </Canvas>

    </div>
  )
}
