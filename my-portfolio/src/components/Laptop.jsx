import { useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';

export default function Laptop(){
            // load locally
            const computer = useGLTF(process.env.PUBLIC_URL + '/mac-compressed.glb');
            // load remotely
            // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
            // console.log(computer);
    
        return <primitive position={[0.1, -1, 0.3]} object={ computer.scene } >
            iframe
            <Html 
            transform 
            wrapperClass='htmlScreen' 
            distanceFactor={ 1.17 }
            position={[0, 1.56, -1.4]}
            rotation-x={ -0.256 }
            >
            <iframe src="https://davidburchakov.github.io/" frameborder="0"/>
            </Html>
        </primitive>
}