"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Sparkles, Heart } from "lucide-react"

const experienceSteps = [
{
  icon: Calendar,
  title: "Before",
  content: "Book online or text Ryan. Send inspo pics if you have them.",
},
{
  icon: Sparkles,
  title: "During",
  content: "1.5–2+ hours of Ryan's complete attention.",
},
{
  icon: Heart,
  title: "After",
  content: "Nails you'll obsess over. Thin, functional, healthy. Rebook in ~3 weeks.",
},
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D]">
            Your <span className="text-[#FF69B4]">Appointment</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experienceSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#F4C2D7]/30 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-[#FF69B4]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-3">{step.title}</h3>
              <p className="text-[#6B6B6B] leading-relaxed">{step.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-[#FFF5F5] rounded-2xl p-6 border border-[#F4C2D7]/30"
        >
          <p className="text-[#6B6B6B]">
            <span className="font-semibold text-[#3D3D3D]">First visit?</span> Ryan will spend extra time getting to
            know your nails and preferences. This is the start of a relationship, not a transaction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
