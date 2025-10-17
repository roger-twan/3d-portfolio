import { useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'

const Controls = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state) => {
    const { x, y } = mouse
    const targetX = (x * 2.5 - state.camera.position.x) * 0.05
    const targetY = (y * 2.5 - state.camera.position.y) * 0.05
    state.camera.position.x = Math.min(targetX, 0.05)
    state.camera.position.y = Math.min(targetY, 0.05)
  })

  return <></>
}

export default Controls
