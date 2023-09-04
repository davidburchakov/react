import 'css/contact.css';
import { useFrame } from '@react-three/fiber';
import { Html, OrbitControls, PivotControls } from '@react-three/drei';
import { useRef } from 'react';
import { useMemo } from 'react';
import * as THREE from 'three'


export default function Contact(){
    
    const laptopRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta
    })

    const customControls = {
        enableDamping: true,
        mouseButtons: {
          LEFT: 1,    // Use 2 for middle mouse button
          MIDDLE: 2,  // Use 1 for left mouse button
          RIGHT: THREE.MOUSE.ROTATE,   // Use 0 for right mouse button
        },
      };


    return <>
            <OrbitControls {...customControls}/>

            <PivotControls>

            </PivotControls>

            {/* position-y={ 1 } */} 
            <group ref={ groupRef }>
                <mesh ref={ laptopRef } scale={3} rotation-y={15}>
                    <boxGeometry/>
                    <meshNormalMaterial />
                    <Html>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt optio aut omnis ullam quod reiciendis. Sequi sed nostrum fugiat, veritatis odit corrupti ducimus exercitationem ratione amet officiis animi autem.
                    </Html>
                </mesh>
            </group>
    </>
}