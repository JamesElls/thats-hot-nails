"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewClientSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#F4C2D7] to-[#FFC0CB] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="w-24 h-24 text-white" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4 relative z-10">
            New to That&apos;s Hot Nails?
          </h2>
          <p className="text-lg text-[#3D3D3D]/80 mb-2 relative z-10">
            First-time clients get <span className="font-bold text-[#FF69B4]">$10 off</span> their appointment.
          </p>
          <p className="text-[#3D3D3D]/70 mb-8 relative z-10">
            Because everyone deserves to experience what nails can really be.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
          >
            <a href="#book">Book Your First Visit</a>
          </Button>
          <p className="mt-4 text-sm text-[#3D3D3D]/60 relative z-10">Mention this website when you book.</p>
        </motion.div>
      </div>
    </section>
  )
}
