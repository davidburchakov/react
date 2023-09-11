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
  const book1 = useRef(null)
  const book2 = useRef(null)
  const book3 = useRef(null)
  const book4 = useRef(null)

  
  return (
    <div ref={ref} className="container">
      <div className="text">
        <div ref={book1} className="view scale" style={{ height: 300 }} />
        <div ref={book2} className="view scale" style={{ height: 300 }} />
        <div ref={book3} className="view scale" style={{ height: 300 }} />
        <div ref={book4} className="view scale" style={{ height: 300 }} />
      </div>
        
      <Canvas eventSource={ref} className="canvas">
        
        <View track={book1}>
          <ambientLight intensity={1} />
          <Journal />
        </View>

        <View track={book2}>
            <ambientLight intensity={1} />
            <Dostoyevsky  />
        </View>

        <View track={book3}>
            <ambientLight intensity={1} />
            <Tolstoy  />
        </View>

        <View track={book4}>
            <ambientLight intensity={1} />
            <Nietzsche  />
        </View>

        <Preload all />
      </Canvas>
    </div>
  )
}
