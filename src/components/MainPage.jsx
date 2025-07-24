// import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import React, { useRef } from "react";
// import { easing } from 'maath'

// import Design from "./Canva";
// import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

// const MainPage = () => {
//    const ref = useRef()
//     const scroll = useScroll()
//     useFrame((state, delta) => {
//       if (ref.current) {
//       ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
//     }

//     state.events.update() // Raycasts every frame
//     easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta)
//     state.camera.lookAt(0, 0, 0)
  
//     })
//   return (
//     <Canvas flat camera={{ fov: 60 }}>
//     <ScrollControls pages={4} infinite>
//       <ambientLight />
//       <Design />
//       <EffectComposer>
//         <Bloom
//         mipmapBlur
//           intensity={5.0}
//           luminanceThreshold={0}
//           luminanceSmoothing={0}
//         />
        
//       </EffectComposer>
//       </ScrollControls>
//     </Canvas>
//   );
// };


// export default MainPage;

import  { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Design from './Canva'
import { easing } from 'maath'
import * as THREE from 'three'


const MainPage = () => {
  return (
    <div className='h-[200vh] w-full'>

    <Canvas 
    flat
    camera={{ fov: 60 }}>
      
        <ambientLight intensity={1} />


        <Suspense fallback={null}>

        <Design />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={5.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
        </Suspense>
    </Canvas>
    </div>
  )
}

export default MainPage


// import React, { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { ScrollControls, useScroll } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { easing } from 'maath'

// const SceneContent = () => {
//   const ref = useRef()
//   const scroll = useScroll()

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
//     }
//     state.events.update()
//     easing.damp3(
//       state.camera.position,
//       [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
//       0.3,
//       delta
//     )
//     state.camera.lookAt(0, 0, 0)
//   })

//   return (
//     <group ref={ref}>
//       <ambientLight />
//       <mesh>
//         <boxGeometry />
//         <meshStandardMaterial color="skyblue" />
//       </mesh>

//       <EffectComposer>
//         <Bloom
//           mipmapBlur
//           intensity={5.0}
//           luminanceThreshold={0}
//           luminanceSmoothing={0}
//         />
//       </EffectComposer>
//     </group>
//   )
// }

// const MainPage = () => {
//   return (
//     <Canvas flat camera={{ fov: 60 }}>
//       <ScrollControls pages={4} infinite>
//         <SceneContent />
//       </ScrollControls>
//     </Canvas>
//   )
// }

// export default MainPage
