import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ValueIconsSection from "@/components/value-icons-section"
import ServicesSection from "@/components/services-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import NailHealthSection from "@/components/nail-health-section"
import MeetRyanSection from "@/components/meet-ryan-section"
import ArtSection from "@/components/art-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ExperienceSection from "@/components/experience-section"
import NewClientSection from "@/components/new-client-section"
import LocationSection from "@/components/location-section"
import FinalCtaSection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import FloatingBubbles from "@/components/floating-bubbles"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <FloatingBubbles />
      <Navigation />
      <HeroSection />
      <ValueIconsSection />
      <ServicesSection />
      <ProblemSolutionSection />
      <NailHealthSection />
      <MeetRyanSection />
      <GallerySection />
      <ArtSection />
      <TestimonialsSection />
      <ExperienceSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
