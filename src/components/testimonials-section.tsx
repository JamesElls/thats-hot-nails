"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I still can't believe she hand-paints everything. The detail is insane. I get compliments constantly and I always tell people—yes, one person painted all of this by hand.",
    name: "Michelle",
    highlight: "About the art",
  },
  {
    quote:
      "My nails from chain salons were always so thick I couldn't even type normally. Ryan's work is so thin and natural-feeling. And my actual nails underneath are healthier than they've been in years.",
    name: "Jessica",
    highlight: "About nail health",
  },
  {
    quote:
      "I've been coming to Ryan since she graduated and I'm never going anywhere else. She remembers everything about my life, the vibe is so cozy, and I always leave obsessed with my nails.",
    name: "Sarah",
    highlight: "About the experience",
  },
  {
    quote:
      "I used to go to the big salon and just accepted that my nails would be damaged and thick. I had no idea it could be different. Now I tell everyone—find a solo artist who actually takes their time.",
    name: "Amanda",
    highlight: "About switching",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#FFF5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D]">
            Why Clients <span className="text-[#FF69B4]">Stay</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 relative shadow-sm"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#F4C2D7]" />
              <p className="text-xs font-medium text-[#FF69B4] mb-3 uppercase tracking-wide">{testimonial.highlight}</p>
              <p className="text-[#3D3D3D] leading-relaxed mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#3D3D3D]">— {testimonial.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF69B4] text-[#FF69B4]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
