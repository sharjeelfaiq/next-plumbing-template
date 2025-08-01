'use client'

import React, { useRef, useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  threshold?: number
  stagger?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 30,
  threshold = 0.2,
  stagger = 0
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Calculate x and y based on direction
    const x = direction === 'left' ? distance : direction === 'right' ? -distance : 0
    const y = direction === 'up' ? distance : direction === 'down' ? -distance : 0

    // Create animation
    const animation = gsap.fromTo(
      element,
      { 
        autoAlpha: 0,
        ...(x !== 0 ? { x } : {}),
        ...(y !== 0 ? { y } : {})
      },
      {
        autoAlpha: 1,
        ...(x !== 0 ? { x: 0 } : {}),
        ...(y !== 0 ? { y: 0 } : {}),
        duration,
        delay,
        ease: 'power2.out',
        stagger,
        scrollTrigger: {
          trigger: element,
          start: `top bottom-=${threshold * 100}%`,
          toggleActions: 'play none none none'
        }
      }
    )

    return () => {
      // Clean up animation
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
      animation.kill()
    }
  }, [delay, direction, distance, duration, stagger, threshold])

  return (
    <div ref={ref} className={className} style={{ opacity: 0, visibility: 'hidden' }}>
      {children}
    </div>
  )
} 