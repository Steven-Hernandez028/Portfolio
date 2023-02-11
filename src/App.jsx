import { Canvas } from "@react-three/fiber";
import { Stats, PresentationControls, Html, useProgress } from "@react-three/drei";
import { Stars } from "./components/background/Stars";
import { Lights } from "./components/ilumination/Lights";
import { Home } from "./scenes/home";

import "./App.css";
import { Suspense } from "react";

export const App = () => {

  function Loader(){
    const { progress } = useProgress();
   
    return (<Html center>{progress} & loaded  </Html>)
  }


  return (
    <Canvas
      className="canvas"
      flat
      dpr={[1, 2]}
      linear
      camera={{ fov: 15, position: [0, 0, 6] }}
    >
      <Suspense fallback={<Loader/>}>
        <Lights />

        <PresentationControls
          snap
          global
          zoom={1}
          polar={[-0.2, 0.2]}
          azimuth={[-0.2, 0.2]}
        >
        <Home />
        </PresentationControls>

        <Stars />

        {/* <gridHelper />
        <Stats /> */}
      </Suspense>
    </Canvas>
  );
};
