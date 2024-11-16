'use client'

import { useEffect, useRef} from 'react'
// import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleText  = `Hello I'm Ayaan. A passionate Software Engineer.`
  const roleText= `Java and React/Next.js`
  // const { displayText: roleText} = useTypingEffect(` Java and React/Next.js`, 100 )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Line properties
    const lines: Array<{
      x: number
      y: number
      length: number
      angle: number
      speed: number
      color: string
    }> = []

    // Create lines
    const createLines = () => {
      const lineCount = 15
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: 100 + Math.random() * 100,
          angle: Math.random() * Math.PI * 2,
          speed: 0.2 + Math.random() * 10,
          color: 'rgba(59, 130, 246, 0.2)' // Blue color with low opacity
        })
      }
    }
    createLines()

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        // Move line
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        // Wrap around edges
        if (line.x < -line.length) line.x = canvas.width + line.length
        if (line.x > canvas.width + line.length) line.x = -line.length
        if (line.y < -line.length) line.y = canvas.height + line.length
        if (line.y > canvas.height + line.length) line.y = -line.length

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        )
        ctx.strokeStyle = line.color
        ctx.lineWidth = 1
        ctx.stroke()
      })
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      <div className="relative z-10">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-lg text-gray-300">
            {titleText}
          </p>
          <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl">
            {roleText}
            <span className="text-blue-500"> developer</span>
          </h1>
          <div className="flex gap-4">
            <button className="bg-white text-black hover:bg-gray-100">
              Download CV
            </button>
            <button className="bg-[#1a2744] text-white hover:bg-[#243257]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}