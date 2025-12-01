"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-[#F4C2D7]/30" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <span className="font-serif text-xl md:text-2xl font-bold text-[#FF69B4]">That&apos;s Hot Nails</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#3D3D3D] hover:text-[#FF69B4] transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Book Now Button - Desktop */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-[#FF69B4]/30 hover:shadow-xl transition-all duration-300"
              >
                <a href="#book">Book Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#3D3D3D]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#3D3D3D] hover:text-[#FF69B4] transition-colors font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white px-8 py-3 rounded-full shadow-lg mt-4"
              >
                <a href="#book" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
