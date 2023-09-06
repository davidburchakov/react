import 'css/laptop.css';
import { useFrame, extend } from '@react-three/fiber';
import { Html, PresentationControls, Text, Float } from '@react-three/drei';
import { Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, softShadows } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

extend({Text});
export default function Contact(){
    
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


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
            {/* <Environment preset='sunset'/> */}

            {/* Global Lights */}
            <ambientLight intensity={1}/>
            {/* <directionalLight target-position={[0, 0, 0]}></directionalLight> */}
            {/* <pointLight intensity={5} position={[1, 4, 3]} /> */}
            
            <group ref={ groupRef }>

            <PresentationControls
              global            
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-0.5, 0.5]}
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
                  <primitive position={[0.1, -1, 0.3]} object={ computer.scene } >
                    {/* iframe */}
                    <Html 
                      transform 
                      wrapperClass='htmlScreen' 
                      distanceFactor={ 1.17 }
                      position={[0, 1.56, -1.4]}
                      rotation-x={ -0.256 }
                      >
                      <iframe src="https://davidburchakov.github.io/" frameborder="0"/>
                    </Html>
                  </primitive>
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

