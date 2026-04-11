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

    // Beautiful color palette
    const colors = [
      '#4ecdc4',  // Teal
      '#ff6b6b',  // Coral
      '#00f3ff',  // Cyan
      '#9b59b6',  // Purple
      '#f39c12',  // Orange
      '#1abc9c',  // Mint
      '#e74c3c',  // Red
      '#3498db',  // Blue
    ]

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      alpha: number
      originalX: number
      originalY: number
      pulsePhase: number

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.originalX = this.x
        this.originalY = this.y
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.radius = Math.random() * 2.5 + 1.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.5 + 0.3
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update(width: number, height: number) {
        // Gentle floating motion
        this.x += this.vx
        this.y += this.vy
        
        // Return to original position slowly
        this.x += (this.originalX - this.x) * 0.01
        this.y += (this.originalY - this.y) * 0.01
        
        // Boundary check
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
        
        // Update pulse
        this.pulsePhase += 0.03
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulseScale = 0.8 + Math.sin(this.pulsePhase) * 0.3
        const currentRadius = this.radius * pulseScale
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fill()
        
        // Reset shadow
        ctx.shadowBlur = 0
      }
    }

    // Create particles
    const particleCount = 120
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    // Animate floating orbs (large background elements)
    class Orb {
      x: number
      y: number
      radius: number
      color: string
      alpha: number
      angle: number
      speed: number

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 100 + 50
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = 0.03
        this.angle = Math.random() * Math.PI * 2
        this.speed = 0.002 + Math.random() * 0.003
      }

      update(width: number, height: number) {
        this.angle += this.speed
        this.x += Math.sin(this.angle) * 0.2
        this.y += Math.cos(this.angle * 0.7) * 0.2
        
        if (this.x < -this.radius) this.x = width + this.radius
        if (this.x > width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = height + this.radius
        if (this.y > height + this.radius) this.y = -this.radius
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, this.color + '20')
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }
    }

    // Create orbs
    const orbs: Orb[] = []
    for (let i = 0; i < 5; i++) {
      orbs.push(new Orb(canvas.width, canvas.height))
    }

    // Mouse interaction
    let mouseX = -1000
    let mouseY = -1000

    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    canvas.addEventListener('mouseleave', () => {
      mouseX = -1000
      mouseY = -1000
    })

    let animationId: number

    const draw = () => {
      if (!ctx || !canvas) return

      // Clear with fade effect
      ctx.fillStyle = 'rgba(5, 5, 10, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw orbs (soft background glow)
      orbs.forEach(orb => {
        orb.update(canvas.width, canvas.height)
        orb.draw(ctx, canvas.width, canvas.height)
      })

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.15
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            
            // Gradient line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
            gradient.addColorStop(0, p1.color + Math.floor(opacity * 255).toString(16))
            gradient.addColorStop(1, p2.color + Math.floor(opacity * 255).toString(16))
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)
      })

      // Draw mouse glow effect
      if (mouseX > 0 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height) {
        const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150)
        mouseGradient.addColorStop(0, 'rgba(78, 205, 196, 0.08)')
        mouseGradient.addColorStop(1, 'transparent')
        ctx.fillStyle = mouseGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}