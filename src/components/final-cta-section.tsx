"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function FinalCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-[#F4C2D7]/30 to-[#FFC0CB]/20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-6">
            Your Nails <span className="text-[#FF69B4]">Deserve Better</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-2xl mx-auto">
            Healthy nails. Hand-painted art. An artist who actually cares. Book with Ryan and see the difference.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#FF69B4]/30 transition-all duration-300"
          >
            <a href="#book">Book Now</a>
          </Button>
          <p className="mt-6 text-sm text-[#6B6B6B]">
            Text Ryan at (801) 555-1234 if you have questions before booking.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
