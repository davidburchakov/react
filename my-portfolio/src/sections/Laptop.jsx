import 'css/contact.css';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useMemo } from 'react';
import * as THREE from 'three'


export default function Contact(){
    
    const laptopRef = useRef()
    const groupRef = useRef()
    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta
    })




    return <>
            {/* position-y={ 1 } */} 
            <group ref={ groupRef }>
                <mesh ref={ laptopRef } scale={3} rotation-y={15}>
                    <boxGeometry/>
                    <meshNormalMaterial />
                </mesh>
            </group>
    </>
}