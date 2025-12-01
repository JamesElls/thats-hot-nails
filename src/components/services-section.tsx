"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Gel",
    image: "/images/gel.jpg",
    items: [
      { name: "Builder Gel Full Set", price: "$60", desc: null },
      { name: "Builder Gel Fill", price: "$55", desc: null },
      { name: "Gel-X", price: "$75", desc: null },
      { name: "Gel Polish", price: "$35", desc: null },
    ],
  },
  {
    title: "Pedicure",
    image: "/images/pedicure.jpg",
    items: [
      { name: "Dry Pedi", price: "$50", desc: null },
      { name: "Wellness Pedi", price: "$35", desc: null },
      { name: "Foot Mask", price: "$5", desc: "Add-on" },
    ],
  },
  {
    title: "Extras",
    image: "/images/extras.jpg",
    items: [
      { name: "Nail Art", price: "$1–$10+", desc: "Per nail" },
      { name: "Removal Only", price: "$20", desc: null },
      { name: "Grow Out Fee", price: "$15", desc: "Over 4 weeks" },
      { name: "Nail Repair", price: "$1–$3", desc: "Per nail" },
    ],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="pt-24 md:pt-24 pb-20 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          id="pricing"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
            Services & <span className="text-[#FF69B4]">Pricing</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group bg-gradient-to-br from-[#FFF5F5] to-[#F4C2D7]/20 rounded-2xl overflow-hidden border border-[#F4C2D7]/30 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#FF69B4] mb-4 pb-2 border-b border-[#FF69B4]/20">
                  {category.title}
                </h3>
                <div className="space-y-3">
  {category.items.map((item, index) => (
    <div key={index} className="flex flex-col">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#3D3D3D]">{item.name}</span>
        <span className="text-sm font-semibold text-[#FF69B4]">{item.price}</span>
      </div>
      {item.desc && <span className="text-xs text-[#6B6B6B]">{item.desc}</span>}
    </div>
  ))}
</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#6B6B6B] mb-6">
            Pricing may vary based on nail length and art complexity. Every service includes Ryan&apos;s signature
            30-minute prep for nails that last.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#book">Book Your Appointment</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}