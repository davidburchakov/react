import 'css/laptop.css';
import { useFrame, extend } from '@react-three/fiber';
import { PresentationControls, Text, Float } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import Laptop from 'components/Laptop.jsx'
import { useThree } from '@react-three/fiber'

extend({Text});
export default function Contact(){
    
    const groupRef = useRef()
    useFrame((state, delta) => {
        // Rotate the laptop
        // groupRef.current.rotation.y += delta
    })

    const { viewport } = useThree()
    // Default scale
    let scale = 1.05; 
    let textScale = 1;
    let textPosition = [2.5, 0.75, 1];
    let textRotation = -1.25;
    let iframePosition = [0, 1, -1.35];
    if (viewport.width <= 3) {
      // smaller viewports
      iframePosition = [0, 1.2, -1.35];
      scale=1;
      // textScale = .25;
      // textPosition = [0, .8, 0];
      // textRotation = -.1;
    }

    return <>
            {/* Change color of the parent div */}
            <color args={ ['#282c34'] } attach="background"/>

            {/* Predefined Preset Environment */}
            {/* <Environment background preset='apartment'/> */}

            {/* Global Lights */}
            <ambientLight intensity={1}/>
            {/* <directionalLight target-position={[0, 0, 0]}></directionalLight> */}
            {/* <pointLight intensity={5} position={[1, 1, 1]} /> */}
            
            <group ref={ groupRef }>

            {/* <OrbitControls/> */}

            <PresentationControls
              global            
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-.5, .2]}
              config={ {mass: 2, tension: 400} }
              span={{ mass: 4, tension: 400}}>

              <Float rotationIntensity={0.4}>
                {/* Local Light */}
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 30 }
                    color={ '#ff6900'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                  />
                  {/* Laptop Primitive */}
                  <Suspense fallback={<Loading />}>
                    <Laptop scale={scale} iframePosition={iframePosition}/>
                  </Suspense>
              </Float>

              {/* Text */}
              <Float
                speed={0.5}
                floatIntensity={ 1 }
                >
                <Text 
                      font={process.env.PUBLIC_URL +"/bangers.woff"}
                      fontSize={textScale}
                      position={(textPosition)}
                      rotation-y={textRotation}
                      maxWidth={2}
                      textAlign='center'
                      >
                        David Burchakov
                </Text>
              </Float>
            </PresentationControls>

            {/* Shadow */}
            <ContactShadows
                position-y={ -1.4 }
                opacity={ 0.4 }
                scale={ 5 }
                blur={ 2.4 } 
            />

            </group>

    </>
}

function Loading() {
  return <Text>Loading...</Text>;
}
// useGLTF.preload(process.env.PUBLIC_URL + '/mac-compressed.glb');