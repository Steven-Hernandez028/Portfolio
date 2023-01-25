import { useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend, useFrame } from "@react-three/fiber";
import RubikLight from "../../assets/Rubik_light.json";
import * as THREE from "three";
extend({ TextGeometry });

export const SubHeader = () => {
  const font = new FontLoader().parse(RubikLight);

  const meshHello = useRef(null);
  const meshWeb = useRef(null);
  useFrame((state) => {
    meshHello.current.position.y = THREE.MathUtils.lerp(
      meshHello.current.position.y + 0.009,
      Math.sin(state.clock.elapsedTime / 3) / 30 + state.mouse.y / 200,
      0.02
    );

    meshWeb.current.position.y  = THREE.MathUtils.lerp(
      meshWeb.current.position.y + (-0.004),
      Math.sin(state.clock.elapsedTime / 3) /30  + (state.mouse.y / 200),0.02
    )
  });


  return (
    <>
    <mesh ref={meshHello} position={[-1, 3, 1]}>
      <textGeometry args={["Hello i'm", { font, size: 0.1, height: 0.04 }]} />

      <meshStandardMaterial metalness={1} roughness={0.06} color={"#9491F5"} />
    </mesh>


    <mesh  ref = {meshWeb} position={[-.2,2,1]}>
    <textGeometry args={["I'm a web developer", { font, size: 0.1, height: 0.04 }]} />

      <meshStandardMaterial metalness={1} roughness={0.02} color={"#9491F5"} />
    </mesh>
    </>

  );
};
