import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, useState } from "react";


export const Stars = () => {
    const ref = useRef();
    const refP = useRef();
    const [sphere] = useState(() =>
      random.inSphere(new Float32Array(3000), { radius: 3.2 })
    );
    const [sphereWhite] = useState(()=>
    random.inSphere(new Float32Array(1500), {radius: 2.3} )
    )
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 100;
      ref.current.rotation.y -= delta / 59;
      refP.current.rotation.x += delta / 100;
    });
   
  
    return (
      <group  position={[0, 0, 0]} rotation={[0, 0, Math.PI, 4]}>
        <Points
          ref={ ref}
          positions={sphere}
          stride={3}
          frustumCulled={true}

        >
          <PointMaterial
            transparent
            color="#f9318f"
            threshold={1}
            size={0.009}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>


         <Points
            ref={refP}
          positions={sphereWhite}
          stride={3}
          frustumCulled={true}

        >
          <PointMaterial
            transparent
            color="#ffffff"
            threshold={81}
            size={0.009}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points> 
      </group>



    );
  };
  