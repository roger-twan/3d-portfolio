import { Text3D, Center, RoundedBox } from '@react-three/drei'
import GradientShaderMaterial from '@/components/gradient-shader-material'
import { ThreeEvent, useFrame, useThree, Vector3 } from '@react-three/fiber'
import * as THREE from 'three'
import { forwardRef, useImperativeHandle, useState } from 'react'
import useIsMobile from '@/components/use-is-mobile'

interface Menu {
  value: string
  description: string
  position: (opts: {
    width: number
    height: number
    isMobile: boolean
  }) => Vector3
  offset: Vector3
  link: string
}

interface MenuListProps {
  onMenuHover?: (position: Vector3) => void
  onMenuHoverEnd?: () => void
  onMenuClick?: (e: ThreeEvent<MouseEvent>, path: string) => void
}

const FONT_PATH = '/fonts/Orbitron_Regular.json'
const POSITION_Z = 0.3
const TEXT_COLOR = '#393937'
const menuList: Menu[] = [
  {
    value: 'Blog',
    description: 'Explore my thoughts and insights on various topics',
    position: (opts) => [
      opts.isMobile ? 0.1 : -opts.width / 2 + 0.55,
      opts.isMobile ? opts.height / 2 - 0.34 : 0.2,
      POSITION_Z,
    ],
    offset: [0.065, 0, 0],
    link: '/blog',
  },
  {
    value: 'Projects',
    description: 'Discover my latest projects and endeavors',
    position: (opts) => [
      opts.width / 2 - 0.45,
      opts.isMobile ? 0 : 0.2,
      POSITION_Z,
    ],
    offset: [0.08, 0, 0],
    link: '/projects',
  },
  {
    value: 'Gallery',
    description: 'View a curated selection of my photography',
    position: (opts) => [
      -opts.width / 2 + 0.55,
      opts.isMobile ? -0.18 : -0.3,
      POSITION_Z,
    ],
    offset: [0.06, -0.007, 0],
    link: '/gallery',
  },
  {
    value: 'About',
    description: 'Learn more about me',
    position: (opts) => [
      opts.width / 2 - 0.45,
      opts.isMobile ? -opts.height / 2 + 0.25 : -0.3,
      POSITION_Z,
    ],
    offset: [0.09, -0.007, 0],
    link: 'about',
  },
]

const MenuList = forwardRef((props: MenuListProps, ref) => {
  const [scale, setScale] = useState(0)
  const [targetScale, setTargetScale] = useState(0)
  const [groupPosition, setGroupPosition] = useState<Vector3>([0, -0.3, 0])
  const { width, height } = useThree((state) => state.viewport)
  const isMobile = useIsMobile()

  useImperativeHandle(ref, () => ({
    show: () => {
      setTargetScale(1)
      setGroupPosition(new THREE.Vector3(0, 0, 0))
    },
    hide: () => {
      setTargetScale(0)
      setGroupPosition(new THREE.Vector3(0, -0.3, 0))
    },
  }))

  useFrame(() => {
    setScale((prev) => {
      const delta = targetScale - prev
      const newScale = prev + delta * 0.3

      if (Math.abs(delta) < 0.01) {
        return targetScale
      }

      return newScale
    })
  })

  const handlePointerOver = (object: THREE.Object3D) => {
    const box = new THREE.Box3().setFromObject(object)
    const rightTopCorner = new THREE.Vector3(
      box.max.x - 0.04,
      box.max.y - 0.04,
      box.max.z
    )
    props.onMenuHover?.(rightTopCorner)
  }

  const setMouseStyle = (isPointer: boolean) => {
    document.body.style.cursor = isPointer ? 'pointer' : 'default'
  }

  return (
    <group scale={scale} position={groupPosition}>
      {menuList.map(({ value, description, position, offset, link }) => (
        <Center
          position={position({ width, height, isMobile })}
          key={value}
          scale={isMobile ? 0.8 : 1}
          onPointerEnter={() => setMouseStyle(true)}
          onPointerLeave={() => setMouseStyle(false)}
          onClick={(e) => props.onMenuClick?.(e, link)}
        >
          <mesh
            position={[0.16, 0.02, -0.02]}
            onPointerOver={(e) => handlePointerOver(e.object)}
            onPointerOut={props.onMenuHoverEnd}
          >
            <planeGeometry args={[0.38, 0.12]} />
            <meshBasicMaterial color="transparent" transparent opacity={0} />
          </mesh>
          <RoundedBox
            args={[0.1, 0.1, 0.05]}
            radius={0.02}
            position={[0.02, 0.03, -0.02]}
          >
            <meshPhysicalMaterial
              roughness={0.2}
              transmission={1}
              transparent
              opacity={0.9}
            />
          </RoundedBox>
          <Text3D size={0.06} height={0.03} font={FONT_PATH}>
            {value.charAt(0)}
            <GradientShaderMaterial />
          </Text3D>
          <Text3D size={0.04} height={0} font={FONT_PATH} position={offset}>
            {value.slice(1)}
            <meshStandardMaterial color={TEXT_COLOR} />
          </Text3D>
          <Text3D
            size={0.012}
            height={0}
            font={FONT_PATH}
            position={[-0.01, -0.04, 0]}
          >
            {description}
            <meshStandardMaterial color={TEXT_COLOR} />
          </Text3D>
        </Center>
      ))}
    </group>
  )
})

MenuList.displayName = 'MenuList'
export default MenuList
