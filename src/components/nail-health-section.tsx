"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Sparkles, Shield, Heart, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const healthFeatures = [
  {
    icon: Clock,
    title: "30 Minutes of Prep",
    description:
      "While other salons rush through prep in minutes, Ryan spends a full 30 minutes creating the perfect foundation. Proper cuticle work with her altered Russian manicure technique. This isn't just about looks—it's why her work lasts a full 3 weeks and why your natural nails stay healthy underneath.",
  },
  {
    icon: Sparkles,
    title: "Builder Gel on Natural Nails",
    description:
      "One of Ryan's specialties. Clients are amazed that they can grow their natural nails longer than they ever could before. Strength without damage—it's the best of both worlds.",
  },
  {
    icon: Shield,
    title: "HEMA-Free Products",
    description:
      "Ryan spent significant time researching and sourcing the right products. HEMA-free means fewer allergic reactions and healthier nails long-term. Your safety matters.",
  },
  {
    icon: Heart,
    title: "Correct Removal",
    description:
      "How products come off matters just as much as how they go on. No prying, no damage, no shortcuts. Ever.",
  },
  {
    icon: Wrench,
    title: "Fixing Other Salons' Damage",
    description:
      "Ryan regularly sees new clients with greenies, overly thick nails, or damage from improper techniques at other places. She knows how to clean these up and get nails back to healthy.",
  },
]

export default function NailHealthSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-[#E8B4C8]/20 to-[#F4C2D7]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            What If Your Nails Could Actually Be <span className="text-[#FF69B4]">Healthier?</span>
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Healthy nails, no compromises. Here&apos;s what makes the difference.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {healthFeatures.map((feature, index) => (
            <HealthFeatureItem key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-xl text-[#3D3D3D] italic mb-8">
            Gorgeous nails and healthy nails aren&apos;t mutually exclusive. You can have both.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#book">Experience Healthy Nails</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function HealthFeatureItem({ feature, index }: { feature: (typeof healthFeatures)[number]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-start gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#F4C2D7]/40 flex items-center justify-center">
        <feature.icon className="w-8 h-8 text-[#FF69B4]" />
      </div>
      <div className={`${index % 2 === 1 ? "md:text-right" : ""}`}>
        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-2">{feature.title}</h3>
        <p className="text-[#6B6B6B] leading-relaxed max-w-2xl">{feature.description}</p>
      </div>
    </motion.div>
  )
}
