"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function ArtSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
            Yes, It&apos;s All <span className="text-[#FF69B4]">Hand-Painted</span>
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
            When Ryan says hand-painted, she means it. Every detail, every character, every tiny element—painted by
            hand. Clients are genuinely shocked when they find out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-3">Clip Art Style & Character Work</h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                Ryan is known for her clip art style and character work, but she can replicate almost anything. Bring
                her your inspiration photos—whether you&apos;ve been planning for weeks or you&apos;re figuring it out
                right there in the chair—and she&apos;ll collaborate with you to create something amazing.
              </p>
            </div>

            <div className="border-l-4 border-[#FF69B4] pl-4">
              <p className="text-[#6B6B6B]">
                <span className="font-semibold text-[#3D3D3D]">The process:</span> Send your inspo pics ahead of time,
                or bring them to your appointment. Ryan loves the creative collaboration—watching a set come together
                from an idea to finished art is her favorite part.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#book">Book Your Custom Set</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#FF69B4]/10">
                <img
                  src="/studio-ghibli-totoro-hand-painted-nail-art-detaile.jpg"
                  alt="Studio Ghibli themed hand-painted nail art"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-sm text-[#6B6B6B] text-center">
                  <span className="font-semibold text-[#3D3D3D]">Client Favorite:</span> A full Studio Ghibli set
                  created for a client&apos;s trip to Japan. Every character hand-painted with obsessive detail.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
