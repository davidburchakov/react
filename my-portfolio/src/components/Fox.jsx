import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Fox(props) {

    const journal = useGLTF(process.env.PUBLIC_URL + '/Fox.glb')
    const foxRef = useRef(null);

    // Use the useFrame hook to update rotation and position on each frame
    useFrame(({ clock }) => {
      // Rotate the fox model around the Y-axis
      foxRef.current.rotation.y += 0.02; 
      
      // Float the fox model in the X-axis (up and down)
      foxRef.current.position.y += Math.sin(clock.elapsedTime) * 0.005;
    });
    
    return  <primitive ref={foxRef} object={journal.scene}
    position={props.position}
    scale={props.scale}
    rotation={props.rotation}
    />;
}