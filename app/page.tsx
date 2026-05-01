import { TopBar } from "@/components/top-bar"
import { CountdownBar } from "@/components/countdown-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { CosplaySection } from "@/components/cosplay-section"
import { ExclusiveBenefitSection } from "@/components/exclusive-benefit-section"
import { AudienceSection } from "@/components/audience-section"
import { GallerySection } from "@/components/gallery-section"
import { CommunitySection } from "@/components/community-section"
import { TicketLotsSection } from "@/components/ticket-lots-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"

export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <CountdownBar />
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <CosplaySection />
        <ExclusiveBenefitSection />
        <TicketLotsSection />
        <AudienceSection />
        <GallerySection />
        <CommunitySection />
        <FinalCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
