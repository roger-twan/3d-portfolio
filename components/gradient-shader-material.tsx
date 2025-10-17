import * as THREE from 'three'

const GradientShaderMaterial = () => {
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
      vec3 color1 = vec3(0.2, 0.2, 0.2);
      vec3 color2 = vec3(213.0 / 255.0, 217.0 / 255.0, 163.0 / 255.0);
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `

  return (
    <shaderMaterial
      attach="material"
      args={[
        {
          vertexShader,
          fragmentShader,
          side: THREE.DoubleSide,
        },
      ]}
    />
  )
}

export default GradientShaderMaterial
