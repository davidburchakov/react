import { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Journal() {
    const journal = useGLTF(process.env.PUBLIC_URL + '/journal.glb')
    const journalAnimations = useAnimations(journal.animations, journal.scene)
    console.log(journalAnimations.names)
    
    useEffect(() => {
        const action = journalAnimations.actions.Animation;
        action.play();
    }, [])

    return  <primitive object={journal.scene} scale={1} rotation={[Math.PI / 2, 0, 0]}
    onClick={(e) => {e.stopPropagation(); console.log('Journal clicked')}}
    onPointerEnter={(e) => { document.body.style.cursor = 'pointer'; e.stopPropagation()}}
    onPointerLeave={(e) => { document.body.style.cursor = 'default'; e.stopPropagation()}}
    />;
}