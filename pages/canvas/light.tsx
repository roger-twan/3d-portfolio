const Light = () => {
  const color = 'white'
  return (
    <>
      {/* key light */}
      <spotLight position={[-10, 5, 10]} intensity={1.2} color={color} />

      {/* fill light */}
      <spotLight position={[10, 5, 10]} intensity={0.6} color={color} />

      {/* back light */}
      <spotLight position={[5, 5, -5]} intensity={0.6} color={color} />
    </>
  )
}

export default Light
