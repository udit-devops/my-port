import React from 'react'
import { useEffect,useState,Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,useGLTF } from '@react-three/drei'



      

import CanvasLoader from '../Loader'
// import { pointLight } from 'three'
const ComputersCanvas = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return(
 <mesh castShadow receiveShadow>
 <hemisphereLight intensity={0.15} groundColor="black" />
 <pointLight intensity={1}/>
 <spotLight position={[-20,50,10]} angle={0.12} penumbra={ 1} intensity={1}  castShadow shadow-mapSize={1244}/>
 <directionalLight
  position={[0, 10, 10]}
  intensity={1.5}
  castShadow
/>
 
< primitive object={computer.scene}
 scale ={isMobile ? 0.7 :0.70}
 position={isMobile ? [0,-3,-2.2] :[0,-3.25,-6.2]}
 rotation={[-0.01,-0.2,-0.1]}
 
/>
 </mesh>

  )
}

const Computers= () =>{
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  
return(
<Canvas 
 frameloop="demand"
 shadows
 camera={{position:[20 , 3, 5], fov:25}}
 gl={{preserveDrawingBuffer:true}}
 >
<Suspense fallback={<CanvasLoader/>}>
 <OrbitControls
   enableZoom={false}
   maxPolarAngle={Math.PI/2}
   minPolarAngle={Math.PI/2}
 />
 <ComputersCanvas isMobile={isMobile}/>
</Suspense>
 {/* <preload all/> */}
 </Canvas>
)
}
export default Computers