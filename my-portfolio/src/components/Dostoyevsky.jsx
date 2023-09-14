import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Dostoyevsky(props) {
    const journal = useGLTF(process.env.PUBLIC_URL + '/Dostoyevsky.glb')
    const journalAnimations = useAnimations(journal.animations, journal.scene)
    console.log(journalAnimations.names)
    

    

    const handleClick = () => {
        const action = journalAnimations.actions.Animation;
        
        if (action) {
          action.reset().play();
        }
      };
    return  <primitive object={journal.scene} rotation={[Math.PI / 2, 0, 0]}
    onClick={(e) => {e.stopPropagation(); handleClick(); console.log('Journal clicked')}}
    onPointerEnter={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation()}}
    onPointerLeave={(e) => { document.body.style.cursor = 'default'; e.stopPropagation()}}
    position={props.position}
    scale={props.scale}
    />;
}