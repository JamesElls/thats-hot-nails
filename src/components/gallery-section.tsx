"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { height: 400, width: 300, query: "anime character hand painted nail art detailed pink" },
  { height: 350, width: 300, query: "floral botanical nail art spring flowers delicate" },
  { height: 450, width: 300, query: "kawaii cute character nail art pastel colors" },
  { height: 320, width: 300, query: "french tip nail art modern elegant minimalist" },
  { height: 380, width: 300, query: "Disney character nail art hand painted detailed" },
  { height: 420, width: 300, query: "gradient ombre nail art sunset colors beautiful" },
  { height: 360, width: 300, query: "geometric abstract nail art modern artistic" },
  { height: 400, width: 300, query: "sanrio hello kitty nail art cute detailed" },
  { height: 340, width: 300, query: "nature inspired nail art butterflies flowers" },
  { height: 390, width: 300, query: "video game character nail art detailed colorful" },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-[#FFC0CB]/20 to-[#F4C2D7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
            Nail Art Is an <span className="text-[#FF69B4]">Art Form</span>
          </h2>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
                <img
                  src={`/generic-placeholder-icon.png?height=${img.height}&width=${img.width}&query=${encodeURIComponent(img.query)}`}
                  alt={`Nail art design ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#FF69B4]/0 group-hover:bg-[#FF69B4]/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#6B6B6B] mb-6 italic">
            Every set is a collaboration. Your ideas, Ryan&apos;s hands, something you&apos;ll obsess over.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#book">Create Your Own Set</a>
            </Button>
            <a
              href="https://instagram.com/thatshot.nails"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FF69B4] hover:text-[#FF69B4]/80 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              See more @thatshot.nails
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
