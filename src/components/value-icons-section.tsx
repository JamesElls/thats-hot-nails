"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Clock, Sparkles, Palette } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "One-on-One",
    description: "You're the only client during your appointment",
  },
  {
    icon: Clock,
    title: "30-Min Prep",
    description: "Proper foundation for nails that last",
  },
  {
    icon: Sparkles,
    title: "Healthy Nails",
    description: "HEMA-free products & correct techniques",
  },
  {
    icon: Palette,
    title: "Hand-Painted Art",
    description: "Every detail painted by hand",
  },
]

export default function ValueIconsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 bg-[linear-gradient(to_bottom,transparent_50%,white_50%)]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FF69B4] rounded-3xl py-6 md:py-6 px-6 md:px-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">{value.title}</h3>
                <p className="text-sm text-white/80 leading-snug">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}