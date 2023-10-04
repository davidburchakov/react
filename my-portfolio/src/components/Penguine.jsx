
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Penguine(props) {
    const journal = useGLTF(process.env.PUBLIC_URL + '/Peng.glb')
    const pengRef = useRef(null);

    // Use the useFrame hook to update rotation and position on each frame
    useFrame(({ clock }) => {
      // Rotate the fox model around the Y-axis
      pengRef.current.rotation.y += 0.01; 
      
      // Float the fox model in the X-axis (up and down)
      pengRef.current.position.y += Math.sin(clock.elapsedTime) * 0.005;
    });
    return  <primitive ref={pengRef} object={journal.scene}
    scale={props.scale}
    position={props.position}
    rotation={props.rotation}
    />;
}