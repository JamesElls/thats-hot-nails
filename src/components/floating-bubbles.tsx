"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  drift: number
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const colors = [
      "rgba(255, 255, 255, 0.2)",
      "rgba(244, 194, 215, 0.18)",
      "rgba(255, 192, 203, 0.15)",
      "rgba(232, 180, 200, 0.12)",
    ]

    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 18; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100 + 100,
          size: Math.random() * 40 + 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 15 + 20,
          delay: Math.random() * 10,
          drift: (Math.random() - 0.5) * 100,
        })
      }
      setBubbles(newBubbles)
    }

    generateBubbles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            x: [0, bubble.drift, 0],
            opacity: [0, 0.2, 0.15, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            x: {
              duration: bubble.duration / 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  )
}
