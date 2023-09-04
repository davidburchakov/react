import 'css/contact.css';
import { Canvas } from '@react-three/fiber';
export default function Contact(){
    return(
        <section className="section contact">
            <h1 className="">Contact Me</h1>
            <Canvas>
                <mesh>
                    <torusKnotGeometry/>
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </section>
    );
}