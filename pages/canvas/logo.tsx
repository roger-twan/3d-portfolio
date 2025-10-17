import { Center, Extrude } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

interface LogoProps {
  onLogoReady?: () => void
}

const getRandomColor = () => {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

const Logo = (props: LogoProps) => {
  const svgData = useLoader(SVGLoader, '/logo.svg')
  const [currentColor, setCurrentColor] = useState(getRandomColor())
  const [targetColor, setTargetColor] = useState(getRandomColor())
  const [scale, setScale] = useState(0)
  const [position, setPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(-0, 0, -10)
  )
  const [logoReady, setLogoReady] = useState(false)

  const shapes = useMemo(() => {
    return svgData.paths.map((p) => p.toShapes(true))
  }, [svgData])

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetColor(getRandomColor())
    }, 1000 * 2)
    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    currentColor.lerp(targetColor, 0.04)
    setCurrentColor(currentColor.clone())
    position.lerp(new THREE.Vector3(0, 0, -3), 0.4)
    setPosition(position.clone())
    setScale((prev) => Math.min(prev + 0.001, 0.004))

    if (!logoReady) {
      setLogoReady(true)
      props.onLogoReady?.()
    }
  })

  return (
    <group>
      <spotLight position={[0, -5, -3]} intensity={0.5} color="white" />
      <Center scale={scale} rotation={[Math.PI, 0, 0]} position={position}>
        {shapes.map((shape, index) => (
          <mesh key={index} position={[0, 0, 0]}>
            <Extrude
              args={[
                shape,
                {
                  depth: 100,
                  bevelEnabled: false,
                },
              ]}
            >
              <meshPhongMaterial
                attach="material"
                color={currentColor}
                side={THREE.DoubleSide}
              />
            </Extrude>
          </mesh>
        ))}
      </Center>
    </group>
  )
}

export default Logo
