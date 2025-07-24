import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import {  useScroll, useTexture } from '@react-three/drei'
import * as THREE from "three";
import { easing } from 'maath';

const Canva = () => {
  const scrol = useScroll()
  let tex =  useTexture([
    '/jordan.png',
    '/jordan-2.png',
    '/jordan-3.png',
    '/jordan-4.png',
  ])
  const segments = 4
  const anglePerSegment = (Math.PI * 2) 
  let gap = 0.05
  const segmentAngle = (anglePerSegment - gap * segments) / segments
  // let meshRefs  = useRef([])
  // useFrame((state,delta) =>{
  //   meshRefs.current.forEach((mesh) => {
  //     if (mesh) mesh.rotation.y += delta * 0.5 
  //   })
  // })
const ref = useRef()
  const scroll = useScroll()
  useEffect(() => {
  if (ref.current) {
    const offsetTop = ref.current.offsetTop;
    console.log("Offset Top:", offsetTop);
  }
}, []);
  useFrame((state, delta) => {
    const scrollY = window.scrollY
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const scrollProgress = scrollY / totalHeight

    

  //   const target = -scroll.offset * Math.PI * 2
  // ref.current.rotation.y = easing.damp(ref.current.rotation.y, target, 0.2, delta)

    const maxRotation = Math.PI * 2
    if (ref.current) {
      ref.current.rotation.y = -scrollProgress * maxRotation
    }

    // Optional: camera interaction
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    )
    state.camera.lookAt(0, 0, 0)
  })

  return (
    
    <>
    <group ref={ref}>

     {tex.map((tex,i) => (
       <mesh 
        // ref={(el) => (meshRefs.current[i] = el)}
       rotation={[0.4, -0.6 ,0.1]}
       key={i}
       >
            <cylinderGeometry args={[ 2, 2, 2, 60, 10, true, i * (segmentAngle + gap), segmentAngle ]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
          </mesh>
          
     ))}
    </group>
    </>
  )
}

export default Canva
