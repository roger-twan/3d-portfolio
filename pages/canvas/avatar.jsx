import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const AvatarModel = (props) => {
  const avatarRef = useRef()
  const { nodes, materials } = useGLTF('models/default.glb')
  const { animations: standingAnimation } = useFBX('animations/standing.fbx')
  standingAnimation[0].name = 'Standing'
  const { actions } = useAnimations(standingAnimation, avatarRef)

  useFrame((state) => {
    if (avatarRef.current) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 0.8)
      avatarRef.current.getObjectByName('Head').lookAt(target)
    }
  })

  useEffect(() => {
    actions['Standing'].reset().play()
    Object.values(materials).forEach((material) => {
      material.transparent = true
      material.opacity = 0
    })
    startShow()
  }, [])

  const animateOpacity = (material, targetOpacity, duration = 1000) => {
    const startOpacity = material.opacity
    const startTime = performance.now()

    const animate = () => {
      const elapsed = (performance.now() - startTime) / duration
      const progress = Math.min(elapsed, 1)
      material.opacity = THREE.MathUtils.lerp(
        startOpacity,
        targetOpacity,
        progress
      )
      material.needsUpdate = true

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
      if (progress === 1 && props.onAnimateEnd) {
        props.onAnimateEnd()
      }
    }

    animate()
  }

  const startShow = () => {
    Object.values(materials).forEach((material) => {
      animateOpacity(material, 1)
    })
  }

  const startHide = () => {
    Object.values(materials).forEach((material) => {
      animateOpacity(material, 0)
    })
  }

  return (
    <group ref={avatarRef} dispose={null}>
      <group rotation-x={-Math.PI / 2} position-y={-1.4}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/default.glb')

export default AvatarModel
