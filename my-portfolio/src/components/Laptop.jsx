import { useGLTF, Html } from '@react-three/drei';


export default function Laptop(params){
            // load locally
            // const computer = useGLTF(process.env.PUBLIC_URL + '/mac-compressed.glb');
            // load remotely
            // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
            // console.log(computer);
            const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + '/mac-compressed.glb');

             // Determine the user's browser
            const isChrome = /Chrome/.test(navigator.userAgent);
            const isFirefox = /Firefox/.test(navigator.userAgent);

            // Define different positions for different browsers
            const chromePosition = [0, 0.75, -1.35];
            const firefoxPosition = [-0.005, 1, -1.35];
            const defaultPosition = [-0.005, 0.7, -1.35]; // Fallback for other browsers

            const chromeSize = .99;
            const firefixSize = .97;
            const defaultSize = 1;

            const position = isChrome ? chromePosition : isFirefox ? firefoxPosition : defaultPosition;
            const size = isChrome ? chromeSize : isFirefox ? firefixSize : defaultSize;

        return <group position={[0.1, -0.7, 0.3]} 
            // scale={1.05}
            scale={params.scale}
            >
            <Html 
              transform 
              wrapperClass='htmlScreen' 
              distanceFactor={ 1.17 }
              position={position}
              rotation-x={ -0.275}
              scale={size}
              >
              <iframe src="https://davidburchakov.github.io/" frameborder="0"/>
            </Html>


        <group name="Macbook"  scale={.1}>
            
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          name="Circle001_3"
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          name="Circle001_4"
          geometry={nodes.Circle001_4.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          name="Circle001_5"
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          name="Circle001_6"
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />

        <group name="Bottom" position={[0, -0.5, 0]} scale={5.8}>
          <mesh
            name="Circle006"
            geometry={nodes.Circle006.geometry}
            material={materials["Frame.001"]}
          />
        </group>

        <group name="Keyboard" position={[-11.8, -0.2, -8.3]} scale={5.8}>
          <mesh
            name="Circle"
            geometry={nodes.Circle.geometry}
            material={materials["Keyboard.001"]}
          />
          <mesh
            name="Circle_1"
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            name="Circle_2"
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        
        <group
          name="Top"
          position={[0, -0.5, -10.4]}
          rotation={[1.3, 0, 0]}
          scale={5.8}
        >
          <mesh
            name="Circle002_2"
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            name="Circle002_4"
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
        </group>

      </group>
      </group>

}