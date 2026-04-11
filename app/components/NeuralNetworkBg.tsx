'use client'

import { useEffect, useRef } from 'react'

export default function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle class for better organization
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      pulse: number
      pulseSpeed: number

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 3 + 1.5
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.03
        this.color = `hsl(${180 + Math.random() * 60}, 100%, 60%)`
      }

      update(width: number, height: number, mouseX: number, mouseY: number) {
        // Mouse interaction - repulsion effect
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - distance) / 150 * 0.5
          this.vx += Math.cos(angle) * force
          this.vy += Math.sin(angle) * force
        }

        // Update position
        this.x += this.vx
        this.y += this.vy
        
        // Damping
        this.vx *= 0.99
        this.vy *= 0.99
        
        // Wrap around edges (continuous flow)
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
        
        // Update pulse
        this.pulse += this.pulseSpeed
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulseSize = this.radius + Math.sin(this.pulse) * 1.5
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 2)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(0.5, `rgba(78, 205, 196, 0.6)`)
        gradient.addColorStop(1, 'rgba(255, 107, 107, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = 200
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    // Mouse position tracking
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let targetMouseX = mouseX
    let targetMouseY = mouseY

    canvas.addEventListener('mousemove', (e) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    })

    // Smooth mouse follow
    let animationId: number

    // Star field background
    const stars: { x: number; y: number; radius: number; alpha: number }[] = []
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.5
      })
    }

    const draw = () => {
      if (!ctx || !canvas) return

      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Clear with fade effect (creates trail)
      ctx.fillStyle = 'rgba(5, 5, 10, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars (static background)
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.5})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height, mouseX, mouseY)
        particle.draw(ctx)
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, `rgba(78, 205, 196, ${opacity})`)
            gradient.addColorStop(1, `rgba(255, 107, 107, ${opacity})`)
            
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        }
      }

      // Draw mouse glow effect
      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100)
      mouseGlow.addColorStop(0, 'rgba(78, 205, 196, 0.15)')
      mouseGlow.addColorStop(1, 'rgba(255, 107, 107, 0)')
      ctx.fillStyle = mouseGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(draw)
    }

    draw()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Reposition stars
      stars.length = 0
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random() * 0.5
        })
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}