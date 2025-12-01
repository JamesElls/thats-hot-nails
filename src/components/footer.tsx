"use client"

import { Instagram, Phone, MapPin, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Ryan" },
  { href: "#book", label: "Book Now" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F4C2D7] to-[#FF69B4] text-white">
      {/* Top CTA Banner */}
      <div className="bg-[#FF69B4] py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-white/80" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
              Ready for nails you&apos;ll love?
            </span>
            <Sparkles className="w-5 h-5 text-white/80" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Book Your Appointment Today</h3>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#FF69B4] hover:bg-white/90 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            <a href="#book">Book Now</a>
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#E8567A]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">That&apos;s Hot Nails</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Healthy nails, hand-painted art, one client at a time.
              </p>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Heart className="w-4 h-4 fill-current" />
                <span>Made with love in West Jordan, Utah</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Let&apos;s Connect</h4>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/thatshot.nails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  @thatshot.nails
                </a>
                <a
                  href="tel:+18015551234"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  (801) 555-1234
                </a>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  West Jordan, Utah
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-white/70 text-sm">By appointment only · Phenix Salon Suites, Jordan Landing</p>
            <p className="text-white/50 text-xs mt-2">
              © {new Date().getFullYear()} That&apos;s Hot Nails. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
