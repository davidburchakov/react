import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Preload, useGLTF, useAnimations } from '@react-three/drei'

export default function Journal() {
    const journal = useGLTF(process.env.PUBLIC_URL + '/journal.glb')
    console.log(journal);
    return  <primitive object={journal.scene} scale={3} rotation={[Math.PI / 2, 0, 0]}
    onClick={(e) => {e.stopPropagation(); console.log('Journal clicked')}}
    onPointerEnter={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation()}}
    onPointerLeave={(e) => { document.body.style.cursor = 'default'; e.stopPropagation()}}
    />;
}