import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { Stars } from "./components/Stars";
import { HeaderTextName } from "./components/HeaderTextName";
import "./App.css";
//camera={{ position: [0, 0, .2] }}
export const App = () => {
  return (
    <Canvas className="canvas"  camera={{ position: [0,-2, 0,10] }} >
      <Stars />
      <HeaderTextName />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={1.5}
        maxPolarAngle={1.57}
        minAzimuthAngle={-Math.PI / 5}
        maxAzimuthAngle={Math.PI / 5}
      />
      <gridHelper/>
      <Stats />
      
    </Canvas>
  );
};
