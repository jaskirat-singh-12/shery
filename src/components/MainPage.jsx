

import  { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Design from './Canva'


const MainPage = () => {
  return (
    <div className='h-[200vh] w-full bg-emerald-800'>

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
