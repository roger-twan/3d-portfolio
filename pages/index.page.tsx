import { useState } from 'react'
import HomeCanvas from './canvas/canvas'
import Loading from './loading'
import SkillsWordCloud from './skills-word-cloud'

const PageHome = () => {
  const [isCanvasReady, setIsCanvasReady] = useState(false)

  return (
    <div>
      {!isCanvasReady && <Loading />}
      <HomeCanvas onCanvasReady={() => setIsCanvasReady(true)} />
      <SkillsWordCloud />
    </div>
  )
}

export default PageHome
