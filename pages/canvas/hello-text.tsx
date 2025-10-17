import { Text3D, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import GradientShaderMaterial from '@/components/gradient-shader-material'
import { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import useIsMobile from '@/components/use-is-mobile'

const FONT_PATH = '/fonts/Orbitron_Regular.json'

const HelloText = forwardRef((props, ref: Ref<unknown> | undefined) => {
  const [scale, setScale] = useState(0)
  const [targetScale, setTargetScale] = useState(0)
  const isMobile = useIsMobile()

  useImperativeHandle(ref, () => ({
    show: () => setTargetScale(isMobile ? 0.8 : 1),
    hide: () => setTargetScale(0),
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

  return (
    <Center position={[0, -0.3, 0.3]} scale={scale}>
      <Text3D size={0.08} height={0.03} font={FONT_PATH}>
        Hi, I&apos;m Roger
        <GradientShaderMaterial />
      </Text3D>
      <Text3D
        position={[0, -0.075, 0]}
        size={0.04}
        height={0.02}
        font={FONT_PATH}
      >
        A Full-Stack Developer
        <GradientShaderMaterial />
      </Text3D>
    </Center>
  )
})

HelloText.displayName = 'HelloText'
export default HelloText
