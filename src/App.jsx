import { Canvas } from "@react-three/fiber";
import { Stats, PresentationControls } from "@react-three/drei";
import { Stars } from "./components/background/Stars";
import { Lights } from "./components/ilumination/Lights";
import { Home } from "./scenes/home";


import "./App.css";



export const App = () => {


  return (
    <Canvas
      className="canvas"
      flat
      dpr={[1, 2]}
     linear camera={{ fov: 15, position: [0, 0, 6] }}
    >
      <Lights/>
  

      <PresentationControls
        snap
        global
        zoom={1}
        polar={[-.2, .2]}
        azimuth={[-.2,.2]}
      >
        <Home/>
        
      </PresentationControls>

      <Stars  />

      <gridHelper />
      <Stats /> 

    </Canvas>
  );
};
