import { CTASection } from "@/components/shared/home/CTA";
import { FeaturesSection } from "@/components/shared/home/Features";
import Hero from "@/components/shared/home/Hero";
import { PortfolioPreviewSection } from "@/components/shared/home/Portfolio";
import { ServicesSection } from "@/components/shared/home/Services";
import { TestimonialsSection } from "@/components/shared/home/Testimoni";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection/>
      <ServicesSection/>
      <PortfolioPreviewSection/>
      <TestimonialsSection/>
      <CTASection/>
    </>
  );
}
