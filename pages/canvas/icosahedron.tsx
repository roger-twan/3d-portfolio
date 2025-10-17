import { useFrame, Vector3 } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface IcosahedronProps {
  position?: Vector3 | null
  onClick?: (position: [number, number]) => void
}

const DEFAULT_OPACITY = 0.85
const TARGET_SCALE = 0.045
const SCALE_RANGE = 0.005
const THRESHOLD = 0.0005
const DEFAULT_POSITION = new THREE.Vector3(0, -0.3, 0.3)

const Icosahedron = (props: IcosahedronProps) => {
  const meshRef = useRef(null)
  const [scale, setScale] = useState(0.045)
  const [threshold, setThreshold] = useState(THRESHOLD)
  const [targetPosition, setTargetPosition] = useState<Vector3>()
  const [targetOpacity, setTargetOpacity] = useState(DEFAULT_OPACITY)
  const [clickable, setClickable] = useState(false)

  useEffect(() => {
    if (props.position) {
      setTargetPosition(props.position)
      setTargetOpacity(DEFAULT_OPACITY)
      setClickable(DEFAULT_POSITION.equals(props.position as THREE.Vector3))
    } else if (props.position === null && targetPosition) {
      setTargetOpacity(0)
      setClickable(false)
    }
  }, [props.position])

  useFrame(() => {
    let mesh: THREE.Mesh | null = meshRef.current
    if (mesh) {
      mesh = mesh as THREE.Mesh
      const material = mesh.material as THREE.MeshStandardMaterial
      mesh.rotation.x += 0.05
      mesh.rotation.y += 0.05

      if (targetPosition !== undefined && targetPosition !== mesh.position) {
        mesh.position.lerp(targetPosition as THREE.Vector3, 0.35)
      }

      if (targetOpacity !== material.opacity) {
        material.opacity = THREE.MathUtils.lerp(
          material.opacity,
          targetOpacity,
          0.3
        )
        material.needsUpdate = true
      }
    }

    if (scale <= TARGET_SCALE - SCALE_RANGE) {
      setThreshold(THRESHOLD)
    } else if (scale >= TARGET_SCALE + SCALE_RANGE) {
      setThreshold(-THRESHOLD)
    }

    setScale(scale + threshold)
  })

  const setMouseStyle = (isPointer: boolean) => {
    if (!clickable) return
    document.body.style.cursor = isPointer ? 'pointer' : 'default'
  }

  const onMeshClick = (e: any) => {
    if (!clickable) return
    document.body.style.cursor = 'default'
    props.onClick?.([e.clientX, e.clientY])
  }

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      onPointerEnter={() => setMouseStyle(true)}
      onPointerLeave={() => setMouseStyle(false)}
      onClick={onMeshClick}
    >
      <icosahedronGeometry />
      <meshStandardMaterial color={0x00ff00} transparent />
    </mesh>
  )
}

export default Icosahedron
