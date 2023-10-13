import { useInView } from 'react-intersection-observer'
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import Contact from 'sections/Contact.jsx';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import 'css/contact.css';
const DisableRender = () => useFrame(() => null, 1000)
// Set a background color when the canvas is created
const created = ({gl}) => {
  // gl.setClearColor('#ff0000', 1)
}

export default function Finale(){
    const { ref, inView } = useInView()
    
    return <section ref={ref} className="section contact">
    <h1 className="">Contact Me</h1>
    <Canvas
      dpr={ [1, 2] } 
      onCreated={ created }
      camera={{
        fov: 45,
        near: 0.1,
        far: 10,
        position: [ -3, 1.5, 4 ]
      }}
      >
  {!inView && <DisableRender />}
  <AdaptiveDpr pixelated />
  <AdaptiveEvents />
  <Contact />
</Canvas>
</section>

}