"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, Clock, Users, Scissors, Heart, Sparkles, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const chainProblems = [
  { icon: Users, text: "You're one of several clients being juggled at once" },
  { icon: Clock, text: "Tech rushes through prep in minutes because time is money" },
  { icon: X, text: "Nails end up way thicker than they need to be" },
  { icon: Scissors, text: "Products aren't removed correctly, damaging your natural nail" },
  { icon: X, text: 'You leave with "greenies" you didn\'t have before' },
  { icon: Users, text: "Different technician every time who doesn't know your preferences" },
]

const ryanDifference = [
  { icon: Heart, text: "You're Ryan's only client during your appointment" },
  { icon: Clock, text: "30 minutes just on prep alone for a foundation that lasts" },
  { icon: Check, text: "Nails come out thin enough to use your hands normally" },
  { icon: Shield, text: "HEMA-free products and correct removal protect your natural nails" },
  { icon: Sparkles, text: "Builder gel means you can grow natural nails longer than ever" },
  { icon: Heart, text: "Same artist every time who remembers you and your preferences" },
]

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] text-balance">
            Tired of Thick, Rushed Nails That <span className="text-[#FF69B4]">Wreck Your Natural Ones?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Ryan's Difference - First on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[#FF69B4]/10 border border-[#F4C2D7]/30"
          >
            <h3 className="font-serif text-2xl font-bold text-[#FF69B4] mb-6">The That&apos;s Hot Nails Difference</h3>
            <div className="space-y-4">
              {ryanDifference.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4C2D7]/30 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#FF69B4]" />
                  </div>
                  <p className="text-[#3D3D3D] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#6B6B6B]">1.5 to 2+ hours of careful, detailed work. Every time.</p>
          </motion.div>

          {/* Chain Salon Reality - Second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-2 lg:order-1 bg-gray-100/80 rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl font-bold text-gray-500 mb-6">The Chain Salon Reality</h3>
            <div className="space-y-4">
              {chainProblems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300/50 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400 italic">
              30 minutes to an hour and you&apos;re out the door whether it&apos;s done right or not.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-serif text-xl md:text-2xl text-[#3D3D3D] mb-8 italic">
            Your nails deserve someone who actually cares. So do you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#book">Book Your First Appointment</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
