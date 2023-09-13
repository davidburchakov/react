import "css/books.css"
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PivotControls, PerspectiveCamera, Environment } from '@react-three/drei'
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
        <div ref={book1} className="view scale journal"  />
        <div ref={book2} className="view scale dostoyevsky"  />
        <div ref={book3} className="view scale tolstoy"  />
        <div ref={book4} className="view scale nietzsche"  />
      </div>
        
      <Canvas eventSource={ref} className="canvas">

        <View track={book1}>
          <Common color={"pink"}/>
          <Journal scale={1.2}/>
          <OrbitControls makeDefault/>
        </View>

        <View track={book2}>
          <ambientLight intensity={1} />
          <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2}>
              <Dostoyevsky  scale={1.5}/>
          </PivotControls>
        </View>

        <View track={book3}>
          <ambientLight intensity={1} />
          <Tolstoy scale={1.5}/>
        </View>

        <View track={book4}>
          <ambientLight intensity={1} />
          <Nietzsche  scale={1.5}/>
        </View>

        <Preload all />
      </Canvas>
    </div>
  )
}


const Common = ({ color }) => {
  return (
    <>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    </>
  )
}