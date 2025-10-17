import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import cloud from 'd3-cloud'
import skillsData, { Level } from './skills.data'

interface Word {
  text: string
  size: number
}

const SkillsWordCloud = () => {
  const svgRef = useRef<any>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const words: Word[] = []

  for (const skill of skillsData) {
    let value = 0

    switch (skill.level) {
      case Level.Beginner:
        value = 1
        break
      case Level.Intermediate:
        value = 2
        break
      case Level.Proficient:
        value = 3
        break
      case Level.Advanced:
        value = 4
        break
      case Level.Expert:
        value = 5
        break
      default:
        break
    }

    words.push({ text: skill.name, size: value * 20 })
  }

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg
    svg.selectAll('*').remove()

    const layout = cloud()
      .size([dimensions.width, dimensions.height])
      .words(words.map((d) => ({ text: d.text, size: d.size })))
      .padding(20)
      .rotate(() => ~~(Math.random() * 2) * 45)
      .font('Impact')
      .fontSize((d: Word) => d.size)
      .on('end', draw)

    layout.start()

    function draw(words: Word[]) {
      svg
        .attr('width', dimensions.width)
        .attr('height', dimensions.height)
        .append('g')
        .attr(
          'transform',
          `translate(${dimensions.width / 2},${dimensions.height / 2})`
        )
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style(
          'font-size',
          (d: Word) => `${(d.size * window.innerWidth) / 4000}px`
        )
        .style('opacity', 0.5)
        .style('font-family', 'Impact')
        .style(
          'fill',
          () => d3.schemeCategory10[Math.floor(Math.random() * 10)]
        )
        .attr('text-anchor', 'middle')
        .attr(
          'transform',
          (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`
        )
        .text((d: Word) => d.text)
    }
  }, [dimensions])

  return <svg ref={svgRef} className="animation-fade-in duration-1000" />
}

export default SkillsWordCloud
