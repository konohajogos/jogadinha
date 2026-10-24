import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { CosplaySection } from "@/components/cosplay-section"
import { ExclusiveBenefitSection } from "@/components/exclusive-benefit-section"
import { PizzaRodizioSection } from "@/components/pizza-rodizio-section"
import { AudienceSection } from "@/components/audience-section"
import { CommunitySection } from "@/components/community-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { MessageCircle, Phone } from "lucide-react"

export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <CosplaySection />
        <ExclusiveBenefitSection />
        <PizzaRodizioSection />
        <AudienceSection />
        <CommunitySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
      <a
        href="https://wa.me/5566992005065?text=Quero%20saber%20sobre%20a%20Jogadinha%20Nerd%20-%20Ed.%20Halloween"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a Jogadinha Nerd pelo WhatsApp"
        className="fixed bottom-24 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-8 w-8" strokeWidth={2.2} aria-hidden="true" />
        <Phone className="absolute h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
      </a>
    </>
  )
}
