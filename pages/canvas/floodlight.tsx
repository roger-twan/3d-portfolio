import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Searchlight = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    varying vec2 vUv;
    void main() {
      float dist = distance(vUv, vec2(0.5, 0.5));
      float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
      vec3 color1 = vec3(207.0 / 255.0, 235.0 / 255.0, 253.0 / 255.0); // #CFEBFD
      vec3 color2 = vec3(213.0 / 255.0, 217.0 / 255.0, 163.0 / 255.0); // #D5D9A3
      float mixFactor = smoothstep(0.2, 0.5, dist);
      vec3 mixedColor = mix(color1, color2, mixFactor);
      gl_FragColor = vec4(mixedColor, alpha);
    }
  `

  useFrame((state) => {
    if (meshRef.current) {
      const target = new THREE.Vector3(
        state.mouse.x * 6,
        state.mouse.y * 6,
        -10
      )
      const ref: THREE.Mesh = meshRef.current
      ref.position.copy(target)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <circleGeometry args={[10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        transparent={true}
      />
    </mesh>
  )
}

export default Searchlight
