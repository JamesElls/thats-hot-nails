"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Clock, Phone, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="book" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D]">
            Book Your <span className="text-[#FF69B4]">Appointment</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#6B6B6B]">
              Ready to book? Use Ryan&apos;s online scheduler or reach out directly.
            </p>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#" className="flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Book Online
              </a>
            </Button>

            <div className="pt-4 space-y-4">
              <a
                href="sms:+18015551234"
                className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#FF69B4] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Prefer to text? (801) 555-1234</span>
              </a>
              <a
                href="tel:+18015551234"
                className="flex items-center gap-3 text-[#6B6B6B] hover:text-[#FF69B4] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Questions? Call (801) 555-1234</span>
              </a>
            </div>
          </motion.div>

          {/* Location & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FF69B4]" />
                Find the Studio
              </h3>
              <div className="text-[#6B6B6B] space-y-1">
                <p className="font-medium text-[#3D3D3D]">Phenix Salon Suites</p>
                <p>Jordan Landing, West Jordan, Utah</p>
                <p className="text-sm italic mt-2">
                  (Not the big nail salon by Target—Ryan has her own private suite inside Phenix)
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white rounded-full bg-transparent"
              >
                <a href="#">Get Directions</a>
              </Button>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#3D3D3D] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FF69B4]" />
                Hours
              </h3>
              <div className="text-[#6B6B6B] space-y-2">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>9am - Last appointment at 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>9am - Last appointment at 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>9am - Last appointment at 5pm</span>
                </div>
                <div className="flex justify-between text-[#6B6B6B]/60">
                  <span>Tue, Fri, Sat, Sun</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-sm text-[#6B6B6B] mt-4 italic">By appointment only.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
