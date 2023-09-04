import 'css/laptop.css';
import { useState, useTransition } from 'react'
import { useControls } from 'leva'
import { useFrame, extend } from '@react-three/fiber';
import { Html, PresentationControls, PivotControls, Text, Float, ContactShadows } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

extend({Text});
export default function Contact(){
    
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    const laptopRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        // groupRef.current.rotation.y += delta
    })


    return <>
            {/* <color args={ ['#10203d'] } attach="background"/> */}
            {/* <directionalLight target-position={[0, 0, 0]}></directionalLight> */}
            <ambientLight intensity={1}/>
            {/* <pointLight intensity={5} position={[1, 4, 3]} /> */}
            <group ref={ groupRef }>

            <PresentationControls global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-0.5, 0.5]}
              config={ {mass: 2, tension: 400} }
              span={{ mass: 4, tension: 400}}>
              <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                  />
                    <primitive position={[0.1, -1, 0.3]} object={ computer.scene } >
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
                    >David Burchakov</Text>
              </Float>



            </PresentationControls>

            <ContactShadows
                position-y={ -1.4 }
                opacity={ 0.4 }
                scale={ 5 }
                blur={ 2.4 } />

                {/* <mesh ref={ laptopRef } scale={3} rotation-y={15}>
                    <boxGeometry/>
                    <meshNormalMaterial />
                    <Html   
                        wrapperClass='text3D' 
                        center
                        distanceFactor={ 3 }
                        >
                        Apple Laptop
                    </Html>
                </mesh> */}

            </group>

    </>
}


function Env() {
    const [preset, setPreset] = useState('sunset')
    // You can use the "inTransition" boolean to react to the loading in-between state,
    // For instance by showing a message
    const [inTransition, startTransition] = useTransition()
    const { blur } = useControls({
      blur: { value: 0.65, min: 0, max: 1 },
      preset: {
        value: preset,
        options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
        // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
        // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
        // That way we can hang onto the current environment until the new one has finished loading ...
        onChange: (value) => startTransition(() => setPreset(value))
      }
    })
    return <Environment preset={preset} background blur={blur} />
  }