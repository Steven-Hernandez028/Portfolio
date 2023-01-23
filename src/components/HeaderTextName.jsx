import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Rubik from "../assets/Rubik.json";
import { Vector3 } from "three";

extend({ TextGeometry });
export const HeaderTextName = () => {
  const font = new FontLoader().parse(Rubik);

  return (
    <mesh position={new Vector3(0, 0, -0)} >
      <ambientLight intensity={0.5} />
      <pointLight color="white" intensity={1} position={[10, 10, 10]} />
      <textGeometry args={["Steven", {font, size: .2, height: .2 }]} />
      <meshPhysicalMaterial attach="material" color={"white"} />
    </mesh>
  );
};
