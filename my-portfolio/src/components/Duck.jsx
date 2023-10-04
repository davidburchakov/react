import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Duck(props) {
    const journal = useGLTF(process.env.PUBLIC_URL + '/Duck.glb')
    
    return  <primitive object={journal.scene}
    scale={props.scale}
    rotation={props.rotation}
    position={props.position}
    />;
}