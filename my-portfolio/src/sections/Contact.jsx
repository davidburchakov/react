import 'css/laptop.css';
import { useFrame, extend } from '@react-three/fiber';
import { Html, PresentationControls, Text, Float } from '@react-three/drei';
import { Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, softShadows } from '@react-three/drei';
import { OrbitControls, PivotControls } from '@react-three/drei'

import { Suspense, useRef } from 'react';
import Laptop from 'components/Laptop.jsx'

extend({Text});
export default function Contact(){
    


    const laptopRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        // Rotate the laptop
        // groupRef.current.rotation.y += delta
    })


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
                  
                    <Laptop/>
                    {/* <PivotControls> */}
                    
                  {/* </PivotControls> */}
                  </Suspense>
              </Float>

              {/* Text */}
              <Float
                speed={0.5}
                floatIntensity={ 1 }
                >
                <Text 
                      // font="./bangers.woff"
                      fontSize={0.5}
                      position={[2.5, 0.75, 1]}
                      rotation-y={-1.25}
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
// Load the model right away, even if it's not in the scene yet
// useGLTF.preload(process.env.PUBLIC_URL + '/mac-compressed.glb');