import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Journal(props) {
    const journal = useGLTF(process.env.PUBLIC_URL + '/journal-full.glb')
    const journalAnimations = useAnimations(journal.animations, journal.scene)
    const { viewport } = useThree()

    const handleClick = () => {
        const action = journalAnimations.actions.Animation;
        
        if (action) {
          action.reset().play();
        }
      };

    return  <primitive object={journal.scene} 
            // scale={props.scale}
            scale={(viewport.width / 5) }
            rotation={props.rotation}
            position={props.position}

            
            onClick={(e) => {
              e.stopPropagation();
              handleClick(); 
              console.log('Journal clicked')}}

            onPointerEnter={(e) => { 
              document.body.style.cursor = 'pointer'; 
              e.stopPropagation()}}

            onPointerLeave={(e) => { 
              document.body.style.cursor = 'default'; 
              e.stopPropagation()}}
    />;
}