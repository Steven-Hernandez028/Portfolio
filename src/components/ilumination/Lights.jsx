import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

export const Lights = () => {

      
    const ref = useRef(null);

    useFrame((state)=>{
      ref.current.position.x = THREE.MathUtils.lerp(-1, 4,.3)
    })



  return (
    <group  ref={ref}>

      <ambientLight    intensity={1} />
      <pointLight  ref={ref} position={[1,1, 4]} intensity={10} />
      <pointLight   position={[0, 1, 4]} intensity={10} />

      <pointLight   position={[-1.6, 1, 4]} intensity={3} />
      <pointLight    position={[.9, -.3, 4]} intensity={5} />
      <pointLight    position={[-.4, -.3, 4]} intensity={2} />


    </group>


  )
}
