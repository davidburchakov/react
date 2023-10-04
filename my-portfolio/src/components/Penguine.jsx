
import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Penguine(props) {
    const journal = useGLTF(process.env.PUBLIC_URL + '/Peng.glb')
    
    return  <primitive object={journal.scene} rotation={[Math.PI / 2, 0, 0]}
    position={props.position}
    scale={props.scale}
    />;
}