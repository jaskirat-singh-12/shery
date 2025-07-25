import React, { Suspense, useRef, useEffect, useLayoutEffect, Children } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { div } from "framer-motion/client";
import LightRays from "../Lightning/Background/LightRays";
import gsap from "gsap";

// ✅ Renamed this from ShoeModel to ShoeModelPrimitive
function ShoeModelPrimitive({ 
  modelPath = "/models/jordan.glb", 
  autoRotate = true, 
  rotationSpeed = 0.001,
  scale = 1 
}) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDimension = Math.max(size.x, size.y, size.z);
      const desiredSize = scale;
      const scaleRatio = desiredSize ;
      ref.current.scale.set(scaleRatio, scaleRatio, scaleRatio);

      // Center the model
      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.sub(center);
    }
  }, [scene, scale]);

  useFrame(() => {
    if (ref.current && autoRotate) {
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return <primitive ref={ref} object={scene} position={[0, 0, 0]} />;
}

const gsapEffect = ({Children}) =>{

  const reference = useRef();


useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const t1 = gsap.timeline({ defaults: { ease: "power3.out" } });

    t1.fromTo(
      "#shoe",
      { opacity: 0, y: 50 }, // start faded and pushed down
      { opacity: 1, y: 0, duration: 1.6, delay: 1 } // smooth rise + fade-in
    );
  }, reference);

  return () => ctx.revert(); // cleanup on unmount
}, []);

}

// ✅ Canvas Wrapper Function
export function ShoeModel({ 
  modelPath,
  autoRotate = true,
  rotationSpeed = 0.001,
  scale = 1,
  cameraPosition = [10, 10, 10],
  enableZoom = false,
  enablePan = true,
  enableRotate = true,
  environment = "sunset",
  ambientLightIntensity = 0.5,
  pointLightPosition = [10, 10, 10],
  className = "h-[80vh]",
  style = {
    height: "50vh",
    
  }
}) 
  {
  const reference = useRef(); // Moved here

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({ defaults: { ease: "power3.out" } });

      t1.fromTo(
        "#shoe",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.6, delay: 1 }
      );
    }, reference);

    return () => ctx.revert();
  }, []);

  return (
    
    <div 
    ref={reference}
    className="relative w-full h-screen overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[40vw] h-[65vh] z-10 pointer-events-none">
      
  <LightRays
    raysOrigin="right"
    raysColor="#00ffff"
    raysSpeed={3}
    lightSpread={2}
    rayLength={2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.2}
    className="custom-rays absolute inset-0 z-0"
  />
      
    <div id="shoe" className={className + " absolute inset-0 z-10"} style={style}>
  
      
      <Canvas
        camera={{ position: cameraPosition }}
        style={{ background: "transparent", ...style }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={ambientLightIntensity} />
          <pointLight position={pointLightPosition} />
          <ShoeModelPrimitive 
            modelPath={modelPath}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
            scale={scale}
          />
          <Environment preset={environment} />
          <OrbitControls 
            enableZoom={enableZoom}
            enablePan={enablePan}
            enableRotate={enableRotate}
          />
        </Suspense>
      </Canvas>
      </div>
    </div>
    </div>  
  );
}

useGLTF.preload("/models/air-jordan.glb");

export default ShoeModel;
