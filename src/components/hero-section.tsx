"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative pt-[200px] pb-[70px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#FFF5F5] to-[#F4C2D7]/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFC0CB]/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D3D3D] leading-tight text-balance">
            Healthy Nails... <span className="text-[#FF69B4]">Thats HOT</span>{" "}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          Hand-painted art. Obsessive prep work. One artist, one client, zero rushing. This is what your nails have been
          missing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#FF69B4]/30 transition-all duration-300 animate-pulse"
          >
            <a href="#book">Book Your Appointment</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-1"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FF69B4] text-[#FF69B4]" />
          ))}
          <span className="ml-2 text-[#6B6B6B] text-sm">
            Clients stay for years once they experience the difference
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-sm text-[#6B6B6B]"
        >
          By appointment only · West Jordan, Utah
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF5F5] to-transparent" />
    </section>
  )
}
