import "css/models.css"
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, OrbitControls, PivotControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Journal from 'components/Journal.jsx'
import Duck from 'components/Duck.jsx'
import Fox from 'components/Fox.jsx'
import Penguine from 'components/Penguine.jsx'

export default function Models() {
  const ref = useRef(null)
  const model1 = useRef(null)
  const model2 = useRef(null)
  const model3 = useRef(null)
  const model4 = useRef(null)

  
  return (
    <div ref={ref} className="container">
      <div className="text">
        <div ref={model1} className="view scale journal"  />
        <div ref={model2} className="view scale duck"  />
        <div ref={model3} className="view scale fox"  />
        <div ref={model4} className="view scale penguine"  />
      </div>
        
      <Canvas eventSource={ref} className="canvas" dpr={ [1, 1.5] } >

        <View track={model1}>
          <ambientLight intensity={1} />
          <Journal scale={1} rotation={[Math.PI/2, 0, 0]} position={[0, 0, 0]}/>
          <OrbitControls makeDefault/>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </View>

        <View track={model2}>
          <Common color={"red"}/>
          <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2}>
            <Duck scale={1} rotation={[-2*Math.PI, -1*Math.PI/2, 0]} position={[0, 0, 0]}/>
          </PivotControls>
          <OrbitControls makeDefault/>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </View>

        <View track={model3}>
          <Common color={"blue"}/>
          <Fox scale={.03} rotation={[-2*Math.PI, 0.4*Math.PI/2, 0]} position={[0, -1, 0]}/>
          <OrbitControls makeDefault/>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </View>

        <View track={model4}>
          <Common color={"green"}/>
          <Penguine scale={.12} rotation={[-2*Math.PI, 1*Math.PI/4, 0]} position={[0, -1, 0]}/>
          <OrbitControls makeDefault/>
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
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
    </>
  )
}