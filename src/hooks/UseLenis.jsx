// hooks/UseLenis.js
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const UseLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // lower is smoother but slower
      direction: 'vertical',
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}

export default UseLenis
