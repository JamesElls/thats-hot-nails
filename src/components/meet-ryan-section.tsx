"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function MeetRyanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-[#FFF5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-6">
              Meet <span className="text-[#FF69B4]">Ryan</span>
            </h2>
            <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
              <p>
                Ryan Hiramoto has been a professional nail artist for over 3 years. She went solo because she wanted
                something different—her own space, her own clients, her own way of doing things right.
              </p>
              <p className="italic border-l-4 border-[#F4C2D7] pl-4">
                &ldquo;I wanted my clients to feel like they&apos;re in a safe space. At other salons, people get cut,
                burned, or feel like they can&apos;t speak up if something&apos;s wrong. Here, you can tell me anything.
                If you don&apos;t like a color, we change it. If something feels off, we fix it. This is your
                appointment.&rdquo;
              </p>
              <p>
                Ryan&apos;s passion is hand-painted nail art—especially character art and detailed designs. There&apos;s
                nothing quite like seeing a client&apos;s reaction when they realize every detail was painted by hand.
                She&apos;s trained in character art, 3D art, and builder gel techniques, and she&apos;s always learning
                new skills.
              </p>
              <p>
                When you book with Ryan, you&apos;re not just getting a nail tech. You&apos;re getting someone who
                remembers the little things about your life, who genuinely wants to hear how things are going, and who
                treats every set like a piece of art.
              </p>
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-[#FF69B4] text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white rounded-full px-6 bg-transparent"
              >
                <a href="#book">Ready to meet your new nail artist?</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#F4C2D7] to-[#FFC0CB] overflow-hidden">
                <img
                  src="/professional-nail-artist-woman-working-in-cozy-stu.jpg"
                  alt="Ryan Hiramoto, nail artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#FF69B4] flex items-center justify-center text-white font-serif text-sm text-center p-2">
                3+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
