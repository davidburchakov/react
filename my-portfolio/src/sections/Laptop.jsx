import 'css/laptop.css';
import { useState, useTransition } from 'react'
import { useControls } from 'leva'
import { useFrame, extend } from '@react-three/fiber';
import { Html, OrbitControls, PivotControls, Text, Float } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

extend({Text});
export default function Contact(){
    
    <Env preset="sunset"/>
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    const laptopRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta
    })

    const customControls = {
        enableDamping: true,
        // mouseButtons: {
        //   LEFT: 1,    // Use 2 for middle mouse button
        //   MIDDLE: 2,  // Use 1 for left mouse button
        //   RIGHT: THREE.MOUSE.ROTATE,   // Use 0 for right mouse button
        // },
      };


    return <>
            {/* <color args={ ['#10203d'] } attach="background"/> */}
            <OrbitControls {...customControls}/>

            <PivotControls>
            <group ref={ groupRef }>

                <primitive object={ computer.scene } />

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
            <Float
                speed={5}
                floatIntensity={ 2 }
                >
                <Text position={[0,2.5,0]}>I Love</Text>
            </Float>
            </PivotControls>
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