import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float ,OrbitControls , useTexture, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const BallCanvas = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
  <ambientLight intensity={0.25}/>
  <directionalLight position={[0,0,0.05]}/>
  <mesh castShadow receiveShadow scale={2.75}>
    <icosahedronGeometry args={[1,1]}/>
    <meshStandardMaterial
    color="#ff8eb"
    polygonOffset
    polygonOffsetFactor={-5}
    flatShading
    
    />

   <Decal
    map={decal}
    rotation={[2*Math.PI,0,6.25]}
    flatShading
    position={[0,0,1]}
   />
  </mesh>
    </Float>
  )
}

const Ball =({icon})=>{
  return(
    <Canvas 
 frameloop="demand" gl={{preserveDrawingBuffer:true}}>
<Suspense fallback={<CanvasLoader/>}>
 <OrbitControls enableZoom={false} />
<BallCanvas imgUrl={icon}/>
</Suspense>
 {/* <preload all/> */}
 </Canvas>
  )
}

export default Ball