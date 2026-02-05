import PageLoader from "@/components/layout/PageLoader";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import AppShowcase from "@/components/sections/AppShowcase";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-dark-bg">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <Pricing />
        <Testimonials />
        <Stats />
        <CTA />
      </main>
    </PageLoader>
  );
}
