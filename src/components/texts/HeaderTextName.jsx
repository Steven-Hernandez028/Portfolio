import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as THREE from "three";
import Rubik from "../../assets/Rubik.json";
extend({ TextGeometry });

export const HeaderTextName = () => {
  const font = new FontLoader().parse(Rubik);
  const mesh = useRef(null);
  useFrame((state) => {
    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      Math.sin(state.clock.elapsedTime / 3) / 30 + state.mouse.y / 200,
      0.02
    );
  });

  return (
    <mesh ref={mesh} position={[-1, 2, 0.5]}>
      <textGeometry args={["Steven", { font, size: 0.4, height: 0.04 }]} />

      <meshStandardMaterial metalness={1} roughness={0.07} />
    </mesh>
  );
};
